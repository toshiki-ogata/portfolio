<template lang="pug">
  h2.heading
    slot
</template>

<style lang="scss" scoped>
.heading {
  color: #fff;
  font-size: 2.8rem;
  @include mq {
    font-size: 3.2rem;
  }
}
</style>
