<template lang="pug">
  header.container
    h1.title
      nuxt-link.titleLink(to="/") Toshiki Ogata
    nav
      ul.navList
        li.navListItem
          nuxt-link.navListItemLink(to="/") about
        li.navListItem
          nuxt-link.navListItemLink(to="/") Projects
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 0 4%;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0 auto 64px;
  @include mq {
    max-width: 1040px;
    padding: 0 40px;
    height: 64px;
    margin-bottom: 100px;
  }
}
.title {
  color: #fff;
  font-size: 1.6rem;
  font-weight: $fontWeight-md;
  @include mq {
    font-size: 1.8rem;
  }
}
.titleLink {
  color: #fff;
  text-decoration: none;
}
.navList {
  list-style: none;
  display: flex;
  font-size: 1.4rem;
  @include mq {
    font-size: 1.6rem;
  }
}
.navListItem {
  &:not(:first-child) {
    margin-left: 1.5em;
  }
}
.navListItemLink {
  @include hover;

  color: #fff;
  text-decoration: none;
}
</style>
