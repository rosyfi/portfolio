"use client";

import React, { useState } from "react";

import styles from "./Window.module.css";
import WindowBar from "./WindowBar";
import MainWindow from "./MainWindow";

const Window = () => {
  const [currentPath, setCurrentPath] = useState("rossellafilocomo/about");

  const updatePath = (newPath: string) => {
    setCurrentPath(newPath);
  };

  return (
    <div className="container-fluid">
      <WindowBar currentPath={currentPath} />
      <div className={styles.windowContent}>
        <MainWindow updatePath={updatePath} />
      </div>
    </div>
  );
};

export default Window;
