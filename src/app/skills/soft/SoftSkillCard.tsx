import React from "react";
import styles from "../../styles/skills/soft/SoftSkillCard.module.css";

interface SoftSkillCardProp {
  title: string;
  description: string;
}

const SoftSkillCard: React.FC<SoftSkillCardProp> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SoftSkillCard;
