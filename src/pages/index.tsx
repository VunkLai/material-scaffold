import { lazy } from "react";
import { Waiting } from "../components/Loader";

const Pages = {
  Home: Waiting(lazy(() => import("./home"))),
  Blog: Waiting(lazy(() => import("./blog"))),
  Platform: Waiting(lazy(() => import("./platform"))),
};

export default Pages;
