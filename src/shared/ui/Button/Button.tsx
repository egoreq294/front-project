import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export enum ThemeButton {
  CLEAR = "Clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...props
}) => {
  return (
    <button className={cn(styles.Button, styles[theme], className)} {...props}>
      {children}
    </button>
  );
};
