<script lang="ts" setup>
import { TimelinePost } from '../posts';

defineProps<{
  post: TimelinePost
}>()
</script>

<template>
  <div class="div columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <input type="text" class="input" />
      </div>
    </div>
  </div>
</template>