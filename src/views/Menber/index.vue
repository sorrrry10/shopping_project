<template>
  <div class="member_box">
    <div class="member_left_nav">
      <div class="select_box">
        <h3>我的账户</h3>
        <RouterLink to="/layout/member/myInfo" class="member_left_nav_select"
          active-class="member_left_nav_select_active">个人中心</RouterLink>
      </div>
      <div class="select_box">
        <h3>交易管理</h3>
        <RouterLink to="/layout/member/myOrder" class="member_left_nav_select"
          active-class="member_left_nav_select_active">我的订单</RouterLink>
      </div>

    </div>
    <div class="member_right_nav">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.member_right_nav {
  width: 100%;
  margin-left: 20px;
  background-color: white;
  height: 500px;
}

.select_box {
  margin-bottom: 30px;
}

.member_left_nav_select:hover {
  position: relative;
  font-size: 14px;
  color: #B0D4CB;
}

.member_left_nav_select::before {
  content: "";
  display: block;
  position: absolute;
  top: 7px;
  left: -18px;
  background-color: transparent;
  border-radius: 4px;
  width: 8px;
  height: 8px;
  margin-right: 10px;
}

.member_left_nav_select_active::before {
  background-color: #8EC1B5;
}

.member_left_nav_select {
  position: relative;
  font-size: 14px;
  color: #888888;
}



.member_left_nav_select_active {
  color: #8EC1B5;
}

.member_left_nav h3 {
  font-weight: 420;
}

.member_left_nav {
  height: 500px;
  background-color: white;
  width: 200px;
  padding-left: 35px;
  padding-top: 10px;
  box-sizing: border-box;
}

.member_box {
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding: 10px;
}
</style>
