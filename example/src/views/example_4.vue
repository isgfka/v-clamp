<template>
  <section class="example">
    <div class="example__title">示例4</div>
    <div
      class="flex-box"
      :class="{ 'flex-box--active': isActive }"
      v-clamp="{
        row: 2,
        content: title,
        delay: 300
      }"></div>
    
    <el-button type="text" @click="isActive = !isActive">改变状态</el-button>
  </section>
</template>

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


<style lang="scss" scoped>

</style>