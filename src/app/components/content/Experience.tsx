import React, { useEffect } from "react";
import styles from "./styles/Experience.module.css";
import JobCard from "../JobCard";
import cards, { JobCardType, months } from "./data/Experience";
import TimeLine from "../Timeline";

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
    console.log(endMonthRes, endYearRes, currJobStartMonth);

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
  console.log(prevJobEndMonthIdx);
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
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Trigger once on initial load

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div className={`container ${styles.container}`}>
      {cards.map((card, i) => (
        <>
          <div
            className={styles.timeLineItems}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div
              className={`${styles.fadeIn} ${
                i % 2 == 0 ? styles.fadeInLeft : styles.fadeInRight
              } ${styles.jobCard}`}
            >
              <JobCard
                key={i}
                title={card.title}
                details={card.details}
                location={card.location}
                logo={card.logo}
              />
            </div>
            <div className={styles.timeline}>
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
        </>
      ))}
    </div>
  );
};

export default Experience;
