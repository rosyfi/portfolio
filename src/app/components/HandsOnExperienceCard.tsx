import React, { useState } from "react";
import styles from "./styles/HandsOnExperienceCard.module.css";
import HandsOnExperienceType from "./HandsOnExperienceType";

const SoftSkillCard = () => {
  const [type, setType] = useState<number | null>(null);

  const components = [
    {
      tasks: [
        "Coming up with a website idea",
        "Implementing the website",
        "Clarifying team roles",
        "Conducting meetings",
      ],
      impression:
        "It turned out to be the worst team experience ever due to the team's unreliability.",
      keyTakeaway: "Accountability",
      svg: "university",
      place: "University",
    },
    {
      tasks: [
        "Gaining insights into typical roles of a software project",
        "Analyzing sustainable markets in insurances",
        "Generating a mobile web application idea, implementing it, and conducting testing",
      ],
      impression:
        "It was the ultimate team synergy! Our diverse group, comprising both programmers and business analysts, created the best collaborative experience ever. Everyone benefited from each other's expertise, fostering a culture of mutual learning and growth.",
      keyTakeaway: "Kindness",
      svg: "internship",
      place: "Internship",
    },
    {
      tasks: [
        "Gaining insights into first client project",
        "Understanding clients business and needs",
      ],
      impression:
        "Harmonious teamwork facilitates the exchange of valuable insights, allowing members to learn from professionals. In such environments, juniors glean knowledge and wisdom from their more experienced colleagues.",
      keyTakeaway: "Curiosity",
      svg: "work",
      place: "Work",
    },
  ];

  const handleButtonClick = (index: number) => {
    setType(index);
  };

  const handlePrevious = () => {
    if (type !== null && type > 0) {
      setType(type - 1);
    }
  };

  const handleNext = () => {
    if (type !== null && type < components.length - 1) {
      setType(type + 1);
    }
  };

  return (
    <div className={styles.container}>
      {type === null ? (
        <>
          <h2>Hands-on Experience</h2>
          <div className={styles.symbolsContainer}>
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
            <button
              className={styles.symbol}
              onClick={() => handleButtonClick(2)}
            >
              <img className={styles.svg} src="/work.svg" alt="work" />
              <span>Work</span>
            </button>
          </div>
        </>
      ) : (
        <HandsOnExperienceType
          tasks={components[type].tasks}
          impression={components[type].impression}
          keyTakeaway={components[type].keyTakeaway}
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={type === 0}
          disableNext={type === components.length - 1}
          svg={components[type].svg}
          place={components[type].place}
        />
      )}
    </div>
  );
};

export default SoftSkillCard;
