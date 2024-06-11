import React from "react";

import styles from "./Window.module.css";

const Window = () => {
  return (
    <div className="container-fluid">
      <div className={styles.windowBar}>
        <div className="row">
          <div className="col">
            <img
              src="/windowButtons.svg"
              alt="Window buttons"
              className="windowButtons"
            />
          </div>
          <div className="col text-center">
            <span className={styles.windowLink}>rossellafilocomo/home</span>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className={styles.windowContent}>
        <p>
          Voluptate ullamco elit nulla reprehenderit duis non do sunt non quis
          labore qui. Pariatur adipisicing proident eu labore anim et do
          consequat aute. Sint consectetur excepteur magna veniam.
        </p>
      </div>
    </div>
  );
};

export default Window;
