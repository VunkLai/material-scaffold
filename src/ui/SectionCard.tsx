import logo from "../icons/logo.png";
import "./section-card.css";

const SectionCard = () => {
  return (
    <div className="card relative w-[360px] h-[180px] bg-white duration-500 hover:h-[450px]">
      <div className="absolute inset-0 overflow-hidden bg-black lines"></div>
      <div className="z-10 bg-black imgBx absolute w-[150px] h-[150px] duration-500 overflow-hidden row-center after:absolute after:inset-1 after:bg-[#292929]">
        <img
          src={logo}
          className="absolute z-10 duration-500 opacity-50 w-[100px]"
        />
      </div>
      <div className="absolute flex items-end justify-center w-full h-full overflow-hidden content ">
        <div className="details ">
          <h2 className="text-3xl text-[#45f3ff]">Title</h2>
          <p className="text-white duration-500 opacity-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            eaque iste quaerat voluptatem nemo quo.
          </p>
          <a
            href="#"
            className="underline duration-500 opacity-0 text-primary-light"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export { SectionCard };
