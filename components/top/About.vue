<template lang="pug">
  div.container
    Heading.heading About
    p.text サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
    Button Read More
</template>

<script>
import Button from '~/components/siteWide/Button.vue'
import Heading from '~/components/top/Heading.vue'

export default {
  components: {
    Button,
    Heading
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  margin: 0 auto 64px;
  @include mq {
    margin-bottom: 100px;
    max-width: 600px;
  }
}
.heading {
  margin-bottom: 24px;
  @include mq {
    margin-bottom: 32px;
  }
}

.text {
  color: #8892b0;
  margin-bottom: 32px;
  font-size: 1.4rem;
  @include mq {
    font-size: 1.6rem;
    margin-bottom: 48px;
  }
}
</style>
