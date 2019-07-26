<template>
  <div>
    <Header />
    <Button />
    <About />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Button from '~/components/siteWide/Button.vue'
import Footer from '~/components/structure/Footer.vue'
import Header from '~/components/structure/Header.vue'
import About from '~/components/top/About.vue'
import Contact from '~/components/top/Contact.vue'
import Project from '~/components/top/Project.vue'

export default {
  components: {
    Button,
    Footer,
    Header,
    About,
    Contact,
    Project
  }
}
</script>

<style lang="scss" scoped>
.component {
  /* test */
}
</style>
