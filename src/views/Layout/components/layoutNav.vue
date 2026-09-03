<template>
  <div class="nav">
    <h1 class="logo">LOGO</h1>
    <ul class="nav_select">
      <li>
        <RouterLink to="/layout" class="nav_category" exact-active-class="nav_category_active">首页</RouterLink>
      </li>
      <li v-for="category in categoryStore.categorys" :key="category.id">
        <RouterLink :to="`/layout/category/${category.id}`" class="nav_category" active-class="nav_category_active">{{
          category.name }}</RouterLink>
      </li>

      <li style=" position: relative;"> <el-input class="nav_search" v-model="input2" style="width: 240px;"
          placeholder="搜一搜" :suffix-icon="Search" />

        <!-- <i class="store_car"></i> -->
        <span style=" position: relative;" class="store_car_box" :count="carStore.carlist.length">
          <img src="@/assets/images/storecar.png" alt="" class="store_car" @mouseenter="changeCar">
        </span>

        <HeaderCar v-show="isCar" @changeCar="changeCar"></HeaderCar>
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useCategoryStore } from "@/stores/categoryStore.ts"
import { useCarStore } from '@/stores/carStore.ts';
import HeaderCar from './HeaderCar.vue';
const carStore = useCarStore();
const categoryStore = useCategoryStore();
const isCar = ref(false);
function changeCar() {
  isCar.value = !isCar.value;
}
const input2 = ref('')

</script>

<style scoped lang="scss">
.nav_category:hover {
  color: $txtColor;
  border-bottom: 1.5px solid $sucColor;
}

.nav_category_active {
  color: $sucColor !important;
  border-bottom: 1.5px solid $sucColor;
}

.store_car {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-left: 5px;
}

.store_car_box::before {
  content: attr(count);
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: rgb(232, 0, 0);
  position: absolute;
  top: -5px;
  left: 80%;
  z-index: 10;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: rgb(241, 241, 241);
}

.store_car_box[count="0"]::before {
  opacity: 0;
}

.nav_select li {
  list-style: none;
}


.nav_select li a {
  text-decoration: none;
  color: #5e5e5e;
}

.nav_select {
  display: flex;
  justify-content: space-evenly;
}

.nav {
  background-color: #fefefe;
  height: 120px;
  line-height: 120px;
}
</style>
