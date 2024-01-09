import PolygonImage from "../images/bg-polygon.svg?react";

import "./bg-polygon.css";

const Polygon = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bg-[#405060] bg-polygon min-w-[1280px] w-full min-h-full">
      <PolygonImage />
    </div>
  );
};

export default Polygon;
