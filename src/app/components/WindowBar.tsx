import React from "react";

import styles from "./WindowBar.module.css";

interface WindowBarProps {
  path: string;
}

const WindowBar: React.FC<WindowBarProps> = ({ path }) => {
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
          <span className={styles.windowBarLink}>{path}</span>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default WindowBar;
