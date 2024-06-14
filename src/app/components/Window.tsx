import React from "react";

import styles from "./Window.module.css";
import WindowBar from "./WindowBar";

interface WindowProps {
  path: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ path, children }) => {
  return (
    <div className={styles.windowContainer}>
      <WindowBar path={path} />
      <div className={styles.windowContent}>{children}</div>
    </div>
  );
};

export default Window;
