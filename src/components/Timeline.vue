<script setup lang='ts'>
import { ref } from 'vue'

const periods = ['Today', 'This Week', 'This Month'];

const selectedPeriod = ref('Today');

function handleSelectPeriod(period: string) {
  console.log(period);
  selectedPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <!-- Looping in Vue -->
      <a v-for='period of periods' :key="period" @click="handleSelectPeriod(period)">
        <!-- :key is shorthand for v-bind:key -->
        {{ period }}</a>
    </span>
  </nav>
</template>