interface EducationCard {
  degree: string;
  school: string;
  location: string;
  time: string;
}

const education: EducationCard[] = [
  {
    degree: "Realschulabschluss",
    school: "Brüder-Grimm-Schule",
    location: "Frankfurt am Main, Germany",
    time: "Sep 2008 - Jul 2014",
  },
  {
    degree: "High School Diploma",
    school: "Max-Beckmann-Schule",
    location: "Frankfurt am Main, Germany",
    time: "Sep 2014 - Jul 2017",
  },
  {
    degree: "Start of Bachelor in Digital Business Management",
    school: "Hochschule RheinMain",
    location: "Wiesbaden, Germany",
    time: "Oct 2018",
  },
  {
    degree: "Semester abroad",
    school: "Konkuk University",
    location: "Seoul, South Korea",
    time: "Aug 2020 - Dec 2020",
  },
  {
    degree: "End of Bachelor in Digital Business Management",
    school: "Hochschule RheinMain",
    location: "Wiesbaden, Germany",
    time: "Mar 2022",
  },
];

export default education;
