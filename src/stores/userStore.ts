import { defineStore } from "pinia";
import { getLoginAPI } from "@/apis/login";
import { ref } from "vue";
import { useCarStore } from "./carStore";
import { togertherCarAPI } from "@/apis/carList";

interface userInfo {
  token?: string;
  account?: string;
  avatar?: string;
}
const userInfor = ref<userInfo>({});
export const useUserStore = defineStore("user", {
  actions: {
    async getUserInfor(account: string, password: string) {
      const carStore = useCarStore();
      const res = await getLoginAPI(account, password);
      //@ts-expect-error///
      userInfor.value = res.result;
      const data = carStore.carlist.map((item) => {
        return {
          skuId: item.skus.id,
          selected: item.isSelect,
          count: item.count,
        };
      });
      togertherCarAPI(data);
      carStore.updataCar();
    },
    clearUser() {
      userInfor.value = {};
    },
  },
  state() {
    return {
      userInfor,
    };
  },
  persist: true,
});
