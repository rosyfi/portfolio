import React from "react";
import styles from "./styles/Timeline.module.css";
import { Month, months } from "./content/data/Experience";

type TimelineProps = {
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  work: boolean;
  left: boolean;
};

/**
 * Return an array containing all month names in the given range inclusive start and end.
 * @returns
 */
export const getMonthsInRange = (
  startYear: number,
  startMonth: string,
  endYear: number,
  endMonth: string
): Month[] => {
  const monthNamesBetween: Month[] = [];

  const startMonthIdx =
    months.find((month) => month.name === startMonth)?.index ?? -123456;
  const endMonthIdx =
    months.find((month) => month.name === endMonth)?.index ?? -123456;

  let monthsBetween = 0;
  monthsBetween = (endYear - startYear) * 12;
  monthsBetween -= startMonthIdx;
  monthsBetween += endMonthIdx;

  for (let i = 0; i <= monthsBetween; i++) {
    monthNamesBetween.push(months[(startMonthIdx + i) % months.length]);
  }

  return monthNamesBetween.reverse();
};

const TimeLine: React.FC<TimelineProps> = ({
  startMonth,
  startYear,
  endMonth,
  endYear,
  work,
  left,
}) => {
  const workTimeline = getMonthsInRange(
    startYear,
    startMonth,
    endYear,
    endMonth
  );

  return (
    <div className={styles.container}>
      {workTimeline.map((month, index) => (
        <>
          <div
            className={styles.monthContainer}
            style={{
              flexDirection: left ? "row" : "row-reverse",
            }}
          >
            <div
              className={styles.line}
              style={{
                opacity:
                  (index === 0 || index === workTimeline.length - 1) && work
                    ? 1
                    : 0,
              }}
            />
            <div
              className={styles.month}
              style={{ backgroundColor: work ? "rgba(96, 108, 56)" : "red" }}
            >
              {work ? month.name : ""}
            </div>

            <div
              className={styles.line}
              style={{
                opacity: 0,
              }}
            />
          </div>
          {month.index === 0 && (
            <span className={styles.year}>
              {endYear - Math.floor(index / 12)}
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default TimeLine;
