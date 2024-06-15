import React from "react";
import styles from "./styles/About.module.css";

const About = ({}) => {
  return (
    <div className={`container ${styles.container}`}>
      <h1>Welcome! </h1>
      <div className={styles.paragraph}>
        <p>
          Hi there! I am a passionate
          <span className={styles.span}> software developer</span>. While my
          main interest lies in
          <span className={styles.span}> frontend development</span>, I also
          have experience in{" "}
          <span className={styles.span}>backend development</span>.
        </p>
        <p>
          I originally studied Digital Business Management, but my career path
          took a turn during an internship, where I discovered my love for
          frontend development.
        </p>
        <p>
          Since then, I’ve gained valuable experience as a working student. To
          understand the entire system more deeply, I also completed a
          traineeship to deepen my knowledge of backend technologies. Now, I
          blend my skills to create seamless and
          <span className={styles.span}> dynamic web applications</span>
        </p>
        <p>Have fun browsing through my site! :)</p>
      </div>
    </div>
  );
};

export default About;
