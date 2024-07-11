import React from "react";
import styles from "./styles/Experience.module.css";
import JobCard from "../JobCard";
import cards, { JobCardType, months } from "./data/Experience";
import TimeLine from "../Timeline";

const timelineUntillNextJob = (currentJob: JobCardType, index: number) => {
  const prevJob = cards[index + 1];
  if (!prevJob) return <></>;

  const currJobStartMonth = currentJob.startMonth;
  const currJobStartYear = currentJob.startYear;
  const prevJobEndMonth = prevJob.endMonth;
  const prevJobEndYear = prevJob.endYear;

  const currentJobStartMonthIdx =
    months.find((month) => month.name === currJobStartMonth)?.index ?? 0;

  const prevJobEndMonthIdx =
    months.find((month) => month.name === prevJobEndMonth)?.index ?? 0;
  console.log(prevJobEndMonthIdx);
  let startMonthRes =
    months.find((month) => month.index === (prevJobEndMonthIdx + 1) % 12)
      ?.name ?? "Tactical Nuke incoming!";
  let startYearRes = prevJobEndYear;
  let endMonthRes =
    months.find((month) => month.index === (currentJobStartMonthIdx - 1) % 12)
      ?.name ?? "Tactical Nuke incoming!";
  let endYearRes = currJobStartYear;

  if (prevJobEndMonthIdx === 11) {
    startMonthRes = months[0].name;
    startYearRes = currJobStartYear + 1;
  }

  if (currentJobStartMonthIdx === 0) {
    endMonthRes = months[11].name;
    endYearRes = currJobStartYear - 1;
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
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.test2}>
        {cards.map((card, i) => (
          <div
            className={styles.timeLineItem}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className={styles.jobCard}>
              <JobCard
                key={i}
                title={card.title}
                details={card.details}
                location={card.location}
                logo={card.logo}
              />
            </div>
            <div className={styles.centerTimeline}>
              <TimeLine
                startMonth={card.startMonth}
                startYear={card.startYear}
                endMonth={card.endMonth}
                endYear={card.endYear}
                work={true}
                left={i % 2 === 0}
              />
              {timelineUntillNextJob(card, i)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
