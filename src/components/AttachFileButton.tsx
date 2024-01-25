import React from "react";

interface AttachFileButtonProps {
  children: React.ReactNode;
  onAttachFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  identity?: string;
}

const AttachFileButton = (props: AttachFileButtonProps) => {
  const { identity = "attach-file" } = props;

  return (
    <div className="active:scale-90">
      <label htmlFor={identity}>
        {props.children}
        <input
          type="file"
          id={identity}
          onChange={props.onAttachFile}
          className="hidden"
        />
      </label>
    </div>
  );
};

export { AttachFileButton };
