import React from "react";
import styles from "./styles/WorkTimeLine.module.css";

type Month = {
  name: string;
  index: number;
};

const months: Month[] = [
  { name: "Jan", index: 0 },
  { name: "Feb", index: 1 },
  { name: "Mar", index: 2 },
  { name: "Apr", index: 3 },
  { name: "May", index: 4 },
  { name: "Jun", index: 5 },
  { name: "Jul", index: 6 },
  { name: "Aug", index: 7 },
  { name: "Sep", index: 8 },
  { name: "Oct", index: 9 },
  { name: "Nov", index: 10 },
  { name: "Dec", index: 11 },
];

/**
 * Return an array containing all month names in the given range inclusive start and end.
 * @param startYear
 * @param startMonth
 * @param endYear
 * @param endMonth
 * @returns
 */
const getMonthsInRange = (
  startYear: number,
  startMonth: string,
  endYear: number,
  endMonth: string
): Month[] => {
  const monthNamesBetween: Month[] = [];

  const startMonthIdx =
    months.find((month) => month.name === startMonth)?.index ?? 0;
  const endMonthIdx =
    months.find((month) => month.name === endMonth)?.index ?? 0;

  let monthsBetween = 0;
  monthsBetween = (endYear - startYear) * 12;
  monthsBetween -= startMonthIdx;
  monthsBetween += endMonthIdx;

  for (let i = 0; i <= monthsBetween; i++) {
    monthNamesBetween.push(months[(startMonthIdx + i) % months.length]);
  }

  return monthNamesBetween.reverse();
};

const WorkTimeline: React.FC<{
  startYear: number;
  startMonth: string;
  endYear: number;
  endMonth: string;
  left: boolean;
}> = ({ startYear, startMonth, endYear, endMonth, left }) => {
  const timeline = getMonthsInRange(startYear, startMonth, endYear, endMonth);

  return (
    <div
      className={styles.timeline}
      style={left ? {} : { alignItems: "flex-start" }}
    >
      {timeline.map(
        (month, index) =>
          ((index === 0 || index === timeline.length - 1) && (
            <div className={styles.timeline}>
              <div
                className={styles.lineContainer}
                style={left ? {} : { flexDirection: "row-reverse" }}
              >
                <div className={styles.line} />
                <div className={styles.monthContainer}>
                  <div className={styles.month}>{month.name}</div>
                </div>
              </div>
              {month.index === 0 && (
                <div className={styles.year}>
                  {endYear - Math.floor(index / 12)}
                </div>
              )}
            </div>
          )) || (
            <div key={index} className={styles.monthContainer}>
              <div className={styles.month}>{month.name}</div>
              {month.index === 0 && (
                <div className={styles.year}>
                  {endYear - Math.floor(index / 12)}
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default WorkTimeline;
