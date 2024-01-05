import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Loading } from "../../components/Loader";
let cache = new Map();

const getAlbums = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [{ key: "name" }];
};
export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url === "/the-beatles/albums") {
    return await getAlbums();
  } else {
    throw Error("Not implemented");
  }
}

function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

const HeroContent = () => {
  const albums = use(fetchData(`/the-beatles/albums`));

  useEffect(() => {
    console.log(albums);
  }, [albums]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Typography variant="h1">Platform Hero</Typography>
      <div>{JSON.stringify(albums)}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <Loading>
      <HeroContent />
    </Loading>
  );
};

export default Hero;
