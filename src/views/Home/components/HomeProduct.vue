<template>
  <div v-for="cate in goodses" :key="cate.id" style="height: 600px;">
    <HomePanel :title="cate.name">
      <div style="margin-top: 10px;">
        <div class="big_img">
          <img :src="cate.picture" alt="" style="height: 550px;width: 300px;">
          <div class="big_img_label">{{ cate.saleInfo }}</div>
        </div>
        <div class="goods_content">
          <ul>
            <li v-for="value in cate.goods" :key="value.id">

              <GoodsItem :value="value"></GoodsItem>
            </li>
          </ul>
        </div>
      </div>
    </HomePanel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { getGoodsAPI } from '@/apis/home.ts';
import { type goodses } from '@/interface/goodses.ts';
import GoodsItem from './GoodsItem.vue';
const goodses = ref<goodses[]>([]);
async function getGoods() {
  const res = await getGoodsAPI();
  //@ts-expect-error///
  goodses.value = res.result;
}
onMounted(() => {
  getGoods();
})
</script>

<style scoped lang="scss">
.goods_content {
  float: right;
}



.goods_content ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  height: 520px;
  width: 950px;
}

.goods_content_box {
  text-align: center;
  transition: all 0.3s ease;
  width: 200px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.big_img {
  float: left;
  margin-right: 10px;
  position: relative;
}

.big_img_label {
  padding: 10px 5px;
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(227, 227, 227);
}
</style>
