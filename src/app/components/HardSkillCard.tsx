import React from "react";

import styles from "./styles/HardSkillCard.module.css";

interface HardSkillCardProp {
  title: string;
  tools: Array<string>;
}

const HardSkillCard: React.FC<HardSkillCardProp> = ({ title, tools }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.toolsContainer}>
        <ul>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HardSkillCard;
