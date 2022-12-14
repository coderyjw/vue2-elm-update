import App from "../App";
import { createRouter, createWebHistory } from "vue-router";

import home from "../page/home/home.vue";
import msite from "../page/msite/msite.vue";
import city from "../page/city/city.vue";
import food from "../page/food/food.vue";
import search from "../page/search/search.vue";
import shop from "../page/shop/shop.vue";
import login from "../page/login/login.vue";
import profile from "../page/profile/profile.vue";
import forget from "../page/forget/forget.vue";
import order from "../page/order/order.vue";
import orderDetail from "../page/order/children/orderDetail.vue";
import vipcard from "../page/vipcard/vipcard.vue";
import invoiceRecord from "../page/vipcard/children/vipDescription.vue";
import useCart from "../page/vipcard/children/useCart.vue";
import vipDescription from "../page/vipcard/children/vipDescription.vue";
import confirmOrder from "../page/confirmOrder/confirmOrder.vue";
import remark from "../page/confirmOrder/children/remark.vue";
import payment from "../page/confirmOrder/children/payment.vue";
import userValidation from "../page/confirmOrder/children/userValidation.vue";
import invoice from "../page/confirmOrder/children/invoice.vue";
import foodDetail from "../page/shop/children/foodDetail.vue";
import shopDetail from "../page/shop/children/shopDetail.vue";
import chooseAddress from "../page/confirmOrder/children/chooseAddress.vue";
import addAddress from "../page/confirmOrder/children/children/addAddress.vue";
import searchAddress from "../page/confirmOrder/children/children/children/searchAddress.vue";
import shopSafe from "../page/shop/children/children/shopSafe.vue";
import info from "../page/profile/children/info.vue";
import setusername from "../page/profile/children/children/setusername.vue";
import address from "../page/profile/children/children/address.vue";
import add from "../page/profile/children/children/children/add.vue";
import addDetail from "../page/profile/children/children/children/children/addDetail.vue";
import balance from "../page/balance/balance.vue";
import balanceDetail from "../page/balance/children/detail.vue";
import benefit from "../page/benefit/benefit.vue";
import coupon from "../page/benefit/children/coupon.vue";
import hbDescription from "../page/benefit/children/hbDescription.vue";
import hbHistory from "../page/benefit/children/hbHistory.vue";
import exchange from "../page/benefit/children/exchange.vue";
import commend from "../page/benefit/children/commend.vue";
import points from "../page/points/points.vue";
import pointsDetail from "../page/points/children/detail.vue";
import service from "../page/service/service.vue";
import questionDetail from "../page/service/children/questionDetail.vue";
import find from "../page/find/find.vue";
import download from "../page/download/download.vue";

const routes = [
  {
    path: "/",
    component: App, //?????????????????????index.html
    children: [
      //?????????????????????App.vue
      //?????????????????????home??????
      {
        path: "",
        redirect: "/home",
      },
      //?????????????????????
      {
        path: "/home",
        component: home,
      },
      //?????????????????????
      {
        path: "/city/:cityid",
        component: city,
      },
      //?????????????????????
      {
        path: "/msite",
        component: msite,
        meta: { keepAlive: true },
      },
      //?????????????????????
      {
        path: "/food",
        component: food,
      },
      //?????????
      {
        path: "/search/:geohash",
        component: search,
      },
      //???????????????
      {
        path: "/shop",
        component: shop,
        children: [
          {
            path: "foodDetail", //???????????????
            component: foodDetail,
          },
          {
            path: "shopDetail", //???????????????
            component: shopDetail,
            children: [
              {
                path: "shopSafe", //?????????????????????
                component: shopSafe,
              },
            ],
          },
        ],
      },
      //???????????????
      {
        path: "/confirmOrder",
        component: confirmOrder,
        children: [
          {
            path: "remark", //????????????
            component: remark,
          },
          {
            path: "invoice", //????????????
            component: invoice,
          },
          {
            path: "payment", //????????????
            component: payment,
          },
          {
            path: "userValidation", //????????????
            component: userValidation,
          },
          {
            path: "chooseAddress", //????????????
            component: chooseAddress,
            children: [
              {
                path: "addAddress", //????????????
                component: addAddress,
                children: [
                  {
                    path: "searchAddress", //????????????
                    component: searchAddress,
                  },
                ],
              },
            ],
          },
        ],
      },
      //???????????????
      {
        path: "/login",
        component: login,
      },
      //???????????????
      {
        path: "/profile",
        component: profile,
        children: [
          {
            path: "info", //?????????????????????
            component: info,
            children: [
              {
                path: "setusername",
                component: setusername,
              },
              {
                path: "address",
                component: address, //????????????
                children: [
                  {
                    path: "add",
                    component: add,
                    children: [
                      {
                        path: "addDetail",
                        component: addDetail,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "service", //????????????
            component: service,
          },
        ],
      },
      //???????????????
      {
        path: "/forget",
        component: forget,
      },
      //???????????????
      {
        path: "/order",
        component: order,
        children: [
          {
            path: "orderDetail", //???????????????
            component: orderDetail,
          },
        ],
      },
      //vip??????
      {
        path: "/vipcard",
        component: vipcard,
        children: [
          {
            path: "invoiceRecord", //?????????
            component: invoiceRecord,
          },
          {
            path: "useCart", //???????????????
            component: useCart,
          },
          {
            path: "vipDescription", //????????????
            component: vipDescription,
          },
        ],
      },
      //?????????
      {
        path: "/find",
        component: find,
      },
      //?????????
      {
        path: "/download",
        component: download,
      },
      //????????????
      {
        path: "/service",
        component: service,
        children: [
          {
            path: "questionDetail", //???????????????
            component: questionDetail,
          },
        ],
      },
      //??????
      {
        path: "balance",
        component: balance,
        children: [
          {
            path: "detail", //????????????
            component: balanceDetail,
          },
        ],
      },
      //???????????????
      {
        path: "benefit",
        component: benefit,
        children: [
          {
            path: "coupon", //???????????????
            component: coupon,
          },
          {
            path: "hbDescription", //????????????
            component: hbDescription,
          },
          {
            path: "hbHistory", //????????????
            component: hbHistory,
          },
          {
            path: "exchange", //????????????
            component: exchange,
          },
          {
            path: "commend", //????????????
            component: commend,
          },
        ],
      },
      //???????????????
      {
        path: "points",
        component: points,
        children: [
          {
            path: "detail", //????????????
            component: pointsDetail,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
