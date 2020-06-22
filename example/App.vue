<template>
  <div>
    <section class="example">
      <el-input class="mb-50" v-model="title"></el-input>

      <div class="example__title">示例1</div>
      <div
        v-clamp="{
          content: title,
        }"></div>
    </section>

    <section class="example">
      <div class="example__title">示例2</div>
      <div
        class="mt-20 homework-card__title"
        v-clamp="{
          row: 6,
          content: title,
          class: 'detailTitle'
        }">
        <span
          v-if="isPublished"
          class="homework-card__tag"
          :class="{
              'homework-card__tag--todo': submitStatus === 1,
              'homework-card__tag--complete': submitStatus === 2,
              'homework-card__tag--reviewed': submitStatus === 3
            }">{{submitStatus === 1 ? '一个标签' : submitStatus === 2 ? '一个标签' : '一个标签'}}</span>
        <span class="detailTitle"></span>
      </div>
    </section>

    <!-- <section class="example">
      <div class="example__title">示例3</div>
      <el-tooltip
        :content="title"
        placement="top"
        effect="light"
        :disabled="!isTitleClamp">
        <span
          v-clamp="{
            content: title,
            cb: obj => getClampResult(obj, 'isTitleClamp')
          }"></span>
      </el-tooltip>
    </section> -->


    <section class="example">
      <div class="example__title">示例4</div>
      <div
        class="flex-box"
        :class="{ 'flex-box--active': isActive }"
        v-clamp="{
          row: 2,
          content: title,
          delay: 300
        }">
      </div>
      <el-button type="text" @click="isActive = !isActive">改变状态</el-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      title: '测试输入内容五十个字测试输入内容五十个字测试输入内容五十个字测试输入内容五十个字测试输入内容五十个字',
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

<style lang="scss">
  @import './src/scss/index.scss';
  .example {
    width: 300px;
    margin: 50px auto;
    &__title {
      margin-bottom: 10px;
    }
  }
  .flex-box {
    border: 1px solid black;
    width: 200px;
    transition: all 0.3s;
    &--active {
      width: 300px;
    }
  }
  @include b(homework-card) {

    @include e(title) {
      margin-bottom: 10px;
      font-size: 18px;
      color: #333333;
      border: 1px solid #E6E6E6;
      width: 100%;
      line-height: 22px;
      span {
        vertical-align: middle;
      }
      & span:last-child {
        font-weight: bold;
      }
    }

    @include e(tag) {
      flex-shrink: 0;
      font-size: 14px;
      margin-right: 10px;
      line-height: 22px;
      height: 24px;
      padding: 0 8px;
      border: 1px solid;
      line-height: 22px;
      border-radius: 3px;
      vertical-align: middle;
      @include m(todo) {
        color: $statusRed;
        border-color: $statusRed;
      }
      @include m(complete) {
        color: $statusYellow;
        border-color: $statusYellow;
      }
      @include m(reviewed) {
        color: $statusBlue;
        border-color: $statusBlue;
      }
    }
    @include e(info) {
      height: 50px;
      padding: 15px 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      @include m(left) {
        display: flex;
        align-items: center;

      }
      @include m(right) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-shrink: 0;
        flex: 1;
        min-width: 190px;
        .time {
          margin-left: 10px;
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }
</style>