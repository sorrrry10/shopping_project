<template>
  <RouterLink :to="`/layout/detail/${value.id}`" class="goods_content_box">
    <div class="small_img">
      <img :src="value.picture" alt="" style="height: 200px; width: 200px;">
    </div>
    <div class="goods_content_text">
      <p class="goods_content_text_desc_name">{{ value.name }}</p>
      <p class="goods_content_text_desc">{{ value.desc }}</p>
      <p class="goods_content_text_price">￥{{ value.price }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router';
import { type goods } from '@/interface/goodses';
defineProps<{
  value: goods
}>()

</script>

<style scoped lang="scss">
.goods_content_box {
  text-align: center;
  transition: all 0.3s ease;
  width: 200px;
  display: block;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.goods_content_text {
  width: 200px;
}

.goods_content_text_desc {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  color: #a5a3a4;
  font-size: 12px;
}

.goods_content_text_desc_name {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;

  font-size: 16px;
}

.goods_content_text {
  width: 200px;
}

.goods_content_text_price {
  color: $priceColor;
}
</style>
