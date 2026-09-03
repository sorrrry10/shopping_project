<template>
  <div class="home_content">
    <div style="margin-top: 10px;margin-bottom: 10px;">
      <el-breadcrumb :separator-icon="ArrowRight" v-if="subCategoryFilter">
        <el-breadcrumb-item :to="{ path: `/` }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/layout/category/${route.params.id}` }">{{ subCategoryFilter.parentName
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryFilter.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all_class">
      <div style="padding-left: 10px;"><el-tabs v-model="reqData.sortField" type="card" class="demo-tabs"
          @tab-change="handleClick">
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="store_body">
        <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
          <li v-for="value in subCategory" :key="value.id">
            <GoodsItem :value="value"></GoodsItem>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSubCategoryFilterAPI, getSubCategoryAPI } from "@/apis/subCategory"
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'
import { onMounted, ref } from "vue";
// import type { TabsPaneContext } from 'element-plus'
import { type subCategory } from "@/interface/subCategory.ts"
import GoodsItem from "../Home/components/GoodsItem.vue";

const disabled = ref(false);
const subCategoryFilter = ref();
const subCategory = ref<subCategory[]>([]);
const route = useRoute();
const reqData = ref({
  categoryId: route.params.subid,
  page: 1,
  pageSize: 20,
  sortField: "publishTime"
})
const load = async () => {
  reqData.value.page++;
  const res = await getSubCategoryAPI(reqData.value)
  //@ts-expect-error///
  if (res.result.items.length == 0) {
    disabled.value = true;
  }
  //@ts-expect-error///
  subCategory.value = [...subCategory.value, ...res.result.items]
}
async function getSubCateFiltergory(id: string) {
  const res = await getSubCategoryFilterAPI(id);
  //@ts-expect-error///
  subCategoryFilter.value = res.result;
}
async function getSubCategory(reqData: object) {
  const res = await getSubCategoryAPI(reqData);
  //@ts-expect-error///
  subCategory.value = res.result.items;
  console.log("@", subCategory.value);
}
onMounted(() => {
  getSubCateFiltergory(route.params.subid as string);
  getSubCategory(reqData.value);
})
const handleClick = () => {
  console.log("切换了", reqData.value.sortField)
  reqData.value.page = 1;
  getSubCategory(reqData.value);
}
</script>

<style scoped>
.store_body ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.store_body ul li {
  float: left;
  justify-content: center;
  display: flex;
  align-items: center;
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
