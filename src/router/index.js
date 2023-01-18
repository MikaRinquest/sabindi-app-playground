import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },

  {
    path: "/testing",
    name: "testing",
    component: function () {
      return import("../views/TestingView.vue");
    },
  },
  {
    path: "/testing/calendar-test",
    name: "calendartest",
    component: function () {
      return import("../components/CalendarTest.vue");
    },
  },
  {
    path: "/testing/calendar-redo",
    name: "calenderredo",
    component: function () {
      return import("../components/CalendarRedo.vue");
    },
  },
  {
    path: "/testing/html-pdf",
    name: "htmltopdf",
    component: function () {
      return import("../components/HTML2PDF.vue");
    },
  },
  {
    path: "/testing/dropdown-select",
    name: "dropselect",
    component: function () {
      return import("../components/DropDownSelect.vue");
    },
  },

  {
    path: "/testing/email",
    name: "email",
    component: function () {
      return import("../components/Email.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
