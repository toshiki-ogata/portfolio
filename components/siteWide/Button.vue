<template lang="pug">
   nuxt-link.button(to="/")
    slot
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  background-color: transparent;
  border: 1px solid $primary;
  cursor: pointer;
  outline: none;
  color: $primary;
  text-decoration: none;
  padding: 0.75em 1.5em;
  text-align: center;
  display: inline-block;
  appearance: none;
  min-width: 132px;
  transition: all 0.3s;
  border-radius: 3px;
  font-size: 1.4rem;
  &:hover {
    background-color: rgba(100, 255, 218, 0.07);
  }
  @include mq {
    min-width: 162px;
    padding: 0.95em 1.5em;
  }
}
</style>
