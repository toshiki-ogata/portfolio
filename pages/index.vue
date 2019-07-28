<template lang="pug">
  div
    Header
    main.main
      About
      Project
      Contact
    Footer
</template>

<script>
import Footer from '~/components/structure/Footer.vue'
import Header from '~/components/structure/Header.vue'
import About from '~/components/top/About.vue'
import Contact from '~/components/top/Contact.vue'
import Project from '~/components/top/Project.vue'

export default {
  components: {
    Footer,
    Header,
    About,
    Contact,
    Project
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0 4%;
  margin: 0 auto;
  @include mq {
    max-width: 1040px;
    padding: 0 40px;
  }
}
</style>
