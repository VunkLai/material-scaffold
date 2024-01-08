import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Layouts } from "./layouts";
import Pages from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layouts.OneColumn />,
    children: [{ index: true, element: <Pages.Home /> }],
  },
  {
    path: "/blog",
    element: <Layouts.OneColumn />,
    children: [
      { index: true, element: <Pages.Blog /> },
      // ...
    ],
  },
  {
    path: "/platform",
    element: <Layouts.FullScreen />,
    children: [
      { index: true, element: <Pages.Platform /> },
      // ...
    ],
  },
  {
    path: "/playground",
    element: <Pages.Playground />,
  },
];

export default createBrowserRouter(routes);
