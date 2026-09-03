import { defineStore } from "pinia";
import { getBannerAPI } from "@/apis/getBannerIMG";
import { type banner } from "@/interface/banner";
export const useBannerStore = defineStore("banner", {
  actions: {
    async getBanner(id: string) {
      const res = await getBannerAPI({
        distributionStie: id,
      });
      //@ts-expect-error///
      this.banners = res.result;
    },
  },
  state() {
    return {
      banners: [] as banner[],
    };
  },
});
