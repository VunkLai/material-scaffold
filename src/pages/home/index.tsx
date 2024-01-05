import { Page } from "../../layouts/OneColumnLayout";
import First from "./First";
import Hero from "./Hero";
import Second from "./Second";
import Third from "./Third";

const Home = () => {
  return (
    <Page
      hero={<Hero />}
      content={
        <>
          <First />
          <Second />
          <Third />
        </>
      }
    />
  );
};

export default Home;
