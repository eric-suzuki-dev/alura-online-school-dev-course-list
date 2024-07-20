import React from "react";
import { Secondary } from "../Button/Button.stories";

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: "primary" | "secondary" | "dark" | "alert" | "success" | "error";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
  primary: "bg-primary",
  secondary: "bg-tertiary",
  dark: "bg-dark",
  alert: "bg-yellow-100 text-yellow-100",
  success: "bg-green-100 text-green-100",
  error: "bg-error-100 text-error-100",
};

const Box = ({
  rounded = false,
  border = false,
  filledBackground = false,
  type = "primary",
  children,
  className,
  ...rest
}: BoxProps) => {
  return <div {...rest}>{children}</div>;
};