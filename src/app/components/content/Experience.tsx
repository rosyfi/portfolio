import React from "react";
import styles from "./styles/Experience.module.css";

const Experience = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className="jobContainerLeft">
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Software Developer Trainee</h2>
          <div className="description">
            <li>
              Designing user interfaces for the new system by adapting the old
              system and creating mockups.
            </li>
            <li>
              Writing requirements tickets in Jira during development as part of
              an agile Scrum project.
            </li>
            <li>
              Designing and implementing a modular code architecture using the
              Domain-Driven Design approach for domain-oriented mapping.
            </li>
            <li>Business Analyst</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Rotation-Internship</h2>
          <div className="description">
            <li>
              Scrum-Master: Planning & conducting of dailies, plannings, reviews
              and retrospectives.
            </li>
            <li>
              Addressing the topics of sustainability & insurance as well as
              conducting a market analysis on the topics.
            </li>
            <li>
              Development of a conceptual solution according to design thinking
              methods
            </li>
            <li>Development of a suitable database</li>
            <li>
              Frontend implementation of the mobile web application with Angular
              & Ionic
            </li>
            <li>Frontend test implementation with Selenium</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>
            Digital Marketing Intern in a Start-Up
          </h2>
          <div className="description">
            <li>Coordination of the brand’s Instagram page</li>
            <li>Supporting the website creation of specific promotions</li>
            <li>
              Development of a conceptual solution according to design thinking
              methods
            </li>
            <li>
              Assisting the development and execution of marketing promotions
            </li>
            <li>Monthly newsletters and campaigns using MailChimp</li>
            <li>Assistance of daily tasks</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/walkie.png"
              alt="Walkie Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Fashion Design Intern</h2>
          <div className="description">
            <li>Experienced behind the scenes of a Fashion Week</li>
            <li>Closely worked with the design team</li>
            <li>Assisted in prototype preparation</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}> Mumbai, India</span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/vaishali.png"
              alt="Walkie Logo"
            />
          </div>
        </div>
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
        <div className={styles.month}>Sep</div>
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
        <div className={styles.month}>Sep</div>
        <div className={styles.month}>Aug</div>
        <div className={styles.month}>Jul</div>
        <div className={styles.month}>Jun</div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2022</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.month}>Sep</div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2021</h1>
        {Array.from({ length: 10 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2020</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.month}>Sep</div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2019</h1>
        {Array.from({ length: 6 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.month}>Jun</div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2018</h1>
        {Array.from({ length: 1 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.month}>Sep</div>
        <div className={styles.month}>Aug</div>
        <div className={styles.month}>Jul</div>
        <div className={styles.month}>Jun</div>
        {Array.from({ length: 5 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2017</h1>
        {Array.from({ length: 11 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2016</h1>
        {Array.from({ length: 12 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2015</h1>
      </div>
      <div className="jobContainerRight">
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Software Developer</h2>
          <div className="description">
            <li>Conceptualized and documented the design of the REST API</li>
            <li>
              Frequently communicated with the client to align on the REST APIs
            </li>
            <li>Implemented REST API</li>
            <li>
              Handled related business tasks, resolving issues that connected
              the technical and business sides
            </li>
            <li>
              Developed both business and technical knowledge to effectively
              serve as the interface between business analysts and software
              developers
            </li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Software Developer Working Student</h2>
          <div className="description">
            <li>
              Conception and design of user interface using Figma, including
              mock-ups and design concepts
            </li>
            <li>
              Frontend implementation of a web application with React &
              Bootstrap
            </li>
            <li>Development of a backend system using Spring Boot framework</li>
            <li>
              Implementation of a REST interface using an OpenAPI specification
            </li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Allrounder in the Backoffice</h2>
          <div className="description">
            <li>Assistance of daily tasks</li>
            <li>Handled accounting duties</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>
                {" "}
                Frankfurt am Main, Germany
              </span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
        <div className={styles.jobCard}>
          <h2 className={styles.title}>Administrative Assistant</h2>
          <div className="description">
            <li>Assisted with accounting and payroll</li>
            <li>Marketing</li>
            <li>Employee resources and customer service</li>
            <li>Learned point of sales systems</li>
          </div>
          <div className="location">
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}> Chicago, USA</span>
            </i>
          </div>
          <div className={styles.logo}>
            <img
              className={styles.adessoLogo}
              src="/logo/adesso.png"
              alt="Adesso Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
