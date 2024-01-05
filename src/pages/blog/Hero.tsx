import { Typography } from "@mui/material";

const Article = () => {
  return (
    <article className="p-4 justify-start">
      <Typography variant="h4">Title</Typography>
      <Typography variant="h6">subtitle</Typography>
      <div>content ...</div>
    </article>
  );
};

const Hero = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Typography variant="h1">Blog Hero</Typography>
      <div className="my-4 p-4 w-full">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Article key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
