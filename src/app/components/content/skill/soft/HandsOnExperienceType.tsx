import React from "react";
import styles from "../../../../styles/content/skill/HandsOnExperienceType.module.css";

interface HandsOnExperienceTypeProps {
  tasks: Array<string>;
  impression: string;
  keyTakeaway: string;
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious: boolean;
  disableNext: boolean;
  svg: string;
  place: string;
}

const HandsOnExperienceType: React.FC<HandsOnExperienceTypeProps> = ({
  tasks,
  impression,
  keyTakeaway,
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
  svg,
  place,
}) => {
  return (
    <div className={styles.container}>
      <button onClick={onPrevious} disabled={disablePrevious}>
        <img className={styles.svg} src="arrowLeft.svg" alt="arrowLeft" />
      </button>

      <div className={styles.content}>
        <div className={styles.topWrapper}>
          <div className={styles.tasksWrapper}>
            <h2>Tasks</h2>
            <ul className={styles["custom-list"]}>
              {tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>

          <div className={styles.impressionWrapper}>
            <h2>Impression</h2>
            <p>{impression}</p>
          </div>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.keyTakeawayWrapper}>
            <h4>Key Takeaway:</h4>
            <span>{keyTakeaway}</span>
          </div>
          <div className={styles.placeWrapper}>
            <img
              className={styles.placeSymbol}
              src={`${svg}.svg`}
              alt={`${svg}`}
            />
            <span>{place}</span>
          </div>
        </div>
      </div>

      <button onClick={onNext} disabled={disableNext}>
        <img className={styles.svg} src="arrowRight.svg" alt="arrowRight" />
      </button>
    </div>
  );
};

export default HandsOnExperienceType;
