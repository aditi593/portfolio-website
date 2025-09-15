import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
   {
    name: "Education",
    hash: "#education",
  },
   {
    name: "Certifications",
    hash: "#certifications",
  },
   {
    name: "Accolades",
    hash: "#accolades",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;




export const experiencesData = [
  {
    title: "Analytics Representative",
    company: "Arizona State University",
    companyUrl: "https://engineering.asu.edu/",
    location: "Tempe, AZ, USA",
    date: "Feb 2025 – Present",
    logo: "/logos/asu.png",
    points: [
      "Analyze applicant trends and maintain admissions analytics using Python, SQL, and Tableau.",
      "Develop interactive dashboards to visualize key KPIs and support recruitment decisions."
    ]
  },
  {
    title: "Software Engineer",
    company: "FIS Global",
    companyUrl: "https://www.fisglobal.com/",
    location: "Pune, India",
    date: "Jun 2022 – Aug 2024",
    logo: "/logos/fis-lg.png",
    points: [
      "Enhanced the FIS Performance Measurement Manager product with Java/React features, boosting user experience by 80% across 50+ pages.",
      "Optimized SQL stored procedures improving data accuracy by 15% and query time by 30%.",
      "Resolved 1500+ Checkmarx security vulnerabilities and eliminated 90% of Black Duck risks using Java, CSS, and secure-coding best practices.",
      "Automated CI/CD deployments with Jenkins, cutting release times by 40%."
    ]
  },
  {
    title: "Programmer Analyst Intern",
    company: "Cognizant",
    companyUrl: "https://www.cognizant.com/",
    location: "Pune, India",
    date: "Mar 2022 – Jun 2022",
    logo: "/logos/download.png",
    points: [
      "Developed interactive Tableau dashboards to visualize customer KPIs, increasing engagement by 12%.",
      "Automated SQL queries and advanced Excel macros, improving data processing efficiency and accuracy by 30%.",
      "Created reusable Python scripts for data cleaning and ETL tasks to accelerate reporting cycles."
    ]
  },
  {
    title: "Deep Learning Intern",
    company: "National Institute of Electronics & Information Technology (NIELIT)",
    companyUrl: "https://www.nielit.gov.in/",
    location: "India (Remote)",
    date: "May 2021 – Jul 2021",
    logo: "/logos/nielit_india_logo.jpeg",
    points: [
      "Developed object detection modules using TensorFlow, Keras, and OpenCV.",
      "Implemented CNN for feature extraction and RNN/LSTM for sequence modeling with Python.",
      "Visualized model performance using Matplotlib and optimized hyper-parameters for improved generalization."
    ]
  },
  {
    title: "Co-Secretary",
    company: "PCCOE ACM Student Chapter",
    companyUrl: "https://pccoe.acm.org/",
    location: "Pune, India",
    date: "Aug 2020 – May 2021",
    logo: "/logos/pccoe_acm.png",
    points: [
      "Coordinated national-level technical events (footfall 1000+) and managed participant data using SQL and Python scripts.",
      "Led a 20+ member team to organize hackathons and machine-learning workshops."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "National Engineering & Science Olympiad",
    companyUrl: "https://www.neofoundation.org/",
    location: "Remote",
    date: "Feb 2021 – Apr 2021",
    logo: "/logos/neo.png",
    points: [
      "Promoted data-science competitions to 500+ students and maintained outreach analytics with Google Sheets and Python."
    ]
  }
] as const;




// --------- PROJECTS -----------
export const projectsData = [
  {
    title: "Natural Language to SQL Copilot",
    description:
      "Natural language → SQL conversion with Streamlit UI and FastAPI backend using a fine-tuned T5 transformer.",
    tags: ["Python", "Streamlit", "FastAPI", "SQL", "GNN"],
    githubUrl: "https://github.com/aditi593/Natural-Language-to-SQL-Copilot",
    imageUrl: "/projects/screenshot2.png",       // ✅ add image to /public/projects/
  },
  {
    title: "Hand Sanitizer & Mask Detector",
    description:
      "Hardware-software system for mask detection and automated sanitizer dispensing using CNN and Arduino.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    githubUrl:
      "https://github.com/aditi593/Automated-Hand-Sanitizer-and-Mask-Detector-Model",
    imageUrl: "/projects/dashboard.png",
  },
  {
    title: "Hostel Management Website",
    description:
      "Full-stack app to manage hostel operations with secure authentication and scalable MongoDB backend.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    githubUrl: "https://github.com/aditi593/hostelmanagement",
    imageUrl: "/projects/hostel_mgmt.png",
  },
  {
    title: "Object Detection using CNN",
    description:
      "Deep learning model for multi-class image classification on CIFAR-10 achieving 85% accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy"],
    githubUrl: "https://github.com/aditi593/Project-deep-learning",
    imageUrl: "/projects/object_cnn.png",
  },
] as const;


export const skillsData = {
  Development: [
    "Python",
    "R",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML/CSS",
    "SQL",
    "MySQL",
  ],
  Tools: [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "OpenCV",
    "Tableau",
    "Power BI",
    "DBeaver",
    "Black Duck",
    "Veracode",
  ],
  Databases: [
    "MongoDB",
    "MySQL",
    "SQL",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Docker",
    "Jenkins",
    "Git",
  ],
} as const;
export const accoladesData = [
  {
    title: "New American University Scholar",
    imageUrl: "/logos/asu.png",
  },
  {
    title: "Star Award",
    imageUrl: "/accolades/star_award.png",
  },
  {
    title: "Kudos Award",
    imageUrl: "/accolades/kudos_award.png",
  },
  {
    title: "Hackathon ANANTYA 2022 – 2nd Place",
    imageUrl: "/logos/pccoe_acm.png",
  },
  {
    title: "Certificate of Merit",
    imageUrl: "/accolades/certificate_merit.jpeg",
  },
] as const;
// ---------- LICENSES & CERTIFICATIONS ----------
export const certificationsData = [
  {
    title: "Computer Communications Specialization",
    url: "https://www.coursera.org/account/accomplishments/certificate/T59L5346ES5C"
  },
  {
    title: "Complete Python Bootcamp: From Zero to Hero in Python",
    url: "https://www.udemy.com/certificate/UC-e560fe00-a802-40db-97c6-0e574552879f"
  },
  {
    title: "Applied Plotting, Charting & Data Representation in Python",
    url: "https://www.coursera.org/account/accomplishments/certificate/9C9YYX2S4DQ5"
  },
  {
    title: "Deep Learning using Python – NIELIT",
    url: "https://drive.google.com/file/d/14HdQQqFxL3z050VGRzuBK_PweMJicgMi/view?usp=sharing" // add actual credential link if available
  }
] as const;

// ---------- EDUCATION ----------
export const educationData = [
  {
    school: "Arizona State University",
    logo: "/logos/asu.png",
    degree: "Master’s in Data Science",
    period: "Aug 2024 – May 2026",
    grade: "GPA: 3.61",
    courses: [
      "Statistics for Data Analysts",
      "Statistical Machine Learning",
      "Advanced Database Management Systems",
      "Data Analysis & Visualization in R"
    ]
  },
  {
    school: "Savitribai Phule Pune University",
    logo: "/logos/pccoe.png",
    degree: "Bachelor’s in Computer Science",
    period: "Aug 2018 – Jun 2022",
    grade: "GPA: 8.91",
    courses: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Cloud Computing"
    ]
  }
] as const;

