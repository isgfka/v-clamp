<template>

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