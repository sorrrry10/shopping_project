import httpInstance from "@/utils/http";
export function getThinkLoveAPI(limit = 4) {
  return httpInstance({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
}
