<script lang="ts" setup>
import { ref } from 'vue';
import { TimelinePost } from '../posts';

const props = defineProps<{
  post: TimelinePost
}>()

const title = ref(props.post.title)
</script>

<template>
  <div class="div columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <input type="text" class="input" v-model="title" />
        {{ title }}
      </div>
    </div>
  </div>
</template>