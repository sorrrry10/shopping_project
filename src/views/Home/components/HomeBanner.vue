<template>
  <el-carousel height="450px" motion-blur>
    <el-carousel-item v-for="item in banners" :key="item.id">
      <h3 class="small justify-center" text="2xl">
        <img alt="" style="height: 450px;" v-img-lazy="item.imgUrl">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { useBanner } from './composables/useBanner';
const { banners } = useBanner();
</script>

<style scoped></style>
