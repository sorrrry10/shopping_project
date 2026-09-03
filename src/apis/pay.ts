import httpInstance from "@/utils/http";
export function getPayoutAPI() {
  return httpInstance({
    url: "/member/order/pre",
  });
}
export function getOrderAPI(data: object) {
  return httpInstance({
    url: "/member/order",
    method: "POST",
    data,
  });
}
export function getOrderOAPI(id: string) {
  return httpInstance({
    url: `/member/order/${id}`,
  });
}
export function getOrderListAPI(params) {
  return httpInstance({
    url: "/member/order",
    method: "GET",
    params,
  });
}
