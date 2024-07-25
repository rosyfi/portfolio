import React from "react";
import styles from "../../../../styles/content/skill/SoftSkill.module.css";
import HandsOnExpereinceCard from "./HandsOnExperienceCard";
import SoftSkillCard from "./SoftSkillCard";

import softSkills from "../../data/SoftSkill";

const SoftSkill = () => {
  return (
    <div className={`container col-11 ${styles.container}`}>
      {Object.keys(softSkills).map((key: string, index: number) => (
        <div className={styles.cardContent} key={key}>
          <React.Fragment>
            {index % 2 === 0 ? (
              <React.Fragment>
                <SoftSkillCard
                  title={softSkills[key].title}
                  description={softSkills[key].description}
                />
                <HandsOnExpereinceCard skills={softSkills[key].specifics} />
              </React.Fragment>
            ) : (
              <div className={styles.cardContent} key={key}>
                <React.Fragment>
                  <HandsOnExpereinceCard skills={softSkills[key].specifics} />
                  <SoftSkillCard
                    title={softSkills[key].title}
                    description={softSkills[key].description}
                  />
                </React.Fragment>
              </div>
            )}
          </React.Fragment>
        </div>
      ))}
    </div>
  );
};

export default SoftSkill;
