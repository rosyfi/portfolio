import React, { useState } from "react";
import styles from "../../../../styles/content/skill/HandsOnExperienceType.module.css";
import HandsOnExperienceCard from "./HandsOnExperienceCard";

interface HandsOnExperienceTypeProps {
  skills: {
    tasks: Array<string>;
    impression: string;
    keyTakeaway: string;
    svg: string;
    place: string;
  }[];
}

const HandsOnExperienceType: React.FC<HandsOnExperienceTypeProps> = ({
  skills,
}) => {
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
            {skills.map((skill, index) => {
              return (
                <button
                  className={styles.type}
                  onClick={() => handleButtonClick(index)}
                  key={index}
                >
                  <img
                    className={styles.svg}
                    src={`./${skill.svg}.svg`}
                    alt={skill.place}
                  />
                  <span>{skill.place}</span>
                </button>
              );
            })}
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

export default HandsOnExperienceType;
