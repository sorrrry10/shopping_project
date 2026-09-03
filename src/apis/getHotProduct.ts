import httpInstance from "@/utils/http.ts";
export function getHotProductAPI() {
  return httpInstance({
    url: "home/hot",
  });
}
