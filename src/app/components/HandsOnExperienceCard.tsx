import React, { useState } from "react";
import styles from "./styles/HandsOnExperienceCard.module.css";
import HandsOnExperienceType from "./HandsOnExperienceType";

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
          <div className={styles.symbolsContainer}>
            {skills[0]?.tasks?.length > 0 && (
              <button
                className={styles.symbol}
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
            {skills[1]?.tasks?.length > 0 && (
              <button
                className={styles.symbol}
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
            {skills[2]?.tasks?.length > 0 && (
              <button
                className={styles.symbol}
                onClick={() => handleButtonClick(2)}
              >
                <img className={styles.svg} src="/work.svg" alt="work" />
                <span>Work</span>
              </button>
            )}
          </div>
        </>
      ) : (
        <HandsOnExperienceType
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
