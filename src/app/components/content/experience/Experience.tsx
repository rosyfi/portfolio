import React, { useEffect } from "react";
import styles from "../../../styles/content/experience/Experience.module.css";
import JobCard from "./JobCard";
import TimeLine from "./Timeline";

import cards, { JobCardType, months } from "../data/Experience";

/**
 * Generates a timeline component for the period between the current job and the next job.
 *
 * @param currentJob
 * @param index
 * @returns A `TimeLine` component representing the period from the end of the previous job (or the start of the current job if no previous job exists) to the start of the current job.
 */
const timelineUntillNextJob = (currentJob: JobCardType, index: number) => {
  const prevJob = cards[index + 1];

  const currJobStartMonth = currentJob.startMonth;
  const currJobStartYear = currentJob.startYear;
  const currentJobStartMonthIdx =
    months.find((month) => month.name === currJobStartMonth)?.index ?? 0;

  let endMonthRes =
    months.find(
      (month) =>
        month.index === (((currentJobStartMonthIdx - 1) % 12) + 12) % 12
    )?.name ?? "Tactical Nuke incoming!";
  let endYearRes = currJobStartYear;

  if (currentJobStartMonthIdx === 0) {
    endMonthRes = months[11].name;
    endYearRes = currJobStartYear - 1;
  }

  if (!prevJob) {
    return (
      <TimeLine
        work={false}
        left={false}
        endMonth={endMonthRes}
        endYear={endYearRes}
        startMonth={"Jan"}
        startYear={currJobStartYear - 1}
      />
    );
  }
  const prevJobEndMonth = prevJob.endMonth;
  const prevJobEndYear = prevJob.endYear;

  const prevJobEndMonthIdx =
    months.find((month) => month.name === prevJobEndMonth)?.index ?? 0;
  let startMonthRes =
    months.find((month) => month.index === (prevJobEndMonthIdx + 1) % 12)
      ?.name ?? "Tactical Nuke incoming!";
  let startYearRes = prevJobEndYear;

  if (prevJobEndMonthIdx === 11) {
    startMonthRes = months[0].name;
    startYearRes = currJobStartYear + 1;
  }

  return (
    <TimeLine
      work={false}
      left={false}
      startMonth={startMonthRes}
      startYear={startYearRes}
      endMonth={endMonthRes}
      endYear={endYearRes}
    />
  );
};

const Experience = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.fadeIn}`);

    const checkVisibility = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom > 0) {
          element.classList.add(styles.visible);
        }
      });
    };

    const scrollContainer = document.getElementById(
      "experienceScrollContainer"
    );
    if (!scrollContainer) return;

    scrollContainer.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div
      className={`container col-11 ${styles.container}`}
      id="experienceScrollContainer"
    >
      {cards.map((card, i) => (
        <div className={styles.cardsContent} key={i}>
          <div
            className={styles.cardsLayout}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div
              className={`${styles.fadeIn} ${
                i % 2 == 0 ? styles.fadeInLeft : styles.fadeInRight
              } ${styles.jobCardWrapper}`}
            >
              <JobCard
                key={i}
                title={card.title}
                details={card.details}
                location={card.location}
                logo={card.logo}
              />
            </div>
            <div className={styles.timelineWrapper}>
              <TimeLine
                startMonth={card.startMonth}
                startYear={card.startYear}
                endMonth={card.endMonth}
                endYear={card.endYear}
                work={true}
                left={i % 2 === 0}
              />
            </div>
          </div>
          {timelineUntillNextJob(card, i)}
        </div>
      ))}
    </div>
  );
};

export default Experience;
