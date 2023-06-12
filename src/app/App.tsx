import React, { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { About } from "@pages/About";
import { Main } from "@pages/Main";
import { classNames } from "@shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
};
