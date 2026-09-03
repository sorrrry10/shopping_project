import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CarList/index.vue";
import Payout from "@/views/Payout/index.vue";
import Payin from "@/views/Payin/index.vue";
import Paycallback from "@/views/Paycallback/index.vue";
import Menber from "@/views/Menber/index.vue";
import MyInfo from "@/views/Menber/components/myInfo.vue";
import MyOrder from "@/views/Menber/components/myOrder.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/layout",
    },
    {
      path: "/layout",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
        {
          path: "subCategory/:id/:subid",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartList",
          component: CartList,
        },
        {
          path: "payout",
          component: Payout,
        },
        {
          path: "payin",
          component: Payin,
        },
        {
          path: "paycallback",
          component: Paycallback,
        },
        {
          path: "member",
          component: Menber,

          children: [
            {
              path: "",
              redirect: "/layout/member/myInfo",
            },
            {
              path: "myInfo",
              component: MyInfo,
            },
            {
              path: "myOrder",
              component: MyOrder,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
