import classNames from "classnames";
interface TooltipProps {
  label: string;
  direction?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const labelClass = classNames(
    "absolute hidden group-hover:block h-max w-max p-2",
    {
      "bg-[#aaa] mx-auto rounded-md": true,
      "bottom-full inset-x-0 mb-3": props.direction === "top",
      "top-full inset-x-0 mt-3": props.direction === "bottom",
      "right-full inset-y-0 mr-3": props.direction === "left",
      "left-full inset-y-0 ml-3": props.direction === "right",
    }
  );

  const arrowClass = classNames(
    "absolute hidden group-hover:block w-4 h-4 rotate-45",
    {
      "bg-[#aaa] mx-auto ": true,
      "bottom-full inset-x-0 mb-2": props.direction === "top",
      "top-full inset-x-0 mt-2": props.direction === "bottom",
      "right-full inset-y-0 mr-2 my-auto": props.direction === "left",
      "left-full inset-y-0 ml-2 my-auto": props.direction === "right",
    }
  );

  return (
    <div className="relative mx-auto group w-max">
      <div className="">{props.children}</div>
      <div className={arrowClass}></div>
      <div className={labelClass}>{props.label}</div>
    </div>
  );
};

export { Tooltip };
