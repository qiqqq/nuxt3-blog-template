<template>
  <div
    class="pb-8 lg:pb-12"
    :class="{ 'w-full md:flex': isBig, 'md:w-1/3': !isBig }"
  >
    <div class="px-4 lg:px-6" :class="{ 'md:w-2/3': isBig }">
      <a :href="post._path" :title="post.title">
        <img :src="post.image" :alt="post.title" class="rounded block img-aspect-ratio" />
      </a>
    </div>
    <div class="px-4 lg:px-6" :class="{ 'md:w-1/3': isBig }">
      <h3 class="my-3" :class="{ 'md:mt-0 md:mb-6': isBig }">
        <a :href="post._path" :title="post.title">{{ post.title }}</a>
      </h3>
      <div class="font-serif text-lg">
        <p class="my-3" :class="{ 'md:my-6': isBig }">
          {{ post.description }}
        </p>
      </div>
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
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const { post, isBig } = defineProps<{
  post: MarkdownParsedContent;
  isBig: boolean;
}>();
</script>
