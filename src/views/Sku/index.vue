<template>
  <div>
    <div class="color" v-for="(value, index) in props.specs" :key="index">
      <span>{{ value.name }}</span>
      <div v-for="(category, i) in value.values"
        style="margin-left: 20px; display: flex;flex-direction: column; align-items: center;margin-top: 10px;"
        @click="selecting(category.name, value.id, Number(index))" class="selectgoods"
        :class="{ active: selectedMap[Number(value.id)] == category.name }" :key="i">
        <img :src="category.picture" alt="" style="width: 70px;" v-if="category.picture"><span
          style="font-size: 12px;">{{ category.name
          }}</span>
      </div>
    </div>
    <el-input-number v-model="num" :min="1" :max="10" style="margin: 10px 0;" @click="changeNum(num)"></el-input-number>
    <br>
    <el-button @click="addClick">加入购物车</el-button>

    <div v-show="getSkus">
      <span>价格</span><span class="price">￥{{ getSkus?.price }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { type specs } from '@/interface/specs';
import { type skus } from '@/interface/skus';
import { type goodss } from '@/interface/goodses';
import { ElMessage } from 'element-plus';
import { useCarStore } from '@/stores/carStore';
const carStore = useCarStore();
const specsName = ref([""]);
const selectedMap = ref<{ [key: number]: string }>({});
const props = defineProps<{
  skus: skus[]
  specs: specs[]
  goods: goodss
}>()
const num = ref(1)
const skuMap = props.skus.reduce((map, sku) => {
  const key = sku.specs.map(spec => spec.valueName).join('-')
  map[key] = sku;
  return map
}, {} as Record<string, skus>)
function selecting(name: string, id: string, index: number) {
  selectedMap.value[Number(id)] = name;
  specsName.value[index] = name;
}
const getSkus = computed(() => {
  const key = specsName.value.join('-');
  const sku = skuMap[key];
  console.log("getSkus", sku);

  return sku;
})
const changeNum = ((num: number) => {
  console.log(num);
})
onMounted(() => {
  console.log("skus", props.skus);
  console.log("goods", props.goods);

})
function addClick() {
  if (getSkus.value != null) {
    console.log("goods", props.goods);
    carStore.addCar({
      skus: getSkus.value, name: props.goods.name, picture: props.goods.mainPictures[0] || "", count: num.value, isSelect: true
    });
    ElMessage({ type: "success", message: "添加成功" })
  }
  else {
    ElMessage({ type: "warning", message: "添加失败,请选择款式" })
  }

}
</script>

<style scoped lang="scss">
.color {
  display: flex;
  align-items: center;
}

.selectgoods {
  border: 3px solid transparent;
}

.selectgoods.active {
  border: 3px solid #749F6C;
}

.price {
  color: $priceColor;
  margin-left: 20px;
}
</style>
