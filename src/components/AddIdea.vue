<script setup lang="ts">
import {ref} from 'vue';
const newIdea = ref('');
const emit = defineEmits(['getIdea']);
</script>

<template>
  <div class="flex gap-8 justify-center items-center bg-primary rounded-lg p-8">
    <label class="text-white font-semibold" for="idea">What comes to your mind?</label>
    <input name="idea" class="text-black rounded-lg p-1" type="text" v-model="newIdea" />
    <button @click="$emit('getIdea', newIdea)" class="bg-white text-black rounded-lg p-2">Add to my list</button>
  </div>
</template>

