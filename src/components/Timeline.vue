<script setup lang='ts'>
import { ref, computed } from 'vue'
import { Post, today, thisWeek, thisMonth } from '../posts'
import { DateTime } from 'luxon'

const periods = ['Today', 'This Week', 'This Month'] as const;

type Period = typeof periods[number]

const selectedPeriod = ref<Period>('Today');

function handleSelectPeriod(period: Period) {
  selectedPeriod.value = period;
}

const posts = computed(() => {
  return [today, thisWeek, thisMonth].map(post => {
    return {
      ...post,
      created: DateTime.fromISO(post.created)
    }
  }).filter(post => {
    if (selectedPeriod.value === 'Today') {
      return post.created >= DateTime.now().minus({ day: 1 })
    }

    if (selectedPeriod.value === 'This Week') {
      return post.created >= DateTime.now().minus({ week: 1 })
    }

    return post
  })
})
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <!-- Looping in Vue -->
      <a v-for='period of periods' :key="period" @click="handleSelectPeriod(period)"
        :class="{ 'is-active': period === selectedPeriod }">
        <!-- :key is shorthand for v-bind:key -->
        {{ period }}</a>
    </span>
    <a v-for="post of posts" :key="post.id" class="panel-block">
      <a>{{ post.title }}</a>
      <div>{{ post.created.toFormat('d MMM') }}</div>
    </a>
  </nav>
</template>