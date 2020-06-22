<template>
  <section class="example">
    <div class="example__title">示例1</div>
    <div
      style="border: 1px solid black;"
      v-clamp="{
        content: title,
      }"></div>
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