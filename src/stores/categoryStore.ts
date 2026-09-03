import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/getCategoryAPI";
interface category {
  id: string;
  name: string;
  picture: string;
  children: child[];
  goods: [];
}
interface child {
  id: string;
  name: string;
  picture: string;
}
export const useCategoryStore = defineStore("category", {
  actions: {
    async getCategory() {
      const res = await getCategoryAPI();

      //@ts-expect-error///
      this.categorys = res.result;
    },
  },
  state() {
    return {
      categorys: [] as category[],
    };
  },
});
