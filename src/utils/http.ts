import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/userStore";

const httpInstance = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 10000,
});
httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.userInfor.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    const userStore = useUserStore();
    if (e.response.status == 401) {
      userStore.clearUser();
      window.location.href = "/#/login";
    }
    return Promise.reject(e);
  },
);
export default httpInstance;
