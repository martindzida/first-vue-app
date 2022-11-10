<script setup lang="ts">
import Header from './components/Header.vue';
import AddIdea from './components/AddIdea.vue';
import IdeasList from './components/IdeasList.vue';
</script>

<template>
  <div class="w-screen h-screen p-32 text-center bg-black">
    <section>
      <Header />
    </section>
    <section>
      <AddIdea />
      <IdeasList />
    </section>
  </div>
</template>

