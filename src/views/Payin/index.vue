<template>
  <div class="pay_box" v-if="payInfo">
    <div class="time_out">
      <div>
        <div style="width: 620px;"></div>
        <i class="iconfont icon-zhengque1" style="font-size: 55px;color: green; float: left;margin-right: 20px;"></i>
        <h3>订单提交成功！尽快完成支付</h3>
        <span>支付还剩{{ formaTime }}，超时取消订单</span>
      </div>
      <div><span style="float: right;">应付总金额&nbsp;&nbsp;<span style="color: #cf4444;">￥{{ payInfo.totalMoney + 5
            }}</span></span></div>


    </div>

  </div>
  <div class="pay_box">
    <h3 class="pay_box_title">选择一下方式付款</h3>
    <h3 class="pay_box_title">平台支付</h3>
    <a class="time_select" href="javasrcpit:;"><i class="iconfont icon-weixinzhifu"
        style="font-size: 28px;color: #21BC1E;margin-right: 5px;"></i><span>微信支付</span></a>
    <a class="time_select" :href="payUrl"><i class="iconfont icon-zhifubaozhifu"
        style="font-size: 28px;color: #2F97C9;margin-right: 5px;"></i><span>支付宝支付</span></a>
    <div class="clear"></div>
    <h3 class="pay_box_title">支付方式</h3>
    <div class="time_select">招商银行</div>
    <div class="time_select">工商银行</div>
    <div class="time_select">建设银行</div>
    <div class="time_select">农业银行</div>
    <div class="time_select">交通银行</div>

    <div class="clear"></div>
  </div>
</template>

<script setup lang="ts">
import { getOrderOAPI } from '@/apis/pay';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTime } from "@/composables/useTimer"
const { formaTime, start } = useTime();

const route = useRoute();
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const backURL = 'http://localhost:5173/#/layout/paycallback'
const redirectUrl = encodeURIComponent(backURL)
const payUrl = `${baseURL}pay/aliPay?orderId=${route.query.id}&redirect=${redirectUrl}`
const payInfo = ref()
const getPayinfo = (async () => {
  const res = await getOrderOAPI(route.query.id as string);
  console.log("payin", res);

  //@ts-expect-error///
  payInfo.value = res.result
})
onMounted(async () => {
  await getPayinfo();
  start(payInfo.value.countdown
  );
})
</script>

<style scoped>
.time_out {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pay_box_title {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 40px;
}

.pay_box_title:first-child {
  margin-top: 0;
}

.clear {
  clear: both;
}

.time_select {
  line-height: 50px;
  float: left;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(188, 187, 187);
  height: 50px;
  width: 150px;
  margin: 0 20px;
  text-align: center;
  line-height: 50px;
}

.time_select:hover {
  border: 1px solid #1dc779;
}

.pay_box {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding: 10px;
  background-color: #fefefe;
}
</style>
