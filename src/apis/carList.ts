import httpInstance from "@/utils/http";
export function addCarAPI(skuId: string, count: number) {
  return httpInstance({
    url: "/member/cart",
    method: "post",
    data: {
      skuId,
      count,
    },
  });
}
export function getCarAPI() {
  return httpInstance({
    url: "/member/cart",
  });
}
export function delCarAPI(ids: string[]) {
  return httpInstance({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
}
export function togertherCarAPI(data: { skuId: string; selected: boolean; count: number }[]) {
  return httpInstance({
    url: "/member/cart/merge",
    method: "post",
    data,
  });
}
