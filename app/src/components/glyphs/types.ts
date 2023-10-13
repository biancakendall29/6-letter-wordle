import { ReactNode } from "react";

export interface ISVGProps {
  className?: string;
  children: ReactNode;
  fill: string;
  height?: string;
  testId?: string;
  title: string;
  viewBox: string;
  width?: string;
  actionClick?: () => void;
}

interface INoIconProps {
  icon?: false;
  iconSize?: never;
}

interface IIconProps {
  icon: true;
  iconSize: number;
}

export type IGlyphProps = {
  className?: string;
  fill?: string;
  testId?: string;
  title: string;
  actionClick?: () => void;
} & (IIconProps | INoIconProps);
