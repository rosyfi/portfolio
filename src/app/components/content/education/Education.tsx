import React from "react";
import styles from "../../../styles/content/education/Education.module.css";
import Image from "next/image";

import education from "../data/Education";
import EducationCard from "./EducationCard";

const upperEducation = education.filter((e, index) => index % 2 !== 0);
const lowerEducation = education.filter((e, index) => index % 2 === 0);

const Education = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.educationContainerUp}>
        {upperEducation.map((e, i) => (
          <div className={styles.education} key={i}>
            <React.Fragment>
              <EducationCard
                degree={e.degree}
                school={e.school}
                location={e.location}
                time={e.time}
              />
              <Image
                width={39}
                height={39}
                src="/timeLinePointUp.svg"
                alt="timeLinePointUp"
              />
            </React.Fragment>
          </div>
        ))}
      </div>
      <div className={styles.timeLineContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Image
            key={index}
            width={"40"}
            height={"12"}
            src="/educationTimeLine.svg"
            alt="educationTimeLine"
            className={styles.timeLineDot}
          />
        ))}
      </div>
      <div className={styles.educationContainerDown}>
        {lowerEducation.map((e, i) => (
          <div className={styles.education} key={i}>
            <React.Fragment>
              <Image
                width={39}
                height={39}
                src="/timeLinePointDown.svg"
                alt="timeLinePointDown"
              />
              <EducationCard
                degree={e.degree}
                school={e.school}
                location={e.location}
                time={e.time}
              />
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
