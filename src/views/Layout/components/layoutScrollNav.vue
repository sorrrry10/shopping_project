<template>
  <div class="nav_Scroll" :class="{ show: y > 140 }">
    <h1 class="logo">LOGO</h1>
    <ul class="nav_select">
      <li>
        <RouterLink to="/layout" class="nav_category" exact-active-class="nav_category_active">首页</RouterLink>
      </li>
      <li v-for="category in CategoryStore.categorys" :key="category.id">
        <RouterLink :to="`/layout/category/${category.id}`" class="nav_category" active-class="nav_category_active">{{
          category.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/categoryStore';
const CategoryStore = useCategoryStore()
const { y } = useScroll(window)
</script>

<style scoped lang="scss">
.nav_category:hover {
  color: $sucColor;
  border-bottom: 1.5px solid $sucColor;
}

.nav_category_active {
  color: $sucColor !important;
  border-bottom: 1.5px solid $sucColor;
}

.nav_select li {
  list-style: none;
}


.nav_select li a {
  text-decoration: none;
  color: #5e5e5e;
}

.nav_select {
  width: 70%;
  display: flex;
  justify-content: space-evenly;
}

.nav_Scroll {
  padding: 0 200px;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fefefe;
  line-height: 100px;
  opacity: 0;
  transform: translateY(-100%);
  z-index: 99;
  transition: all 0.3s linear;

  &.show {
    transform: none;
    opacity: 1;
  }
}



.logo {
  margin-left: 20px;
  color: $txtColor;
  float: left;
}
</style>
