<script setup lang='ts'>
import { ref } from 'vue'

const periods = ['Today', 'This Week', 'This Month'] as const;

type Period = typeof periods[number]

const selectedPeriod = ref<Period>('Today');

function handleSelectPeriod(period: Period) {
  selectedPeriod.value = period;
}
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
  </nav>
</template>