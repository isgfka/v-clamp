/* eslint-disable */
/**
 * Usage: v-clamp="{
 *    content: detail.title,
 *    row: 1,
 *    delay: 1000,
 *    cb: () => {},
 *    class: targetClass,
 *    isExpand: isExpand (a variable that control expand)
 * }"
 *
 * Options:
 * content: data to bind - required
 * row: row to limit, default: 1 - optional
 * delay: time to delay rerender, default: undefined - optional
 * cb: callback func
 * class: children targetClass
 * isExpand: control display all content or subContent
 *
 *
 * Attention: width of element need to be measurable, not dynamic ！！！
 */

/**
 * a certained elem width is needed to calulate a clamped content
 * @param {VNode} node
 * @param {object} binding
 */
// eslint-disable-next-line complexity
function checkTextHeight (node, binding) {
  let rawContent = binding.value.content;
  let limitRows = binding.value.row || 1;
  let targetNodeClass = binding.value.class; // TargetNode innerHTML of which to be modified.
  let measureNode = node.elm; // Node that was bound with directive clamp.
  let targetNode;
  if (!rawContent) return;
  if (targetNodeClass) {
    targetNode = measureNode.querySelector(`.${targetNodeClass}`);
  } else {
    targetNode = node.elm;
  }
  if (!targetNode) {
    console.warn('cannot find targetNode');
    return;
  }
  if (+limitRows !== limitRows && isNaN(limitRows)) {
    console.error('row must be a number');
    return;
  }
  let maxHeight;
  const END_CHAR = '...';
  forceElemWordbreak(targetNode);
  targetNode.innerHTML = '加载中';
  let tOtherHeight = computedEffectHeightCSS(targetNode);
  let mOtherHeight = computedEffectHeightCSS(measureNode);
  let oneLineSurplusHeight = (measureNode.offsetHeight - mOtherHeight) - (targetNode.offsetHeight - tOtherHeight);
  // line-height can be effected by vertical-align
  const targetContentLineHeight = targetNode.offsetHeight - tOtherHeight;
  let textContent = rawContent.replace(/\n/g, '').replace(/\r/g, ''); // remove Word wrap
  targetNode.innerHTML = textContent;
  maxHeight = oneLineSurplusHeight + targetContentLineHeight * limitRows + tOtherHeight;
  if (targetNode.offsetHeight <= maxHeight) {
    binding.value.cb && binding.value.cb({
      isMultiple: false,
      subContent: ''
    });
    return;
  }
  let isExpand = binding.value.isExpand;
  if (isExpand) return;

  let obj = measureText(textContent);
  let content = obj.subContent;
  let isMultiple = obj.isMultiple;
  binding.value.cb && binding.value.cb(obj);
  // slice(0, -2) in case that when length changes may cause text overflow.
  targetNode.innerHTML = isMultiple ? `${content.slice(0, -1)}${END_CHAR}` : content;

  /**
   * Calculate clamped content
   * @param {string} textStr
   * @param {number} startLoc
   * @param {number} endLoc
   * @param {number} lastSuccessLoc
   */
  function measureText (textStr, startLoc = 0, endLoc = textStr.length, lastSuccessLoc = 0) {
    let midLoc = Math.floor((startLoc + endLoc) / 2);
    let currentStr = textStr.slice(0, midLoc) + END_CHAR;
    if (startLoc >= endLoc - 1) {
      while (targetNode.offsetHeight > maxHeight) {
        targetNode.innerHTML = textStr.slice(0, --endLoc) + END_CHAR;
      }
      return {
        isMultiple: true,
        subContent: textStr.slice(0, endLoc)
      };
    }
    targetNode.innerHTML = currentStr;
    if (targetNode.offsetHeight <= maxHeight) {
      return measureText(textStr, midLoc, endLoc, midLoc);
    }
    return measureText(textStr, startLoc, midLoc, lastSuccessLoc);
  };

  /**
   * Prevent invalid input like a long string of English letters.
   * @param {HTMLElement} elem
   */
  function forceElemWordbreak (elem) {
    if (elem instanceof HTMLElement) {
      elem.style.wordBreak = 'break-all';
      elem.style.whiteSpace = 'normal';
    }
  }
  /**
   * computed CSS attribute that can effect dom height. ex: paddingTop、paddingBottom...
   * @param {HTML Element} el
   */
  function computedEffectHeightCSS (el) {
    let paddingTop = +getComputedStyle(el).paddingTop.replace('px', '');
    let paddingBottom = +getComputedStyle(el).paddingBottom.replace('px', '');
    let borderTop = +getComputedStyle(el).borderTopWidth.replace('px', '');
    let borderBottom = +getComputedStyle(el).borderBottomWidth.replace('px', '');
    return paddingTop + paddingBottom + borderTop + borderBottom;
  }
};
/**
 * run directive
 * @param {HTMLElement} el
 * @param {Object} binding
 * @param {VNode} node
 */
function run (el, binding, node) {
  let delay = binding.value.delay || false;
  if (!delay) checkTextHeight(node, binding);
  else {
    setTimeout(() => {
      // debugger;
      checkTextHeight(node, binding);
    }, delay + 100);
  }
}

export default {
  install (Vue) {
    Vue.directive('clamp', {
      name: 'clamp',
      inserted: run,
      componentUpdated: (el, binding, node) => {
        run(el, binding, node);

        if (binding.oldValue.content !== binding.value.content) {
          run(el, binding, node);
        }
      }
    });
  }
};
