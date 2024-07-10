interface JobCard {
  title: string;
  details: string[];
  location: string;
  logo: string;
  startYear: number;
  startMonth: string;
  endYear: number;
  endMonth: string;
}

const cardsLeft: JobCard[] = [
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
    startYear: 2022,
    startMonth: "Sep",
    endYear: 2023,
    endMonth: "Sep",
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
    startYear: 2021,
    startMonth: "Sep",
    endYear: 2022,
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
    logo: "/logo/walkie.png",
    startYear: 2018,
    startMonth: "Jan",
    endYear: 2018,
    endMonth: "Jun",
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
    startYear: 2016,
    startMonth: "Jan",
    endYear: 2016,
    endMonth: "Jan",
  },
];
const cardsRight: JobCard[] = [
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
    startYear: 2023,
    startMonth: "Sep",
    endYear: 2024,
    endMonth: "Apr",
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
    startYear: 2022,
    startMonth: "Mar",
    endYear: 2022,
    endMonth: "Sep",
  },
  {
    title: "Allrounder in the Backoffice",
    details: ["Assistance of daily tasks", "Handled accounting duties"],
    location: "Frankfurt am Main, Germany",
    logo: "/logo/adesso.png",
    startYear: 2019,
    startMonth: "Sep",
    endYear: 2020,
    endMonth: "Jan",
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
    startYear: 2017,
    startMonth: "Jun",
    endYear: 2017,
    endMonth: "Nov",
  },
];

export { cardsLeft, cardsRight };
