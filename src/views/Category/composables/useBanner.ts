import { useBannerStore } from "@/stores/bannerStore";
import { type banner } from "@/interface/banner";
import { ref, onMounted } from "vue";
export function useBanner() {
  const banners = ref<banner[]>([]);

  const bannerStore = useBannerStore();
  onMounted(async () => {
    await bannerStore.getBanner("2");
    banners.value = bannerStore.banners;
  });
  return {
    banners,
  };
}
