<template>
  <div class="header">
    <ul class="nav_right" v-if="userStore.userInfor.token">
      <li style="display: flex; align-items: center;"><i class="iconfont icon-yonghu"
          style="color: #b2b2b2;font-size: 14px;"></i>&nbsp;&nbsp;<span style="color: #b2b2b2;">{{
            userStore.userInfor.account }}</span></li>
      <li>|</li>
      <li>
        <el-popconfirm @confirm="confirmLeave" title="确定退出吗" confirm-button-text="退出" cancel-button-text="取消">
          <template #reference>
            <a href="javascript:;">退出登录</a>
          </template>
        </el-popconfirm>
      </li>
      <li>|</li>
      <li>
        <RouterLink to="/layout/member/myOrder">我的订单</RouterLink>
      </li>
      <li>|</li>
      <li>
        <RouterLink to="/layout/member">会员中心</RouterLink>
      </li>
    </ul>
    <ul class="nav_right" v-else>
      <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
      <li>|</li>
      <li><a href="javascript:;">帮助中心</a></li>
      <li>|</li>
      <li><a href="javascript:;">关于我们</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { RouterLink } from 'vue-router';
import { useRouter } from "vue-router";
import { useCarStore } from '@/stores/carStore';
const router = useRouter();
const carStore = useCarStore();
const userStore = useUserStore();
function confirmLeave() {
  userStore.clearUser();
  router.push("/login");
  carStore.clearCar();
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #2c2c2c;
}

.nav_right {
  margin-right: 20px;
  float: right;
  list-style: none;
}

.nav_right li a {
  color: #b2b2b2;
  text-decoration: none;
}

.nav_right li {
  float: left;
  line-height: 50px;
  margin-right: 10px;
  color: #484848
}
</style>
