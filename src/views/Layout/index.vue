<template>
  <layoutScrollNav></layoutScrollNav>
  <layoutHeader></layoutHeader>
  <layoutNav></layoutNav>
  <RouterView></RouterView>
  <div class="clear"></div>
  <layoutFooter></layoutFooter>
</template>

<script setup lang="ts">
import layoutHeader from './components/layoutHeader.vue';
import layoutNav from './components/layoutNav.vue';
import layoutFooter from './components/layoutFooter.vue';
import layoutScrollNav from './components/layoutScrollNav.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from "@/stores/categoryStore.ts"
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategory();
})
</script>

<style scoped>
.clear {
  clear: both;
}
</style>
