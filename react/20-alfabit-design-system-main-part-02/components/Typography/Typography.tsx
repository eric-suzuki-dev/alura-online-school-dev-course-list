import React from "react";

export type TypographyProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3";
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

const variantClassMap = {
  variant: {
    primary: "text-gray-primary",
    secondary: "text-gray-secondary",
    tertiary: "text-gray-tertiary",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    xl: "text-xl",
    title1: "text-txl",
    title2: "text-tlg",
    title3: "text-tmd",
  },
};

const Typography = ({
  variant = "primary",
  size = "md",
  children,
  element = "p",
  ...rest
}: TypographyProps) => {
  const Element = element as any;
  return (
    <Element
      className={`text-gray-primary text-sm font-normal 
  ${variantClassMap.variant[variant]} ${variantClassMap.size[size]}`}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Typography;