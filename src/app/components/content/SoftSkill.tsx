import React from "react";
import styles from "./styles/SoftSkill.module.css";
import HandsOnExpereinceCard from "../HandsOnExperienceCard";
import SoftSkillCard from "../SoftSkillCard";

const SoftSkill = () => {
  return (
    <div className={`container col-11 ${styles.container}`}>
      <SoftSkillCard
        title={"Teamworking"}
        description={
          "I work well in team settings, using my communication and collaboration skills to create a positive and productive environment. While I enjoy working independently as a software developer, I also like working with others to achieve shared goals, exchange ideas, and find the best solutions. Known for my reliability, I actively engage with my colleagues."
        }
      ></SoftSkillCard>
      <HandsOnExpereinceCard></HandsOnExpereinceCard>
    </div>
  );
};

export default SoftSkill;
