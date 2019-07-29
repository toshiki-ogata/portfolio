<template lang="pug">
  div.container
    Heading.heading Projects
    div.article
      article.articleItem
        nuxt-link.articleLink(to="/")
          img.articleImg(src="https://placehold.jp/304x188.png")
          div.articleBody
            h2.articleTitle text
            p.articleDescription text
            ul.articleCategory
              li.articleCategoryItem text
              li.articleCategoryItem text
      article.articleItem
        nuxt-link.articleLink(to="/")
          img.articleImg(src="https://placehold.jp/304x188.png")
          div.articleBody
            h2.articleTitle text
            p.articleDescription text
            ul.articleCategory
              li.articleCategoryItem text
              li.articleCategoryItem text
      article.articleItem
        nuxt-link.articleLink(to="/")
          img.articleImg(src="https://placehold.jp/304x188.png")
          div.articleBody
            h2.articleTitle text
            p.articleDescription text
            ul.articleCategory
              li.articleCategoryItem text
              li.articleCategoryItem text
    Button More Projects
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
    max-width: 960px;
  }
}

.heading {
  margin-bottom: 24px;
  @include mq {
    margin-bottom: 32px;
  }
}

.article {
  display: grid;
  justify-content: center;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: 32px;
  @include mq {
    margin-bottom: 48px;
  }
}

.articleItem {
  text-align: left;
  background: #172a45;
  border-radius: 6px;
  box-shadow: 0 4px 4px rgba(2, 12, 27, 0.25);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  &:hover {
    transform: translateY(-5px);
  }
  @include mq {
    /* test */
  }
}

.articleLink {
  text-decoration: none;
  display: block;
  @include mq {
    /* test */
  }
}

.articleImg {
  max-width: 100%;
  border-radius: 6px 6px 0 0;
  vertical-align: bottom;
  width: 100%;
  @include mq {
    /* test */
  }
}

.articleBody {
  padding: 9.6px 16px 9.6px;
  @include mq {
    padding-top: 12.4px;
  }
}

.articleTitle {
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 6px;
  line-height: $lineHeight-sm;
  @include mq {
    font-size: 1.8rem;
  }
}

.articleDescription {
  color: #8892b0;
  font-size: 1.4rem;
  margin-bottom: 3px;
  @include mq {
    /* test */
  }
}

.articleCategory {
  color: #8892b0;
  font-size: 1.4rem;
  list-style: none;
  display: flex;
  @include mq {
    /* test */
  }
}

.articleCategoryItem {
  &:not(:first-child) {
    margin-left: 0.5em;
    &::before {
      content: ',';
      margin-right: 0.5em;
    }
  }
  @include mq {
    /* test */
  }
}
</style>
