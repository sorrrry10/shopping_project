<template>
  <transition name="car" appear>
    <div @mouseleave="changeCar" class="car_box">
      <div style="background-color: transparent; height: 20px;width: 340px;"></div>
      <div style="border-radius: 5px;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);">
        <div class="car_box_content">
          <ul>
            <li v-for="value in carStore.carlist" :key="value.skus.id">
              <div
                style="height: 70px;margin-left: 10px;margin-right: 10px; border-bottom: 1px solid rgb(193, 193, 193);">
                <img :src="value.picture" alt="" style="height: 60px;margin-top: 5px;margin-right: 5px;float: left;">
                <div class="car_box_content_text">
                  <p style="font-size: 14px;margin: 0;line-height: 16px;">{{ value.name }}</p>
                  <p style="font-size: 10px;margin: 0;line-height: 12px;color: #b5b5b5;"><span
                      v-for="(values, index) in value.skus.specs" :key="index">{{
                        values.name }}:{{ values.valueName }}&nbsp;</span>
                  </p>
                </div>
                <div
                  style="float: left;margin-left: 10px; height: 60px;display: flex;justify-content: center;align-items: center;flex-direction: column;">
                  <p class="price">￥{{ value.skus.price }}</p>
                  <p style=" line-height: 15px;font-size: 12px;color: #b5b5b5;">×{{ value.count }}</p>
                </div>
                <div class="delet_box">
                  <button class="delet_btn" @click="deleteCar(value.skus.id)">×</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="car_box_bottom">
          <div style="float: left;margin-left: 10px;height: 50px;text-align: center;">
            <p style="line-height: 20px;font-size: 15px;">共{{ carStore.goodsCount }}件商品</p>
            <p class="price" style="line-height: 20px;font-size: 15px;">￥{{ carStore.totalMoney.toFixed(2) }}</p>
          </div>
          <div style="float: right;height: 50px;">
            <el-button style="margin-right: 10px;display: block;margin-top: 5px;" class="clearCar"
              @click="$router.push('/layout/cartList')">去购物车结算</el-button>
          </div>

        </div>
      </div>

    </div>
  </transition>

</template>

<script setup lang="ts">

import { useCarStore } from '@/stores/carStore';
const carStore = useCarStore();
const emit = defineEmits(["changeCar"]);

const deleteCar = ((id: string) => {
  carStore.deleteCar(id)
})

function changeCar() {
  emit('changeCar');
}
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.delet_box {
  float: left;
  height: 60px;
  width: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
}

.delet_btn {
  border: none;
  background-color: transparent;
  font-size: 20px;
  opacity: 0;
  color: rgb(176, 176, 176);
  transition: all 0.5s linear;
  // display: block;
}

.clearCar {
  background-color: #27ba9b;
  width: 120px;
  height: 40px;
  border: none;
  color: white;
}

.car_box_bottom {
  height: 50px;
  background-color: rgb(244, 244, 244);
}

.price {
  line-height: 15px;
  color: $priceColor;
}

.car_box_content_text {
  margin-top: 5px;
  /* background-color: pink; */
  height: 60px;
  float: left;
  width: 140px;

}

.car_box_content ul {
  list-style: none;
}

.car_box_content ul li:hover .delet_btn {
  opacity: 1;
}

.car_box_content {
  position: relative;
  background-color: white;
  height: 310px;
}

.car_box {
  z-index: 999;
  position: absolute;
  width: 340px;
  height: 400px;
  top: 70px;
  left: 0;
  box-sizing: border-box;
}

.car-enter-active {
  animation: in 0.3s ease;
}

.car-leave-active {
  animation: in 0.3s ease reverse;
}

@keyframes in {
  from {
    opacity: 0;

  }

  to {
    opacity: 1;

  }
}
</style>
