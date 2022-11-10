<script setup lang="ts">
import Header from './components/Header.vue';
import AddIdea from './components/AddIdea.vue';
import IdeasList from './components/IdeasList.vue';
import {ref} from 'vue';
const idea = ref('');

const setIdea = (val: string) => {
  idea.value = val;
};
</script>

<template>
  <div class="w-screen h-screen p-32 text-center bg-black">
    <section>
      <Header />
    </section>
    <section>
      <AddIdea @get-idea="setIdea" />
      <p class="text-white">
        {{ idea }}
      </p>
      <IdeasList />
    </section>
  </div>
</template>

