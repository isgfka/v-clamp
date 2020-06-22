<template>
  <section class="example">
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