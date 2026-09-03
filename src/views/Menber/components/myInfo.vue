<template>
  <div>
    <div class="infor_backgorund">
      <div style="width: 50%;height: 100%;display: flex; align-items: center;">
        <img :src="userStore.userInfor.avatar" alt="" class="avatar_img">
        <p style="margin-left: 20px; color: white;">{{ userStore.userInfor.account
        }}</p>
      </div>
      <div style="width: 50%;height: 100%;display: flex; align-items: center;justify-content: space-around;">
        <a href="javascript:;" class="infor_backgorund_a">
          <i class="iconfont icon-huiyuanzhongxin" style=" font-size: 34px;"></i>
          <span>安全设置</span>
        </a>
        <a href="javascript:;" class="infor_backgorund_a">
          <i class="iconfont icon-anquanshezhi" style=" font-size: 34px;"></i>
          <span>会员中心</span>
        </a>
        <a href="javascript:;" class="infor_backgorund_a">
          <i class="iconfont icon-diliweizhi" style=" font-size: 34px;"></i>
          <span>地址管理</span>
        </a>
      </div>
    </div>
    <div>
      <h3 style="font-weight: 400;font-size: 16px; margin-left: 20px;margin-top: 40px;margin-bottom: 10px;">
        猜你喜欢</h3>
      <ul class="newProduct_goods">
        <GoodsItem v-for="value in loveGoods" :key="value.id" :value="value"></GoodsItem>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
import { useUserStore } from '@/stores/userStore';
import { onMounted, ref } from 'vue';
import { getThinkLoveAPI } from '@/apis/getThinkLove';
import { type goods } from '@/interface/goodses';
const userStore = useUserStore();
const loveGoods = ref<goods[]>([])
onMounted(async () => {
  console.log(userStore.userInfor);
  const res = await getThinkLoveAPI();
  console.log(res);
  //@ts-expect-error///
  loveGoods.value = res.result;
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
  width: 240px;
  text-align: center;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}



.newProduct_goods_content {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.newProduct_goods {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
}

.infor_backgorund_a {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar_img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  margin-left: 50px;
}

.infor_backgorund {
  width: 100%;
  height: 120px;
  background-image: url("@/assets/images/mybackround.jpg");
  background-size: cover;
  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
}
</style>
