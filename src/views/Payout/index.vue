<template>
  <div class="pay_box">
    <h3 class="pay_box_title">收获地址</h3>
    <div class="pay_box_address">
      <div class="pay_box_address_content">
        <p>收货人：<span v-if="defaultAddress">{{ defaultAddress.receiver
        }}</span></p>
        <p>联系方式：<span v-if="defaultAddress">{{ defaultAddress.contact
            }}</span></p>
        <p>收货地址：<span v-if="defaultAddress">{{ defaultAddress.address }}</span></p>
      </div>
      <div class="pay_box_address_btn">
        <el-button @click="changeAddress = true">切换地址</el-button>
        <el-button>添加地址</el-button>
      </div>
    </div>
    <h3 class="pay_box_title">商品信息</h3>
    <table class="list_table">
      <thead>
        <tr class="list_table_title">
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>实付</th>
        </tr>
      </thead>
      <tbody style="border-bottom: 1px solid #AAAAAA;" v-if="payout">
        <tr v-for="value in payout.goods" :key="value.id" class="carlist_box_content">
          <td class="carlist_box_content_img">
            <img :src="value.picture" alt="" style="height: 60px;">
            <span style="display: block;width: 200px;" class="carlist_box_content_name">{{ value.name }}</span>
          </td>
          <td>￥{{ value.price }}</td>
          <td> {{ value.count }}
          </td>
          <td>￥{{ Number(value.price) * value.count }}</td>
          <td>￥{{ Number(value.price) * value.count }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="pay_box_title">配送时间</h3>
    <div class="time_select">不限送货时间：周一到周日</div>
    <div class="time_select">工作日送货：周一到周五</div>
    <div class="time_select">双休日假日送货：周六到周日</div>
    <div class="clear"></div>
    <h3 class="pay_box_title">支付方式</h3>
    <div class="time_select">在线支付</div>
    <div class="time_select">货到支付</div>
    <div class="time_select">活到付款需货五元手续费</div>
    <div class="clear"></div>
    <h3 class="pay_box_title">金额细明</h3>
    <div style="float: right; margin-right: 100px;" class="money_detail" v-if="payout">
      <p>商品件数：<span>{{ payout.summary.goodsCount }}件</span></p>
      <p>商品总价：<span>￥{{ payout.summary.totalPrice }}</span></p>
      <p>运费：<span>￥5</span></p>
      <p style="margin-bottom: 50px;">应付总额：<span>{{ payout.summary.totalPayPrice }}</span></p>
      <el-button style="float: right;" class="submit_btn" @click="submitList">提交订单</el-button>
    </div>
    <div class="clear"></div>
    <el-dialog v-model="changeAddress" width="40%" center>
      <div>
        <ul style="list-style: none;">
          <li v-for="value in payout.userAddresses" :key="value.id" class="address_select"
            :class="{ active: value.id == defaultAddress.id }" @click="tochangeAddress(value)">
            <p>收货人：{{ value.receiver
            }}</p>
            <p>联系方式：{{ value.contact
            }}</p>
            <p>收货地址：{{ value.address }}</p>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { getPayoutAPI } from "@/apis/pay";
import { type userAddress } from "@/interface/userAddress";
import { type orderGoods } from "@/interface/goodses";
import { getOrderAPI } from "@/apis/pay";
import { useCarStore } from "@/stores/carStore";
const defaultAddress = ref()
const carStore = useCarStore();
const changeAddress = ref(false)
const payout = ref()
const router = useRouter();
onMounted(async () => {
  const res = await getPayoutAPI();
  //@ts-expect-error///
  payout.value = res.result;
  console.log("value", payout.value);
  defaultAddress.value = payout.value.userAddresses.find((item: userAddress) => item.isDefault == 0)
})
const submitList = (async () => {

  const res = await getOrderAPI({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: "",
    goods: payout.value.goods.map((item: orderGoods) => {
      return {
        skuId: item.skuId,
        count: item.count
      }
    }),
    addressId: defaultAddress.value.id
  });
  //@ts-expect-error///
  const orderId = res.result.id
  router.push({
    path: "/layout/payin",
    query: {
      id: orderId
    }
  })
  carStore.updataCar();
})
const tochangeAddress = ((value: userAddress) => {
  defaultAddress.value = value
})


</script>

<style scoped>
/* #27ba9b */
.address_select {
  border: 1px solid #cacaca;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.address_select.active {
  border: 1px solid #27ba9b;
  background-color: #d7e7df;
}

.pay_box_address_content p span {
  color: #434343;
}

.submit_btn {
  background-color: #27ba9b;
  border: none;
  color: white;
}

.money_detail p span {
  float: right;
}

.money_detail p {
  width: 200px;
  margin: 20px 0;
}

.clear {
  clear: both;
}

.time_select {
  float: left;
  border: 1px solid rgb(188, 187, 187);
  height: 50px;
  width: 250px;
  margin: 0 20px;
  text-align: center;
  line-height: 50px;
}

.carlist_box_content_img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.carlist_box_content td {
  text-align: center;
}

.carlist_box_content_name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  color: #434343;
}


.list_table_title {
  background-color: #F3F3F3;
}

.list_table_title th {
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
}

.list_table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}

.pay_box_address {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
}

.pay_box_address_content p {
  padding: 5px;
  color: #AAAAAA;
}

.pay_box_address_content {
  font-size: 14px;
  /* float: left */
}

.pay_box {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding: 10px;
  background-color: #fefefe;
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
</style>
