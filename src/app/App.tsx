import React, { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutLazy } from "./pages/About/About.lazy";
import { MainLazy } from "./pages/Main/Main.lazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutLazy />} />
          <Route path="/" element={<MainLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
