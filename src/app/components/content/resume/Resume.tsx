import React from "react";
import styles from "../../../styles/content/resume/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.container}>
      <iframe src="/pdf/Rossella_Filocomo_CV.pdf" width="100%" height="600px" />
      <a href="/pdf/Rossella_Filocomo_CV.pdf" download>
        <button className={styles.button}>
          <i className="bi bi-download"> Download Rossella{"'"}s CV (127 KB)</i>
        </button>
      </a>
    </div>
  );
};

export default Resume;
