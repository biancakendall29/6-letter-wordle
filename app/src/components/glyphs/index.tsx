import { FC } from "react";
import { ISVGProps } from "./types";

export const SVG: FC<ISVGProps> = ({
  children,
  className,
  fill,
  height,
  testId,
  title,
  viewBox,
  width,
  actionClick,
}) => (
  <svg
    className={className}
    data-testid={testId}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox={viewBox}
    width={width}
    fill={fill}
    onClick={actionClick}
  >
    <title>{title}</title>
    {children}
  </svg>
);
