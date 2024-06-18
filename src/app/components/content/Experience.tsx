import React from "react";
import styles from "./styles/Experience.module.css";
import TimeLine from "./TimeLine";
import { Card } from "./types/Card";

const cardsLeft: Card[] = [
  {
    title: "Software Developer Trainee",
    details: [
      "Designing user interfaces for the new system by adapting the old system and creating mockups.",
      "Writing requirements tickets in Jira during development as part of an agile Scrum project.",
      "Designing and implementing a modular code architecture using the Domain-Driven Design approach for domain-oriented mapping.",
      "Business Analyst",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    marginTop: "1000px",
  },
  {
    title: "Rotation-Internship",
    details: [
      "Scrum-Master: Planning & conducting of dailies, plannings, reviews and retrospectives. ",
      "Addressing the topics of sustainability & insurance as well as conducting a market analysis on the topics.",
      "Development of a conceptual solution according to design thinking methods",
      "Development of a suitable database",
      "Frontend implementation of the mobile web application with Angular & Ionic",
      "Frontend test implementation with Selenium",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    marginTop: "350px",
  },
  {
    title: "Digital Marketing Intern in a Start-Up",
    details: [
      "Coordination of the brand’s Instagram page",
      "Supporting the website creation of specific promotions",
      "Assisting the development and execution of marketing promotions",
      "Monthly newsletters and campaigns using MailChimp",
      "Assistance of daily tasks",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/walkie.png",
    marginTop: "350px",
  },
  {
    title: "Fashion Design Intern",
    details: [
      "Experienced behind the scenes of a Fashion Week",
      "Closely worked with the design team",
      "Assisted in prototype preparation",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/vaishali.png",
    marginTop: "350px",
  },
];
const cardsRight: Card[] = [
  {
    title: "Software Developer Consultant",
    details: [
      "Conceptualized and documented the design of the REST API",
      "Frequently communicated with the client to align on the REST APIs",
      "Implemented the REST API",
      "Handled related business tasks, resolving issues that connected the technical and business sides",
      "Developed both business and technical knowledge to effectively serve as the interface between business analysts and software developers",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    marginTop: "350px",
  },
  {
    title: "Software Developer Working Student",
    details: [
      "Conception and design of user interface using Figma, including mock-ups and design concepts",
      "Frontend implementation of a web application with React & Bootstrap ",
      "Development of a backend system using Spring Boot framework ",
      "Implementation of a REST interface using an OpenAPI specification",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    marginTop: "800px",
  },
  {
    title: "Allrounder in the Backoffice",
    details: ["Assistance of daily tasks", "Handled accounting duties"],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    marginTop: "800px",
  },
  {
    title: "Administrative Assistant",
    details: [
      "Assisted with accounting and payroll ",
      "Marketing",
      "Employee resources and customer service",
      "Learned point of sales systems",
    ],
    location: "Chicago, USA",
    logo: "/logo/adesso.png",
    marginTop: "800px",
  },
];

const Experience = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className="jobContainerLeft">
        <TimeLine cards={cardsLeft} />
      </div>
      <div className={styles.timeLineContainer}>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Apr</div>
          <div className={styles.test} />
        </div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2024</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Oct</div>
          <div className={styles.test} />
        </div>
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Sep</div>
          <div className={styles.test3} />
        </div>
        <div className={styles.month}>Aug</div>
        <div className={styles.month}>Jul</div>
        <div className={styles.month}>Jun</div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2023</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Sep</div>
          <div className={styles.test3} />
        </div>
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Aug</div>
          <div className={styles.test} />
        </div>
        <div className={styles.month}>Jul</div>
        <div className={styles.month}>Jun</div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Mar</div>
          <div className={styles.test} />
        </div>
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Feb</div>
          <div className={styles.test3} />
        </div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2022</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Sep</div>
          <div className={styles.test3} />
        </div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2021</h1>
        {Array.from({ length: 10 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Feb</div>
          <div className={styles.test} />
        </div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2020</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Sep</div>
          <div className={styles.test} />
        </div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2019</h1>
        {Array.from({ length: 6 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Jun</div>
          <div className={styles.test3} />
        </div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Jan</div>
          <div className={styles.test3} />
        </div>
        <h1 className={styles.year}>2018</h1>
        {Array.from({ length: 1 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Nov</div>
          <div className={styles.test} />
        </div>
        <div className={styles.month}>Oct</div>
        <div className={styles.month}>Sep</div>
        <div className={styles.month}>Aug</div>
        <div className={styles.month}>Jul</div>
        <div className={styles.test2}>
          <div className={styles.test3} />
          <div className={styles.month}>Jun</div>
          <div className={styles.test} />
        </div>
        {Array.from({ length: 5 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2017</h1>
        {Array.from({ length: 11 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.test2}>
          <div className={styles.test} />
          <div className={styles.month}>Jan</div>
          <div className={styles.test3} />
        </div>
        <h1 className={styles.year}>2016</h1>
        {Array.from({ length: 12 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2015</h1>
      </div>
      <div className="jobContainerRight">
        <TimeLine cards={cardsRight} />
      </div>
    </div>
  );
};

export default Experience;
