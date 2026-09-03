import { useBannerStore } from "@/stores/bannerStore";
import { onMounted, ref } from "vue";
import { type banner } from "@/interface/banner";
export function useBanner() {
  const bannerStore = useBannerStore();
  const banners = ref<banner[]>([]);
  onMounted(async () => {
    await bannerStore.getBanner("1");
    banners.value = bannerStore.banners;
  });
  return {
    banners,
  };
}
