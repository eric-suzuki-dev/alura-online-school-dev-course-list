import classNames from "classnames";
import React from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

const Avatar = ({ size = "xs", className, ...rest }: AvatarProps) => {
  const avatarSizeClass = avatarSizeMap[size];

  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeClass,
        className
      )}
      {...rest}
    ></div>
  );
};

export default Avatar;