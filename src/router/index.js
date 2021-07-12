import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Welcome from "../views/Welcome.vue"
import Login from "../views/Login.vue"



const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        name: "welcome",
        path: "/welcome",
        component: Welcome
      }
    ]
  },
  {
    name: "login",
    path: "/login",
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
