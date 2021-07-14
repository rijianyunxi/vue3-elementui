import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Welcome from "../views/Welcome.vue"
import Login from "../views/Login.vue"



const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      title: "首页"
    },
    redirect: "/welcome",
    children: [
      {
        name: "welcome",
        path: "welcome",
        component: Welcome,
        meta: {
          title: "欢迎体验"
        },
      }
    ]
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      title: "登陆"
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
