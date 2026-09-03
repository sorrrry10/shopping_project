<template>
  <div class="my_order_box">
    <div>
      <el-tabs v-model="tabTypes[params.orderState]" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="all"></el-tab-pane>
        <el-tab-pane label="待付款" name="unpay"></el-tab-pane>
        <el-tab-pane label="代发货" name="deliver"></el-tab-pane>
        <el-tab-pane label="待收获" name="receive"></el-tab-pane>
        <el-tab-pane label="待评价" name="comment"></el-tab-pane>
        <el-tab-pane label="已完成" name="complete"></el-tab-pane>
        <el-tab-pane label="已取消" name="cancel"></el-tab-pane>
      </el-tabs>
    </div>
    <div style="height: 75%;">
      <div v-for="value in orderList" :key="value.id" style="margin-bottom: 15px;">
        <div class="my_order_list_title"><span>下单时间：{{ value.createTime }}&nbsp;&nbsp;&nbsp;订单编号：{{ value.id
        }}&nbsp;&nbsp;&nbsp;支付类型：在线支付&nbsp;&nbsp;&nbsp;订单价格（含运费）：￥{{ value.payMoney }}</span></div>
        <ul style="list-style: none;">
          <li v-for="sku in value.skus" :key="sku.id">
            <div
              style="height: 70px;margin-left: 10px;margin-right: 10px; border-bottom: 1px solid rgb(193, 193, 193);">
              <div style="width: 39%; display: flex; align-items: center;float: left;">
                <img :src="sku.image" alt="" style="height: 60px;margin-top: 5px;margin-right: 5px;float: left;">
                <div class="car_box_content_text">
                  <p style="font-size: 18px;margin: 0;line-height: 16px; margin: 5px 0;">{{ sku.name }}</p>
                  <p style="font-size: 14px;margin: 0;line-height: 12px;color: #b5b5b5;"><span>{{ sku.attrsText
                  }}&nbsp;</span>
                  </p>
                </div>
              </div>

              <div
                style="float: left;margin-left: 10px; height: 60px;display: flex;justify-content: space-evenly;align-items: center; width: 60%;">
                <p class="price">￥{{ sku.realPay
                }}</p>
                <p style=" line-height: 15px;font-size: 12px;color: #b5b5b5;">×{{ sku.quantity
                }}</p>
                <a href="javascript:;">查看详细</a>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="pagination">
      <div style="height: 1px;background-color: #F3F3F3;margin-bottom: 10px; width: 100%;"></div>
      <el-pagination @current-change="pageChange" :total="total" :page-size="params.pageSize" background
        layout="prev, pager, next" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOrderListAPI } from '@/apis/pay';
import { onMounted, ref } from 'vue';
const total = ref(0);
const tabTypes = [
  "all", "unpay", "deliver", "receive", "comment", "complete", "cancel"
]
const params = ref({
  orderState: 0,
  page: 1,
  pageSize: 2
})
async function getOrderList() {
  const res = await getOrderListAPI(params.value)
  //@ts-expect-error///
  orderList.value = res.result.items
  //@ts-expect-error///
  total.value = res.result.counts;
}
const handleClick = ((type: object) => {
  //@ts-expect-error///
  params.value.orderState = type.index;
  console.log(params.value.orderState);
  getOrderList()
})
const pageChange = ((page: number) => {
  console.log(page);
  params.value.page = page;
  getOrderList()
})
const orderList = ref();
onMounted(async () => {
  getOrderList();
})
</script>

<style scoped>
.pagination {
  width: 100%;
  position: absolute;
  top: 90%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.car_box_content_text {
  margin-top: 5px;
  float: left;
}

.my_order_list_title {
  background-color: #F3F3F3;
  padding: 20px;
}

.my_order_box {
  position: relative;
  /* width: 100%; */
  padding: 0px 15px;
  height: 100%;
}
</style>
