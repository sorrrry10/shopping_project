<template>
  <div class="home_content" v-if="detailGoods">
    <div style="margin-top: 10px;margin-bottom: 10px;">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{
          path: `/layout`
        }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{
          path: `/layout/category/${detailGoods.
            categories[1].id}`
        }">{{
          detailGoods.
            categories[1].name
        }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{
          path: `/layout/subCategory/${detailGoods.
            categories[1].id}/${detailGoods.
              categories[0].id}`
        }">{{ detailGoods.
          categories[0].name }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ detailGoods.
          name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="goods_show" v-if="detailGoods">
      <div class="goods_show_img">
        <div class="big_img" ref="target">
          <img :src="bigImg" alt="" style="width: 400px;">
          <div class="black" :style="`top:${top}px;left:${left}px`" :class="{ show: isOutside == false }"></div>
          <div class="bigger_img"
            :style="`background-image: url(${bigImg}); background-position: ${-left * 2}px ${-top * 2}px;`"
            :class="{ active: isOutside == false }"></div>
        </div>
        <div class="small_img">
          <div class="small_img_one" :class="{ active: bigImg == value }"
            v-for="(value, index) in detailGoods.mainPictures" :key="index" :style="`background-image: url(${value});`"
            @click="changeBigImg(value)"></div>
        </div>
      </div>
      <div class="goods_show_text">
        <h2 class="goods_show_text_title">{{ detailGoods.name }}</h2>
        <p class="goods_show_text_desc">{{ detailGoods.desc }}</p>
        <p class="goods_show_text_price">￥{{ detailGoods.price }}&nbsp;&nbsp;<span class="goods_show_text_oldPrice">￥{{
          detailGoods.oldPrice }}</span></p>
        <div style="background-color: #F3F3F3;font-size: 12px; padding: 20px 10px;margin-top: 10px;">
          <p style="margin-bottom: 20px;">促销 <span>月好他效送，Ag领费购买直岸120元</span></p>
          <p>服务 <span>无炫返炎·快造泡欺·免费它邮 &nbsp;<a href="https://www.baidu.com/?the=on-internet-entertainment-the-essay"
                style="color: #5CAA98;">了解详情</a></span></p>
        </div>
        <Sku :skus="detailGoods.skus" :specs="detailGoods.specs" :goods="detailGoods"></Sku>
      </div>
      <div class="clear"></div>
    </div>
    <div style="display: flex; justify-content: space-between;">

      <div class="goods_detail">
        <div class="goods_detail_infor">
          <h2 style="font-size: 20px;font-weight: 450;margin-bottom: 20px;">商品信息</h2>
          <div class="goods_detail_infor_text">
            <ul>
              <li v-for="infor in detailGoods.details.properties" :key="infor">
                <p style="color: #ACACAC;"><span style="color: #797979;">{{ infor.name }}</span>&nbsp;&nbsp;&nbsp;
                  &nbsp;{{ infor.value }}</p>
              </li>
            </ul>
          </div>
          <div>
            <img :src="value" alt="" v-for="value in detailGoods.details.pictures" :key="value"
              class="goods_detail_infor_img">
          </div>
        </div>
      </div>
      <div class="hot">
        <DetailHot :hot-type="{ type: 1 }"></DetailHot>
        <DetailHot :hot-type="{ type: 2 }"></DetailHot>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'
import { ArrowRight } from '@element-plus/icons-vue'
import { getDetailGoodsAPI } from "@/apis/getDetailGoods"
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import DetailHot from './components/DetailHot.vue';
import Sku from "@/views/Sku/index.vue"
import { useTemplateRef } from 'vue'

const target = useTemplateRef('target')
const left = ref(0);
const top = ref(0);
const { elementX, elementY, isOutside } = useMouseInElement(target)
watch([elementX, elementY, isOutside], () => {
  if (isOutside.value) {
    return
  }
  if (elementX.value >= 100 && elementX.value <= 300) {
    left.value = elementX.value - 100;
  }
  else if (elementX.value < 100) {
    left.value = 0;
  } else {
    left.value = 200;
  }
  if (elementY.value >= 100 && elementY.value <= 300) {
    top.value = elementY.value - 100;
  }
  else if (elementY.value < 100) {
    top.value = 0;
  } else {
    top.value = 200;
  }
})
const detailGoods = ref()
const route = useRoute();
const bigImg = ref();
async function getDetailGoods() {
  const res = await getDetailGoodsAPI(route.params.id as string);

  //@ts-expect-error///
  detailGoods.value = res.result;
  console.log(detailGoods.value);

  bigImg.value = detailGoods.value.mainPictures[0]
}
function changeBigImg(picture: string) {
  bigImg.value = picture;
}
onMounted(() => {
  getDetailGoods();
})
</script>

<style scoped lang="scss">
.black {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  opacity: 0;

  &.show {
    opacity: 1;
  }
}

.bigger_img {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 410px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  opacity: 0;
  pointer-events: none;
}

.bigger_img.active {
  opacity: 1;
}

.goods_detail_infor_img {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}

.goods_detail_infor_text ul {
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
}

.goods_detail_infor_text ul li {
  float: left;
}

.goods_detail_infor {
  background-color: white;
  padding: 10px 10px;
}

.goods_show_text_oldPrice {
  color: #b5b5b5;
  font-size: 12px;
  text-decoration: line-through;
}

.goods_detail {
  margin-top: 10px;
  width: 1000px;
}

.goods_show_text_price {
  color: $priceColor;
  font-size: 20px;
}

.hot {
  margin-left: 10px;
  margin-top: 10px;
}

.goods_show_text_desc {
  font-size: 12px;
  color: #b5b5b5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 1;
}

.goods_show_text_title {
  font-weight: 400;
}

.small_img {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;

}

.big_img {
  float: left;
  margin-right: 10px;
  width: 400px;
  height: 400px;
  position: relative;
  z-index: 2;
}



.clear {
  clear: both;
}

.small_img_one {
  width: 75px;
  height: 75px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid transparent;

  &.active {
    border: 3px solid #749F6C;
  }
}


.goods_show_img {
  float: left;
  margin-right: 20px;
}

.goods_show_text {
  float: left;
  width: 650px;
}

.goods_show {
  background-color: #fefefe;
  padding: 10px 10px;

}

.home_content {
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 10px;
}
</style>
