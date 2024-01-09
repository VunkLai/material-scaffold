import LoadingIcon from "../images/loading.svg?react";

import "./loading.css";

const Loading = () => {
  return (
    <div className="absolute min-h-[400px] min-w-[400px]">
      <div className="absolute inset-0 animate-rotate360">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default Loading;
