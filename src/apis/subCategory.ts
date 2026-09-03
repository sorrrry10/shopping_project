import httpInstance from "@/utils/http.ts";
export function getSubCategoryFilterAPI(id: string) {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
}
export function getSubCategoryAPI(data: object) {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
}
