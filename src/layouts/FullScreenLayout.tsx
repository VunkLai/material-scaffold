import { Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./OneColumnLayout";

const FullScreenLayout = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />
      <Toolbar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default FullScreenLayout;
