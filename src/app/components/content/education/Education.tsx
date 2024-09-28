import React from "react";
import styles from "../../../styles/content/education/Education.module.css";
import Image from "next/image";

//TODO: Componenten daraus machen, key prop hinzufügen

const Education = () => {
  return (
    <div className={`container col-11 ${styles.container}`}>
      <div className={styles.educationContainerUp}>
        <div className={styles.education}>
          <h2 className="degree">High School Diploma</h2>
          <div className="place">
            Max-Beckmann-Schule <br /> Frankfurt am Main, Germany
          </div>
          <h2 className={styles.time}>2014 - 2017</h2>
          <Image
            width={"39"}
            height={"89"}
            src="./timeLinePointDown.svg"
            alt="Time line point down"
            className="timeLinePointDown"
          />
        </div>
        <div className={styles.education}>
          <h2 className="degree">
            Semester abroad in <br /> South Korea
          </h2>
          <div className="place">
            Konkuk University <br /> Seoul, South Korea
          </div>
          <h2 className={styles.time}>
            August 2020 - <br /> December 2020
          </h2>
          <Image
            width={"39"}
            height={"89"}
            src="./timeLinePointDown.svg"
            alt="Time line point down"
            className="timeLinePointDown"
          />
        </div>
      </div>
      <div className={styles.timeLineContainer}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div className={styles.timeLine} key={i}></div>
        ))}
      </div>
      <div className={styles.educationContainerDown}>
        <div className={styles.education}>
          <Image
            width={"39"}
            height={"89"}
            src="./timeLinePointUp.svg"
            alt="Time line point up"
            className="timeLinePointUp"
          />
          <h2 className={styles.time}>2008 - 2014</h2>
          <h2 className="degree">Realschulabschluss</h2>
          <div className="place">
            Brüder-Grimm-Schule <br /> Frankfurt am Main, Germany
          </div>
        </div>
        <div className={styles.education}>
          <Image
            width={"39"}
            height={"89"}
            src="./timeLinePointUp.svg"
            alt="Time line point up"
            className="timeLinePointUp"
          />
          <h2 className={styles.time}>October 2018</h2>
          <h2 className="degree">
            Start of Bachelor in Digital Business Management
          </h2>
          <div className="place">
            Hochschule RheinMain <br /> Wiesbaden, Germany
          </div>
        </div>
        <div className={styles.education}>
          <Image
            width={"39"}
            height={"89"}
            src="./timeLinePointUp.svg"
            alt="Time line point up"
            className="timeLinePointUp"
          />
          <h2 className={styles.time}>March 2022</h2>
          <h2 className="degree">
            End of Bachelor in Digital Business Management
          </h2>
          <div className="place">
            Hochschule RheinMain <br /> Wiesbaden, Germany
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
