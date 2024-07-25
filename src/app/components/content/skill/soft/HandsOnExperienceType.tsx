import React, { useState } from "react";
import styles from "../../../../styles/content/skill/HandsOnExperienceType.module.css";
import HandsOnExperienceCard from "./HandsOnExperienceCard";

interface SoftSkillsProps {
  skills: {
    tasks: Array<string>;
    impression: string;
    keyTakeaway: string;
    svg: string;
    place: string;
  }[];
}

const SoftSkillCard: React.FC<SoftSkillsProps> = ({ skills }) => {
  const [type, setType] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setType(index);
  };

  const handlePrevious = () => {
    if (type !== null && type > 0) {
      setType(type - 1);
    }
  };

  const handleNext = () => {
    if (type !== null && type < skills.length - 1) {
      setType(type + 1);
    }
  };

  return (
    <div className={styles.container}>
      {type === null ? (
        <>
          <h2>Hands-On Experience</h2>
          <div className={styles.typesWrapper}>
            {skills.find((skill) => {
              return skill.place === "University";
            }) !== undefined && (
              <button
                className={styles.type}
                onClick={() => handleButtonClick(0)}
              >
                <img
                  className={styles.svg}
                  src="/university.svg"
                  alt="unviersity"
                />
                <span>Univeristy</span>
              </button>
            )}
            {skills.find((skill) => {
              return skill.place === "Internship";
            }) !== undefined && (
              <button
                className={styles.type}
                onClick={() => handleButtonClick(1)}
              >
                <img
                  className={styles.svg}
                  src="/internship.svg"
                  alt="internship"
                />
                <span>Internship</span>
              </button>
            )}
            {skills.find((skill) => {
              return skill.place === "Work";
            }) !== undefined && (
              <button
                className={styles.type}
                onClick={() => handleButtonClick(2)}
              >
                <img className={styles.svg} src="/work.svg" alt="work" />
                <span>Work</span>
              </button>
            )}
          </div>
        </>
      ) : (
        <HandsOnExperienceCard
          tasks={skills[type].tasks}
          impression={skills[type].impression}
          keyTakeaway={skills[type].keyTakeaway}
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={type === 0}
          disableNext={type === skills.length - 1}
          svg={skills[type].svg}
          place={skills[type].place}
        />
      )}
    </div>
  );
};

export default SoftSkillCard;
