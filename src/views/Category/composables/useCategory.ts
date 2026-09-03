import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { type categoryData } from "@/interface/categoryData";
export function useCategory() {
  const categoryData = ref<categoryData>();
  const route = useRoute();
  //默认参数
  async function getCategory(id = route.params.id as string) {
    const res = await getCategoryAPI(id);
    //@ts-expect-error///
    categoryData.value = res.result;
  }
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id as string);
  });
  onMounted(() => {
    getCategory();
  });
  return {
    categoryData,
  };
}
