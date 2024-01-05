import { Page } from "../layouts/OneColumnLayout";
import Blog from "./blog";
import Home from "./home";
import Platform from "./platform";

const Pages = {
  Home: () => (
    <Page
      hero={<Home.Hero />}
      content={
        <>
          <Home.First />
          <Home.Second />
          <Home.Third />
        </>
      }
    />
  ),
  Blog: () => <Page hero={<Blog.Hero />} />,
  Platform: Platform,
};

export default Pages;
