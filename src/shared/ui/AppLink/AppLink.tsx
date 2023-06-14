import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "Primary",
  SECONDARY = "Secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  theme = AppLinkTheme.PRIMARY,
  className,
  children,
  ...restProps
}) => {
  return (
    <Link
      to={to}
      className={cn(styles.AppLink, styles[theme], className)}
      {...restProps}
    >
      {children}
    </Link>
  );
};
