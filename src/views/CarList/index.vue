<template>
  <div class="carlist_box">
    <table class="carlist_table">
      <thead>
        <tr class="carlist_box_title">
          <th><el-checkbox :model-value="carStore.isAll" @change="changeIsAll"></el-checkbox></th>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in carStore.carlist" :key="value.skus.id" class="carlist_box_content">
          <td><el-checkbox :model-value="value.isSelect"
              @change="(selected: boolean) => changeha(value.skus.id, selected)"></el-checkbox>
          </td>
          <td class="carlist_box_content_img">
            <img :src="value.picture" alt="" style="height: 60px;">
            <span style="display: block;width: 200px;" class="carlist_box_content_name">{{ value.name }}</span>
          </td>
          <td>￥{{ value.skus.price }}</td>
          <td> <el-input-number @change="changeCount(value)" v-model="value.count" :min="1" :max="10"
              style="margin: 10px 0;"></el-input-number>
          </td>
          <td>￥{{ Number(value.skus.price) * value.count }}</td>
          <td><button class="det_btn" @click="deleteList(value.skus.id)">删除</button></td>
        </tr>
      </tbody>

    </table>

  </div>
  <div class="carlist_box" style="padding: 15px;">
    <p style="margin-left: 85px;">共件&nbsp;{{ carStore.goodsCount }}&nbsp;商品，已选择&nbsp;{{ carStore.goodsSelectedCount
    }}&nbsp;件，商品合计：&nbsp; <span class="price_color">￥{{ carStore.totalSelectedMoney }}</span>
      <el-button style="float: right;" class="topay_btn" @click="$router.push('/layout/payout')">下单结算</el-button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCarStore } from '@/stores/carStore';
import { type getskus } from '@/stores/carStore';
const carStore = useCarStore();
const changeCount = ((value: getskus) => {
  // carStore.addCar(value)
})
const deleteList = ((skuId: string) => {
  carStore.deleteCar(skuId)
})
const changeha = ((skuId: string, isSelect: boolean) => {
  carStore.singleCheck(skuId, isSelect);
})
const changeIsAll = ((selected: boolean) => {
  carStore.changeIsAll(selected);
})
</script>

<style scoped lang="scss">
.topay_btn {
  background-color: #27ba9b;
  width: 90px;
  height: 30px;
  border: none;
  color: white;
}

.price_color {
  color: $priceColor
}

.det_btn {
  border: none;
  background-color: transparent;
  color: #27ba9b;
  font-size: 16px;
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

.carlist_table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}



.carlist_box_title {
  border-bottom: 1px solid #d1e5e1;
  /* display: flex;
  justify-content: space-evenly; */
}

.carlist_box_title th {
  font-weight: 400;
}

.carlist_box {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 10px;
  background-color: #fefefe;
}
</style>
