<script setup lang='ts'>
import TimelineItem from './TimelineItem.vue';
import { usePosts } from '../stores/posts'
import { periods } from '../constants'

const postsStore = usePosts();
//@ts-ignore
await postsStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <!-- Looping in Vue -->
      <a v-for='period of periods' :key="period" @click="postsStore.setSelectedPeriod(period)"
        :class="{ 'is-active': period === postsStore.selectedPeriod }">
        <!-- :key is shorthand for v-bind:key -->
        {{ period }}</a>
    </span>
    <TimelineItem v-for="post of postsStore.filteredPosts" :key="post.id" :post="post" />
  </nav>
</template>