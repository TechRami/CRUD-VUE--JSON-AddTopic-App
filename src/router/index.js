import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddTopic from "../views/AddTopic.vue";
import EditTopic from "../views/EditTopic.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddTopic",
    component: AddTopic,
  },
  {
    path: "/projects/:id",
    name: "EditTopic",
    component: EditTopic,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
