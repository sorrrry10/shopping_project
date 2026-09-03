<template>
  <div class="home_content">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <div style="background-color: #fefefe;">
    <div class="home_content" style="background-color: #fefefe;">
      <HomePanel title="新鲜好物品" subtitle="新鲜出炉，品质靠谱">
        <ul class="newProduct_goods">
          <li v-for="value in NewProduct" :key="value.id" class="newProduct_goods_content">
            <RouterLink :to="`/layout/detail/${value.id}`">
              <img v-img-lazy="value.picture" alt="" style="width: 300px;">
              <div class="newProduct_goods_content_text">
                <p class="newProduct_goods_content_text_desc">{{ value.desc }}</p>
                <p class="newProduct_goods_content_text_desc_price">￥{{ value.price }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </HomePanel>
      <HomePanel title="人气推荐" subtitle="人气爆款，不容错过">
        <ul class="newProduct_goods">

          <li v-for="value in HotProduct" :key="value.id" class="newProduct_goods_content">
            <RouterLink to="/layout">
              <img alt="" style="width: 300px;" v-img-lazy="value.picture">
              <div class="hotProduct_goods_content_text">
                <p>{{ value.title }}</p>
                <p style="color: #acaaaa;">{{ value.alt }}</p>
              </div>
            </RouterLink>

          </li>
        </ul>
      </HomePanel>

    </div>
  </div>
  <div style="background-color: #fefefe;">
    <div class="home_content" style="background-color: #fefefe;">
      <HomeProduct></HomeProduct>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeProduct from './components/HomeProduct.vue';
import { onMounted, ref } from 'vue';
import { useBannerStore } from "@/stores/bannerStore.ts"
import HomePanel from './components/HomePanel.vue';
import { getNewProductAPI } from "@/apis/getNewProduct.ts"
import { type newProduct } from '@/interface/newProduct.ts';
import { getHotProductAPI } from '@/apis/getHotProduct.ts';
import { type hotProduct } from '@/interface/hotProduct.ts';
import { RouterLink } from 'vue-router';
const bannerStore = useBannerStore();
const NewProduct = ref<newProduct[]>([]);
const HotProduct = ref<hotProduct[]>([])
async function getNewProduct() {
  const res = await getNewProductAPI();
  //@ts-expect-error///
  NewProduct.value = res.result;
}
async function getGoodProduct() {
  const res = await getHotProductAPI();
  //@ts-expect-error///
  HotProduct.value = res.result;
}
onMounted(() => {
  bannerStore.getBanner("1");
  getNewProduct();
  getGoodProduct();

})
</script>

<style scoped lang="scss">
.newProduct_goods_content_text_desc_price {
  color: $priceColor;
}

.newProduct_goods_content_text_desc {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  color: #a5a3a4;
  font-size: 16px;
}

.newProduct_goods_content_text {
  width: 300px;
  background-color: #eff8f4;
  text-align: center;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}

.hotProduct_goods_content_text {
  width: 300px;
  background-color: #fefefe;
  text-align: center;
  padding-bottom: 10px;
}

.newProduct_goods_content {
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home_content {
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 10px;
}

.newProduct_goods {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-top: 10px;
}
</style>
