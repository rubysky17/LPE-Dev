import APP from "app/page/";

export const URL_PATH = {
  LOGIN: "/login",
  HOME: "/home",
  COURSE: "/course"
};

export const publicRoutes = [
  {
    component: APP.HomePage,
    exact: true,
    path: URL_PATH.HOME,
  },
  {
    component: APP.Course,
    exact: true,
    path: URL_PATH.COURSE
  }
];

export const privateRoutes = [
  {
    component: APP.LoginPage,
    exact: true,
    path: URL_PATH.LOGIN,
  },
];

export const publicPaths = publicRoutes.map((route) => route.path);
export const privatePaths = privateRoutes.map((route) => route.path);
