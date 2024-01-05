import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import {
  AppBar,
  Container,
  Fade,
  Grow,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

const Header = () => {
  const trigger = useScrollTrigger({});
  const { toggle } = useApp();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <Link to="/">Title</Link>
          <div className="flex-grow"></div>
          <Link to="/platform">Platform</Link>
          <Link to="/blog">Blog</Link>
          <IconButton onClick={toggle}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

const BackToTop = () => {
  const trigger = useScrollTrigger();

  const scrollToTop = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Grow in={trigger}>
      <div className="fixed bottom-8 right-8">
        <IconButton onClick={scrollToTop} sx={{ borderRadius: 0 }}>
          <VerticalAlignTopIcon fontSize="large" />
        </IconButton>
      </div>
    </Grow>
  );
};

const ReadMore = () => {
  const trigger = useScrollTrigger();

  console.log("trigger", trigger);

  const scrollToTop = () => {
    const anchor = document.querySelector("#second-content-anchor");

    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  return (
    <Fade in={!trigger}>
      <div className="fixed bottom-8 inset-x-1/2">
        <IconButton onClick={scrollToTop} color="secondary">
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
    </Fade>
  );
};

const Footer = () => {
  return (
    <div className="bg-neutral-800 h-16">
      <h3 className="text-inherit">footer</h3>
    </div>
  );
};

const OneColumnLayout = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl">
        <Outlet />
        <Footer />
      </Container>
      <ReadMore />
      <BackToTop />
    </div>
  );
};

interface PageProps {
  hero: React.ReactNode;
  content?: React.ReactNode;
}

const Page = ({ hero, content }: PageProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full">
        <div className="min-h-screen h-fit">{hero}</div>
        {content && <div id="second-content-anchor">{content}</div>}
      </div>
    </Suspense>
  );
};

export default OneColumnLayout;

export { Header, Page };
