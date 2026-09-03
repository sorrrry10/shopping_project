import httpInstance from "@/utils/http.ts";
export function getNewProductAPI() {
  return httpInstance({
    url: "home/new",
  });
}
