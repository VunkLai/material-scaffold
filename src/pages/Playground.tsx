import { SectionCard } from "../ui/SectionCard";

const Playground = () => {
  return (
    <div className="w-full h-screen row-center">
      <div className="container relative flex-wrap gap-16 px-2 py-4 row-center">
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </div>
  );
};

export default Playground;
