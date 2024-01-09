import Polygon from "./BgPolygon";

const Playground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Polygon />
      <div className="absolute grid overflow-y-auto inset-4 place-items-center">
        <h1 className="h-64 border w-96 border-sky-500">Hello World</h1>
      </div>
    </div>
  );
};

export default Playground;
