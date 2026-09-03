<template>
  <div class="class_box" @mouseleave="unShowCategory">
    <div class="class_box_nav">
      <ul>
        <li v-for="category in categoryStore.categorys" :key="category.id" @mouseenter="showCategory(category)"
          :class="{ active: activeId == category.id }">
          <RouterLink to="">
            <span style="color: #e9e9e9;">{{
              category.name }}</span>&nbsp;
            <span style="font-size: 14px; color: #ababab;" v-for="value in category.children.slice(0, 2)"
              :key="value.id" class="span_dail">{{ value.name
              }}&nbsp;

            </span>
          </RouterLink>
        </li>

      </ul>
    </div>
    <div class="class_box_content" v-if="categoryReuslt && showContent">
      <div class="class_box_content_title">
        <h2 style="font-weight: 400;float: left;">分类推荐</h2>&nbsp;<span
          style="float: left; color: #6f6f6f;">根据您的购买和浏览记录推荐</span>
      </div>
      <div class="right_goods">
        <RouterLink to="/" class="good_box" v-for="value in categoryReuslt.goods" :key="value.id">
          <img :src="value.picture
            " alt="" style="height: 80px;">
          <div class="text_content">
            <p class="text_content_title">{{ value.name }}</p>
            <p class="text_content_detail">{{ value.desc }}</p>
            <p class="text_content_price">￥{{ value.price }}</p>
          </div>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { type category } from '@/interface/category';
const categoryStore = useCategoryStore();
const categoryReuslt = ref();
const activeId = ref("");
const showContent = ref(false);
function showCategory(category: category) {
  categoryReuslt.value = category;
  activeId.value = category.id
  showContent.value = true;
}
function unShowCategory() {
  activeId.value = "";
  showContent.value = false;
}




</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.class_box {
  position: relative;
}

.text_content_price {
  color: #965a66;
}

.text_content_title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  color: #717171;
  font-size: 14px;
}

.text_content_detail {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
  color: #a5a3a4;
  font-size: 12px;
}

.right_goods {
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3列等宽
  grid-template-rows: repeat(3, 1fr); // 3行等高
  gap: 20px;
}

.text_content {
  height: 80px;
  width: 200px;
  float: right;

}

.good_box {
  width: 300px;
  height: 100px;
  background-color: #fefefe;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.class_box_content_title {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

.class_box_content {
  width: 1052px;
  background-color: rgba(187, 187, 187, 0.8);
  height: 450px;
  float: right;
  padding: 0px 20px;
  position: absolute;
  left: 240px;
  z-index: 1;
}

.class_box_nav ul {
  list-style: none;
  height: 450px;
  width: 240px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  display: flex;
}

.class_box_nav ul li {
  background-color: rgba(0, 0, 0, 0.75);
  width: 240px;
  height: 50px;
  /* line-height: 50px; */
  display: flex;
  padding-left: 40px;
  align-items: center;
}

.class_box_nav ul li:hover {
  background-color: $txtColor;
}

.class_box_nav ul li.active {
  background-color: $txtColor;

  .span_dail {
    color: white !important;
  }
}

.class_box_nav {
  height: 450px;
  width: 240px;
  float: left;
}
</style>
