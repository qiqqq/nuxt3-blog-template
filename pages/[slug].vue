<template>
  <article>
    <h1 class="my-6 text-center font-serif">
      {{ post.title }}
    </h1>
    <div class="my-8 text-center font-serif text-base text-gray">
      <time>{{ post.date }}</time> &mdash; {{ post.author }}
    </div>
    <img 
      :src="post.image" 
      :alt="post.title" 
      class="rounded block my-10 img-aspect-ratio"
      loading="lazy"
    />
    <div class="max-w-3xl mx-auto my-8">
      <ContentRenderer class="content font-serif text-lg" :value="post" />
      <div class="sm:flex justify-between items-center mt-16">
        <div class="flex items-center">
          <img
            :src="post.avatar"
            :alt="post.author"
            class="w-12 h-12 rounded-full"
          />
          <div class="ml-4">
            <strong class="block">{{ post.author }}</strong>
            <span>{{ post.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const { data: post } = await useAsyncData("post", () =>
  queryContent(useRoute().path).findOne()
);

useHead({
  title: post.value.title,
});
</script>
