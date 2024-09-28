export interface JobCardType {
  title: string;
  details: string[];
  location: string;
  logo: string;
  startYear: number;
  startMonth: string;
  endYear: number;
  endMonth: string;
}

export type Month = {
  name: string;
  index: number;
};

export const months: Month[] = [
  { name: "Jan", index: 0 },
  { name: "Feb", index: 1 },
  { name: "Mar", index: 2 },
  { name: "Apr", index: 3 },
  { name: "May", index: 4 },
  { name: "Jun", index: 5 },
  { name: "Jul", index: 6 },
  { name: "Aug", index: 7 },
  { name: "Sep", index: 8 },
  { name: "Oct", index: 9 },
  { name: "Nov", index: 10 },
  { name: "Dec", index: 11 },
];

const cards: JobCardType[] = [
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
    logo: "adesso",
    startYear: 2023,
    startMonth: "Oct",
    endYear: 2024,
    endMonth: "Apr",
  },
  {
    title: "Software Developer Trainee",
    details: [
      "Designing user interfaces for the new system by adapting the old system and creating mockups.",
      "Writing requirements tickets in Jira during development as part of an agile Scrum project.",
      "Designing and implementing a modular code architecture using the Domain-Driven Design approach for domain-oriented mapping.",
      "Business Analyst",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "adesso",
    startYear: 2022,
    startMonth: "Sep",
    endYear: 2023,
    endMonth: "Sep",
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
    logo: "adesso",
    startYear: 2022,
    startMonth: "Mar",
    endYear: 2022,
    endMonth: "Aug",
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
    logo: "adesso",
    startYear: 2021,
    startMonth: "Sep",
    endYear: 2022,
    endMonth: "Feb",
  },
  {
    title: "Allrounder in the Backoffice",
    details: ["Assistance of daily tasks", "Handled accounting duties"],
    location: "Frankfurt am Main, Germany",
    logo: "integrationFactory",
    startYear: 2019,
    startMonth: "Sep",
    endYear: 2020,
    endMonth: "Feb",
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
    logo: "walkie",
    startYear: 2018,
    startMonth: "Jan",
    endYear: 2018,
    endMonth: "Jun",
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
    logo: "details",
    startYear: 2017,
    startMonth: "Jun",
    endYear: 2017,
    endMonth: "Nov",
  },
  {
    title: "Fashion Design Intern",
    details: [
      "Experienced behind the scenes of a Fashion Week",
      "Closely worked with the design team",
      "Assisted in prototype preparation",
    ],
    location: "Frankfurt am Main, Germany",
    logo: "vaishali",
    startYear: 2016,
    startMonth: "Jan",
    endYear: 2016,
    endMonth: "Jan",
  },
];

export default cards;
