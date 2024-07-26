import React from "react";
import styles from "../styles/experience/Timeline.module.css";

import { Month, months } from "../data/Experience";

interface TimelineProps {
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  work: boolean;
  left: boolean;
}

/**
 * Returns an array of months between two specified dates.
 *
 * @param startYear
 * @param startMonth
 * @param endYear
 * @param endMonth
 * @returns An array of `Month` objects representing each month in the range from `startMonth` to `endMonth`, inclusive.
 */
const getMonthsInRange = (
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
      {workTimeline.map((month, i) => (
        // TODO: Hier muss key={i} vergeben werden aber daadurch werden die lines nicht angezeigt?!?!?!
        <>
          <div
            className={styles.timelineContent}
            style={{
              flexDirection: left ? "row" : "row-reverse",
            }}
          >
            <div
              className={styles.line}
              style={{
                opacity:
                  (i === 0 || i === workTimeline.length - 1) && work ? 1 : 0,
              }}
            />
            <div
              className={styles.month}
              style={{
                backgroundColor: work
                  ? "rgba(96, 108, 56)"
                  : "rgb(233, 237, 201)",
              }}
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
            <h2 className={styles.year}>{endYear - Math.floor(i / 12)}</h2>
          )}
        </>
      ))}
    </div>
  );
};

export default TimeLine;
