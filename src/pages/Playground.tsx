import Loading from "../ui/Loading";

const Playground = () => {
  return (
    <div className="relative grid w-full h-screen place-content-center">
      <div className="absolute grid border inset-4 border-sky-500 place-content-center">
        <Loading />
      </div>
    </div>
  );
};

export default Playground;
