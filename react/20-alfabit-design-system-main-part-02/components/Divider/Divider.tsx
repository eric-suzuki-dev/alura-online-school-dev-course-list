import React from "react";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" | "black";
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Divider = ({
  width,
  height,
  children,
  bgColor,
  ...rest
}: DividerProps) => {
  return (
    <div>
      <div></div>
      {children && <div>{children}</div>}
      <div></div>
    </div>
  );
};

export default Divider;