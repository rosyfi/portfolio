import React from "react";
import styles from "./styles/SoftSkill.module.css";
import HandsOnExpereinceCard from "../HandsOnExperienceCard";
import SoftSkillCard from "../SoftSkillCard";

import softSkills from "./data/SoftSkill";

const SoftSkill = () => {
  return (
    <>
      {Object.keys(softSkills).map((key: string, index: number) => (
        <div className={`container col-11 ${styles.container}`} key={key}>
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
              <React.Fragment>
                <HandsOnExpereinceCard skills={softSkills[key].specifics} />
                <SoftSkillCard
                  title={softSkills[key].title}
                  description={softSkills[key].description}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      ))}
    </>
  );
};

export default SoftSkill;
