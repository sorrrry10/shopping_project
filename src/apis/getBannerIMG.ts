import httpInstance from "@/utils/http.ts";
interface bannerParams {
  distributionStie?: string;
}
export function getBannerAPI(params: bannerParams = {}) {
  const { distributionStie = "1" } = params;
  return httpInstance({
    url: "home/banner",
    params: {
      distributionStie,
    },
  });
}
