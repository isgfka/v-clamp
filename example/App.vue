<template>
  <div>
    <template v-for="route in routers">
      <el-button
        :key="route"
        type="text"
        @click="$router.push({ name: route })"
      >{{route}}</el-button>
    </template>

    <el-input
      class="mb-50"
      v-model="title"
    ></el-input>

    <router-view :title="title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      routers: ['sample_1', 'sample_2', 'sample_3', 'sample_4'],
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
  @import './src/assets/scss/index';
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