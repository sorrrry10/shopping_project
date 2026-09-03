<template>
  <div class="hot_box">
    <div class="hot_title">{{ title }}</div>
    <ul>
      <li v-for="value in hotGoods" :key="value.id">
        <div class="hot_goods">
          <img :src="value.picture" alt="" style="width: 150px;">
          <p style="font-size: 14px;" class="hot_goods_name">{{ value.name }}</p>
          <p style="font-size: 12px;" class="hot_goods_desc"> {{ value.desc }}</p>
          <p class="hot_goods_price">￥{{ value.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type hotGoods } from '@/interface/hotGoods';
import { getHotGoodsAPI } from '@/apis/getHotGoods';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps<{
  hotType: {
    type: number
  }
}>()
const typeTitle = {
  1: "24小时热榜",
  2: "周热榜"
}
const title = computed(() => {
  return typeTitle[props.hotType.type as 1 | 2]
})
const route = useRoute();
const hotGoods = ref<hotGoods[]>([]);
async function getHotGoods() {
  const res = await getHotGoodsAPI(Number(route.params.id) as number, props.hotType.type);
  //@ts-expect-error///
  hotGoods.value = res.result
}
onMounted(() => {
  getHotGoods();
})
</script>

<style scoped lang="scss">
.hot_goods_name {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
}

.hot_goods_desc {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  color: #8C8C8C;
}

.hot_goods_price {
  color: $priceColor;
}

.hot_title {
  background-color: #DB562E;
  color: #FFE4C9;
  margin-bottom: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hot_goods {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.hot_box ul {
  list-style: none;
}

.hot_box {
  width: 282px;
  background-color: white;
  margin-bottom: 10px;
}
</style>
