import httpInstance from "@/utils/http";
export function getHotGoodsAPI(id: number, type: number, limit: number = 6) {
  return httpInstance({
    url: "/goods/hot",
    params: {
      id,
      type,
      limit,
    },
  });
}
