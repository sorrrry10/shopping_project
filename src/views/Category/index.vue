<template>
  <div class="home_content">
    <div style="margin-top: 10px;margin-bottom: 10px;">
      <el-breadcrumb :separator-icon="ArrowRight" v-if="categoryData">
        <el-breadcrumb-item :to="{ path: `/` }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-bottom: 10px;">
      <el-carousel height="520px" motion-blur>
        <el-carousel-item v-for="item in banners" :key="item.id">
          <h3 class="small justify-center" text="2xl">
            <img alt="" v-img-lazy="item.imgUrl" style="width: 1292px;">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="all_class">
      <h2 style="text-align: center; font-weight: 500;color: #5a5a5a;">全部分类</h2>
      <div class="all_class_content">
        <ul>
          <li v-for="value in categoryData?.children" :key="value.id">
            <RouterLink :to="`/layout/subCategory/${route.params.id}/${value.id}`" class="all_class_content_one">
              <img :src="value.picture" alt="" style="height: 100px; width: 100px;">
              <p>{{ value.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="in_class" v-for="value in categoryData?.children" :key="value.id">
      <h2 style="text-align: center; font-weight: 500;color: #5a5a5a;margin-bottom: 20px;">{{ value.name }}</h2>
      <ul>
        <li v-for="good in value.goods" :key="good.id">
          <GoodsItem :value="good"></GoodsItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodsItem from '../Home/components/GoodsItem.vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useBanner } from './composables/useBanner.ts';
import { useCategory } from './composables/useCategory.ts';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
const route = useRoute();
const { banners } = useBanner();
const { categoryData } = useCategory();

</script>

<style scoped>
.in_class ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.in_class ul li {
  float: left;
}

.all_class_content_one {
  text-align: center;
  display: block;
}

.in_class {
  margin-top: 10px;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: #fefefe;
}

.all_class_content ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
}

.all_class_content ul li {
  float: left;
}

.all_class {
  background-color: #fefefe;
  padding: 10px 0px;
}

.home_content {
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 10px;
}
</style>
