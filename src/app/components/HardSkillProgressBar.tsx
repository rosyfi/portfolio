import React from "react";

import styles from "./styles/HardSkillProgressBar.module.css";

interface HardSkillProgressBarProps {
  title: string;
  percentage: number;
}

const HardSkillProgressBar: React.FC<HardSkillProgressBarProps> = ({
  title,
  percentage,
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HardSkillProgressBar;
