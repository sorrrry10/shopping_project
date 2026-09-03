import httpInstance from "@/utils/http";
export function getDetailGoodsAPI(id: string) {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
}
