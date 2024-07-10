import React from "react";
import styles from "./styles/Experience.module.css";
import JobCard from "../JobCard";

import { cardsLeft, cardsRight } from "./data/Experience";

const Experience = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.cardsLeftContainer}>
        {Object.keys(cardsLeft).map((key: string, index: number) => (
          <JobCard
            title={cardsLeft[index].title}
            details={cardsLeft[index].details}
            location={cardsLeft[index].location}
            logo={cardsLeft[index].logo}
            key={key}
          />
        ))}
      </div>

      <div className={styles.timeLineContainer}>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Apr</div>
          <div className={styles.line} />
        </div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2024</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Oct</div>
          <div className={styles.line} />
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Sep</div>
          <div className={styles.space} />
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
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Sep</div>
          <div className={styles.space} />
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Aug</div>
          <div className={styles.line} />
        </div>
        <div className={styles.month}>Jul</div>
        <div className={styles.month}>Jun</div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Mar</div>
          <div className={styles.line} />
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Feb</div>
          <div className={styles.space} />
        </div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2022</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Sep</div>
          <div className={styles.space} />
        </div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2021</h1>
        {Array.from({ length: 10 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Feb</div>
          <div className={styles.line} />
        </div>
        <div className={styles.month}>Jan</div>
        <h1 className={styles.year}>2020</h1>
        <div className={styles.month}>Dez</div>
        <div className={styles.month}>Nov</div>
        <div className={styles.month}>Oct</div>
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Sep</div>
          <div className={styles.line} />
        </div>
        {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2019</h1>
        {Array.from({ length: 6 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Jun</div>
          <div className={styles.space} />
        </div>
        <div className={styles.month}>Mai</div>
        <div className={styles.month}>Apr</div>
        <div className={styles.month}>Mar</div>
        <div className={styles.month}>Feb</div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Jan</div>
          <div className={styles.space} />
        </div>
        <h1 className={styles.year}>2018</h1>
        {Array.from({ length: 1 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Nov</div>
          <div className={styles.line} />
        </div>
        <div className={styles.month}>Oct</div>
        <div className={styles.month}>Sep</div>
        <div className={styles.month}>Aug</div>
        <div className={styles.month}>Jul</div>
        <div className={styles.lineContainer}>
          <div className={styles.space} />
          <div className={styles.month}>Jun</div>
          <div className={styles.line} />
        </div>
        {Array.from({ length: 5 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2017</h1>
        {Array.from({ length: 11 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <div className={styles.lineContainer}>
          <div className={styles.line} />
          <div className={styles.month}>Jan</div>
          <div className={styles.space} />
        </div>
        <h1 className={styles.year}>2016</h1>
        {Array.from({ length: 12 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))}
        <h1 className={styles.year}>2015</h1>
      </div>
      <div className={styles.cardsRightContainer}>
        {Object.keys(cardsRight).map((key: string, index: number) => (
          <JobCard
            title={cardsRight[index].title}
            details={cardsRight[index].details}
            location={cardsRight[index].location}
            logo={cardsRight[index].logo}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
