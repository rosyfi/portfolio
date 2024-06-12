import React from "react";

import styles from "./WindowBar.module.css";

interface WindowBarProps {
  currentPath: string;
}

const WindowBar: React.FC<WindowBarProps> = ({ currentPath }) => {
  return (
    <div className={`container-fluid ${styles.windowBarContainer}`}>
      <div className="row">
        <div className="col">
          <img
            src="/windowBarButtons.svg"
            alt="Window bar buttons"
            className="windowBarButtons"
          />
        </div>
        <div className="col text-center">
          <span className={styles.windowBarLink}>{currentPath}</span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default WindowBar;
