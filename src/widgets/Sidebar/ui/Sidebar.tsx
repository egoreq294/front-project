import React, { FC, useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { ThemeSwitcher } from "@widgets/ThemeSwitcher";
import { LanguageSwitcher } from "@widgets/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        { [styles.Collapsed]: collapsed },
        styles.Sidebar,
        className
      )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.Switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
