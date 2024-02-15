<script setup lang='ts'>
import { ref, computed } from 'vue'
import { TimelinePost, today, thisWeek, thisMonth } from '../posts'
import { DateTime } from 'luxon'
import TimelineItem from './TimelineItem.vue';

const periods = ['Today', 'This Week', 'This Month'] as const;

type Period = typeof periods[number]

const selectedPeriod = ref<Period>('Today');

function handleSelectPeriod(period: Period) {
  selectedPeriod.value = period;
}

const posts = computed<TimelinePost[]>(() => {
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
    <span class="panel-tabs">
      <!-- Looping in Vue -->
      <a v-for='period of periods' :key="period" @click="handleSelectPeriod(period)"
        :class="{ 'is-active': period === selectedPeriod }">
        <!-- :key is shorthand for v-bind:key -->
        {{ period }}</a>
    </span>
    <TimelineItem v-for="post of posts" :key="post.id" :post="post" />
  </nav>
</template>