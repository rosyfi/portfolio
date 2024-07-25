import React from "react";
import styles from "../styles/Window.module.css";
import WindowBar from "./WindowBar";

interface WindowProps {
  path: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ path, children }) => {
  return (
    <div className={styles.container}>
      <WindowBar path={path} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Window;
