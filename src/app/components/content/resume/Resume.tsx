import React from "react";
import styles from "../../../styles/content/resume/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="/portfolio/pdf/CV_Rossella_Filocomo.pdf"
        width="100%"
        height="600px"
      />
      <a href="/portfolio/pdf/CV_Rossella_Filocomo.pdf" download>
        <button className={styles.button}>
          <i className="bi bi-download"> Download Rossella{"'"}s CV (780 KB)</i>
        </button>
      </a>
    </div>
  );
};

export default Resume;
