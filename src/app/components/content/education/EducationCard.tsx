import React from "react";
import styles from "../../../styles/content/education/EducationCard.module.css";
import Image from "next/image";

interface EducationCardProps {
  degree: string;
  school: string;
  location: string;
  time: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  school,
  location,
  time,
}) => {
  return (
    <div className={styles.container}>
      <h2 className="degree">{degree}</h2>
      <p className="place" style={{ fontStyle: "italic" }}>
        {school}
        <br />
        {location}
      </p>
      <h5 className={styles.time}>{time}</h5>
    </div>
  );
};

export default EducationCard;
