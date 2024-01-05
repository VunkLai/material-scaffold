import { Button, Typography } from "@mui/material";
import { useApp } from "../contexts/AppContext";

const Home = () => {
  const { toggle } = useApp();

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="debug p-16">
        <Typography variant="h1">home</Typography>
        <h1>Home</h1>
        <Button onClick={toggle} variant="contained">
          toggle
        </Button>
      </div>
    </div>
  );
};

export default Home;
