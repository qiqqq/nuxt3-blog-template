<template>
  <div class="flex flex-wrap -mx-4 lg:-mx-6">
    <PostTile
      v-for="(post, index) in posts"
      :key="post.title"
      :post="post"
      :is-big="!index"
    />
  </div>
</template>

<script setup>
const { data } = await useAsyncData("posts", () =>
  queryContent("/").find()
);

const posts = computed(() => {
  return data.value
    .toSorted((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
})

useHead({
  title: "Blog",
});
</script>
