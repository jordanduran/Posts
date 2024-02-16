<script lang="ts" setup>
import { DateTime } from 'luxon'
import PostWriter from '../components/PostWriter.vue'
import { TimelinePost } from '../posts.ts'
const post: TimelinePost = {
  id: '-1',
  title: 'Title 1',
  created: DateTime.now()
}
</script>

<template>
  New Post
  <PostWriter :post="post" />
</template>