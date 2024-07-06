interface SoftSkill {
  title: string;
  description: string;
  specifics: {
    tasks: string[];
    impression: string;
    keyTakeaway: string;
    svg: string;
    place: string;
  }[];
}

interface SoftSkills {
  [key: string]: SoftSkill;
}

const softSkills: SoftSkills = {
  teamworking: {
    title: "Teamworking",
    description:
      "I work well in team settings, using my communication and collaboration skills to create a positive and productive environment. While I enjoy working independently as a software developer, I also like working with others to achieve shared goals, exchange ideas, and find the best solutions. Known for my reliability, I actively engage with my colleagues.",
    specifics: [
      {
        tasks: [
          "Coming up with a website idea",
          "Implementing the website",
          "Clarifying team roles",
          "Conducting meetings",
        ],
        impression:
          "It turned out to be the worst team experience ever due to the team's unreliability.",
        keyTakeaway: "Accountability",
        svg: "university",
        place: "University",
      },
      {
        tasks: [
          "Gaining insights into typical roles of a software project",
          "Analyzing sustainable markets in insurances",
          "Generating a mobile web application idea, implementing it, and conducting testing",
        ],
        impression:
          "It was the ultimate team synergy! Our diverse group, comprising both programmers and business analysts, created the best collaborative experience ever. Everyone benefited from each other's expertise, fostering a culture of mutual learning and growth.",
        keyTakeaway: "Kindness",
        svg: "internship",
        place: "Internship",
      },
      {
        tasks: [
          "Gaining insights into first client project",
          "Understanding clients business and needs",
        ],
        impression:
          "Harmonious teamwork facilitates the exchange of valuable insights, allowing members to learn from professionals. In such environments, juniors glean knowledge and wisdom from their more experienced colleagues.",
        keyTakeaway: "Curiosity",
        svg: "work",
        place: "Work",
      },
    ],
  },
  communication: {
    title: "Communication",
    description:
      "I excel in communication, employing active listening and a persistent curiosity. I'm not afraid to ask questions, even multiple times, to ensure thorough understanding. While this may seem annoying to some, I see it as essential for clarity and effective collaboration.",
    specifics: [
      {
        tasks: ["Taking notes during lectures"],
        impression:
          "Taking notes during conversations has helped me improve my active listening skills by ensuring I capture key points and stay engaged.",
        keyTakeaway: "Active listening",
        svg: "university",
        place: "University",
      },
      {
        tasks: ["Scrum Reviews", "Presentation", "Elevator pitch"],
        impression:
          "Improving my presentation skills was a big hurdle as a software developer, pushing me out of my comfort zone. But tackling this challenge was crucial for my personal and professional development.",
        keyTakeaway: "Presentation skills",
        svg: "internship",
        place: "Internship",
      },
      {
        tasks: [
          "Analyzing and understanding clients business requirements",
          "Identifying optimal project solutions tailored to both project goals and client needs",
          "Generating technical concepts for high-quality software solutions",
        ],
        impression:
          "Understanding complex insurance topics required both business and technical knowledge, so I often turned to senior colleagues for guidance, sometimes asking the same questions multiple times in my eagerness to comprehend.",
        keyTakeaway: "Verbal communication",
        svg: "work",
        place: "Work",
      },
    ],
  },
  timeManagement: {
    title: "Time Management ",
    description:
      "I prefer to focus on one task at a time and make sure I finish it before moving on. By organizing my work and staying focused, I get things done efficiently and on time.",
    specifics: [
      {
        tasks: [
          "Planning study sessions",
          "Learning consistently over time and avoiding cramming the day before a test",
        ],
        impression:
          "I find joy in creating to-do lists as they allow me to plan ahead, alleviating any potential stress and providing me with a sense of peace. Having everything organized beforehand brings a comforting sense of control to my day-to-day life.",
        keyTakeaway: "Planning",
        svg: "university",
        place: "University",
      },
      {
        tasks: ["Sprints"],
        impression:
          "Working in sprints for the first time greatly simplified task management, offering a clear and efficient overview of upcoming tasks. It provided an easy-to-follow structure, enhancing productivity and organization within the team.",
        keyTakeaway: "Goal-setting",
        svg: "internship",
        place: "Internship",
      },
      {
        tasks: ["Understanding both business and technical knowledge"],
        impression:
          "Being the bridge between both worlds in a small team was stressful initially, but it taught me the importance of balancing and distinguishing between business and technical aspects. I learned to focus on one aspect at a time while always considering the perspective of the other side.",
        keyTakeaway: "Verbal communication",
        svg: "work",
        place: "Work",
      },
    ],
  },
  decisionMaking: {
    title: "Decision Making",
    description:
      "When I encounter challenges or opportunities, I carefully assess the situation and choose the best option based on the available information.",
    specifics: [
      {
        tasks: ["Deciding on technical tools to work with"],
        impression:
          "For deciding which tools to use, we first analyzed and researched the pros and cons of each option. This thorough evaluation made the decision-making process much easier.",
        keyTakeaway: "Evaluation",
        svg: "internship",
        place: "Internship",
      },
      {
        tasks: ["Creating Mockups", "Describing REST API"],
        impression:
          "At the beginning, I felt insecure about decision-making because I was unsure what the right choices were. However, by asking the right questions, the process became easier, and I realized I just needed to take action.",
        keyTakeaway: "Just Do It",
        svg: "work",
        place: "Work",
      },
    ],
  },
  creativity: {
    title: "Creativity",
    description:
      "I look at problems in new ways, always trying to find different and creative solutions. Whether it's designing interfaces, brainstorming new features, or optimizing workflows, I rely on my creative approach to deliver the best results.",
    specifics: [
      {
        tasks: ["Applying Design Thinking Methods"],
        impression:
          "Learning about Design Thinking Methods and putting them into practice has been eye-opening. It's an easy way to come up with innovative solutions by prioritizing user needs and testing ideas iteratively.",
        keyTakeaway: "Brainstorming",
        svg: "internship",
        place: "Internship",
      },
    ],
  },
};

export default softSkills;
