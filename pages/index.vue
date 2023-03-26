<template>
  <div class="flex flex-wrap -mx-4 lg:-mx-6">
    <PostTile
      v-for="(post, key) in posts"
      :key="post.title"
      :post="post"
      :is-big="!key"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  async setup() {
    const { data:posts } = await useAsyncData('posts', () => queryContent('/').find())

    return {
      posts
    }
  },
})
</script>
