<template>
  <div class="pay_box" v-if="price">
    <i class="iconfont icon-zhengque1" style="font-size: 80px;color: #1BBF6E;" v-if="route.query
      .payResult == 'true'
    "></i>
    <i class="iconfont icon-cuowutishitianchong" style="font-size: 80px;color: #C93A3B;" v-else></i>
    <h3 style="font-weight: 450;">支付{{ route.query.payResult == "true" ? "正确" : "错误" }}</h3>
    <div>
      <p style="font-size: 14px; color: #ABABAB;">我们将尽快为您发货，收货期间请保持手机畅通</p>
      <p>支付方式：支付宝</p>
      <p>支付金额：￥{{ price.toFixed(2) }}</p>
    </div>
    <div style="margin: 50px 0;">
      <el-button style="margin: 0 15px;" class="seek_order" @click="$router.push('/layout/cartList')">查看订单</el-button>
      <el-button style="margin: 0 15px;" @click="$router.push('/layout')">进入首页</el-button>
    </div>
    <p style="font-size: 12px;color: #A2A2A2;">温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。</p>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getOrderOAPI } from '@/apis/pay';

const price = ref();
const route = useRoute();


onMounted(async () => {
  const res = await getOrderOAPI(route.query.orderId as string);
  console.log(res);
  //@ts-expect-error///
  price.value = res.result.payMoney;
})
</script>

<style scoped>
.seek_order {
  background-color: #27ba9b;
  border: none;
  color: white;
}

.pay_box p {
  margin: 10px 0;
}

.pay_box {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding: 10px;
  padding-top: 100px;
  background-color: #fefefe;
}
</style>
