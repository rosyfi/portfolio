import React from "react";
import styles from "../../../../styles/content/skill/HandsOnExperienceCard.module.css";
import Image from "next/image";

interface HandsOnExperienceCardProps {
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

const HandsOnExperienceCard: React.FC<HandsOnExperienceCardProps> = ({
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
        <Image
          width={"19"}
          height={"34"}
          className={styles.svg}
          src="arrowLeft.svg"
          alt="arrowLeft"
        />
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
            <Image
              width={"87"}
              height={"65"}
              className={styles.placeSymbol}
              src={`${svg}.svg`}
              alt={`${svg}`}
            />
            <span>{place}</span>
          </div>
        </div>
      </div>

      <button onClick={onNext} disabled={disableNext}>
        <Image
          width={"19"}
          height={"34"}
          className={styles.svg}
          src="arrowRight.svg"
          alt="arrowRight"
        />
      </button>
    </div>
  );
};

export default HandsOnExperienceCard;
