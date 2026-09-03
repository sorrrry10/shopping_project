import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./userStore";
import { addCarAPI, getCarAPI, delCarAPI } from "@/apis/carList";
export interface getskus {
  picture: string;
  name: string;
  skus: skus;
  count: number;
  isSelect: boolean;
}
interface skus {
  id: string;
  picture: string;
  price: string;
  specs: spec[];
}
interface spec {
  name: string;
  valueName: string;
}
const carlist = ref<getskus[]>([]);

export const useCarStore = defineStore("carStore", {
  actions: {
    async updataCar() {
      const res = await getCarAPI();
      //@ts-expect-error///
      const newArr = res.result.map((item) => {
        const arr = item.attrsText.split(" ");
        const arry = arr.map((it: string) => {
          const arry = it.split(":");
          return {
            name: arry[0],
            valueName: arry[1],
          };
        });
        return {
          skus: {
            id: item.skuId,
            picture: item.picture,
            price: item.price,
            specs: arry,
          },
          picture: item.picture,
          name: item.name,
          count: item.count,
          isSelect: item.selected,
        };
      });
      carlist.value = newArr;
    },
    async addCar(getSkus: getskus) {
      const userStore = useUserStore();
      const isLogin = computed(() => {
        return userStore.userInfor.token;
      });
      if (isLogin.value) {
        await addCarAPI(getSkus.skus.id, getSkus.count);
        this.updataCar();
      } else {
        const item = carlist.value.find((item: getskus) => getSkus.skus.id === item.skus.id);
        if (!item) {
          carlist.value.push(getSkus);
        }
      }
    },
    async deleteCar(skuId: string) {
      const userStore = useUserStore();
      const isLogin = computed(() => {
        return userStore.userInfor.token;
      });
      if (isLogin.value) {
        await delCarAPI([skuId]);
        this.updataCar();
      } else {
        const item = carlist.value.findIndex((item: getskus) => skuId === item.skus.id);
        carlist.value.splice(item, 1);
      }
    },
    singleCheck(skuId: string, isSelect: boolean) {
      const item = carlist.value.find((item: getskus) => skuId === item.skus.id);
      if (item) {
        item.isSelect = isSelect;
      }
    },
    clearCar() {
      carlist.value = [];
    },
    changeIsAll(isSelect: boolean) {
      carlist.value.forEach((item) => {
        item.isSelect = isSelect;
      });
    },
  },
  getters: {
    goodsCount() {
      return carlist.value.reduce((total: number, list: getskus) => {
        return total + list.count;
      }, 0);
    },
    goodsSelectedCount() {
      return carlist.value.reduce((total: number, list: getskus) => {
        if (list.isSelect == true) {
          return total + list.count;
        } else {
          return total;
        }
      }, 0);
    },
    totalMoney() {
      return carlist.value.reduce((total: number, list: getskus) => {
        return total + Number(list.skus.price) * list.count;
      }, 0);
    },
    totalSelectedMoney() {
      return carlist.value.reduce((total: number, list: getskus) => {
        if (list.isSelect == true) {
          return total + Number(list.skus.price) * list.count;
        } else {
          return total;
        }
      }, 0);
    },
    isAll() {
      return carlist.value.every((item) => {
        return item.isSelect;
      });
    },
  },
  state() {
    return {
      carlist,
    };
  },
  persist: true,
});
