import httpInstance from "@/utils/http.ts";
export function getCategoryAPI(id: string) {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
}
