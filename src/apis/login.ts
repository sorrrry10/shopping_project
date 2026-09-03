import httpInstance from "@/utils/http.ts";
export function getLoginAPI(account: string, password: string) {
  return httpInstance({
    method: "POST",
    url: "/login",
    data: {
      account,
      password,
    },
  });
}
