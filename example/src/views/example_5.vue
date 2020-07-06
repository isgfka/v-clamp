<template>

  <section class="example">
    <div class="example__title">示例2</div>
    <div
      class="mt-20 homework-card__title"
      v-clamp="{
        row: 3,
        content: title,
        class: 'detailTitle'
      }">
      <span
        v-if="isPublished"
        style="line-height: 40px;"
        class="homework-card__tag"
        :class="{
            'homework-card__tag--todo': submitStatus === 1,
            'homework-card__tag--complete': submitStatus === 2,
            'homework-card__tag--reviewed': submitStatus === 3
          }">{{submitStatus === 1 ? '一个标签' : submitStatus === 2 ? '一个标签' : '一个标签'}}</span>
      <span style="line-height: 0;" class="xdetailTitle"></span>
    </div>

    <div class="div1">
      <span class="span1">123123123啊啊啊</span>
    </div>

    <span class="span1">123123123啊啊啊</span>


    <div
      class="div2"
      v-clamp="{
        row: 3,
        content: title,
        class: 'detailTitle'
      }">
      <span
        class="span2">一个标签</span>
      <span class="detailTitle"></span>
    </div>
  </section>

</template>

<style lang="scss" scoped>
  @import '../assets/scss/index';
  .div1 {
    line-height: 40px;
    border: 1px solid black;
    height: 80px;
  }
  .div2 {
    margin-top: 20px;
    border: 1px solid black;
  }
  .span2 {
    flex-shrink: 0;
    font-size: 14px;
    margin-right: 10px;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 3px;
    color: $statusRed;
    border-color: $statusRed;
  }
</style>

<script>
export default {
  name: 'app',
  components: {
  },
  props: ['title'],
  data () {
    return {
      isPublished: true,
      submitStatus: 1,
      isTitleClamp: false,
      isActive: false
    };
  },
  computed: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    getClampResult (obj, keyName) {
      this[keyName] = obj.isMultiple;
    }
  }
};
</script>
