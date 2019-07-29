<template lang="pug">
  footer.footer
    div.inner
      ul.sns
        li.snsItem
          a.snsItemLink(href="/", target="_blank", rel="noopener")
            font-awesome-icon.snsItemIcon(:icon="['fab', 'github']")
        li.snsItem
          a.snsItemLink(href="/", target="_blank", rel="noopener")
            font-awesome-icon.snsItemIcon(:icon="['fab', 'facebook']")
        li.snsItem
          a.snsItemLink(href="/", target="_blank", rel="noopener")
            font-awesome-icon.snsItemIcon(:icon="['fab', 'twitter']")
      p.copylight © 2019 Toshiki Ogata
</template>

<style lang="scss" scoped>
.footer {
  background: #020c1b;
  padding: 32px 4% 26.4px;
  margin: 160px auto 0;
  @include mq {
    padding-right: 40px;
    padding-left: 40px;
  }
}

.inner {
  margin: 0 auto;
  @include mq {
    max-width: 1040px;
  }
}

.sns {
  display: flex;
  justify-content: center;
  margin-bottom: 18.4px;
  list-style: none;
}

.snsItem {
  &:not(:first-child) {
    margin-left: 24px;
  }
}

.snsItemLink {
  @include hover;

  text-decoration: none;
  color: #8892b0;
}

.snsItemIcon {
  font-size: 24px;
}

.copylight {
  color: #8892b0;
  font-size: 1.4rem;
  text-align: center;
}
</style>
