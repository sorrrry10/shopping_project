import httpInstance from "@/utils/http.ts";
export function getGoodsAPI() {
  return httpInstance({
    url: "home/goods",
  });
}
