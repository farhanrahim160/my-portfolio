export const personalInfo = {
  name: "Farhan Rahim",
  title: "Frontend Developer",
  tagline: "I build clean, responsive web experiences with React.",
  location: "Rawalpindi, Pakistan",
  email: "farhanrahim160@gmail.com",
  phone: "03498232536",
  linkedin: "https://linkedin.com/in/farhan-rahim-423b8a260",
  github: "https://github.com/farhanrahim160",
  bio: "Frontend developer and recent Software Engineering graduate with hands-on experience building responsive, user-focused web applications."
};

export const skills = [
  { category: "HTML & CSS", level: 90 },
  { category: "JavaScript", level: 80 },
  { category: "React.js", level: 85 },
  { category: "Tailwind CSS", level: 82 },
  { category: "Git & GitHub", level: 75 },
  { category: "Responsive Design", level: 88 }
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Uexel Pakistan",
    duration: "6-Month Internship",
    points: [
      "Developed and maintained responsive, cross-browser user interfaces using HTML, CSS, and JavaScript.",
      "Built interactive UI components with React.js to improve usability and overall user experience.",
      "Collaborated with designers and senior developers to translate UI/UX designs into functional web pages.",
      "Used Git and GitHub for version control, code collaboration, and issue tracking within a team environment.",
      "Assisted in debugging, testing, and optimizing web applications for performance and responsiveness."
    ]
  }
];

export const projects = [
  {
    slug: "serenity-care",
    title: "Serenity Care",
    subtitle: "AI-Powered Mental Wellness System for Depression & Anxiety",
    description: "A final year project delivering a full patient-and-doctor ecosystem for mental health care - AI-assisted screening, mood tracking, CBT exercises, and crisis alerts.",
    tech: ["React.js", "Node.js", "Python (AI Models)", "Tailwind CSS"],
    link: "",
    repo: "",
    image: "/projects/serenity/dashboard.png",
    gallery: [
      { src: "/projects/serenity/login.png", caption: "Login and role-based access for patients, psychiatrists, and admins" },
      { src: "/projects/serenity/dashboard.png", caption: "Patient dashboard with profile, quick actions, and health summary" },
      { src: "/projects/serenity/mood-tracker.png", caption: "Daily mood tracking with streaks, weekly trends, and journaling" },
      { src: "/projects/serenity/cbt-hub.png", caption: "CBT Therapy Hub offering guided, evidence-based exercises" },
      { src: "/projects/serenity/ai-chatbot.png", caption: "AI support assistant for round-the-clock conversational check-ins" },
      { src: "/projects/serenity/progress-dashboard.png", caption: "Therapy progress analytics tracking mood, journaling, and CBT completion" }
    ],
    team: "Final Year Project - BS Software Engineering, SZABIST Islamabad. Built with 2 teammates (Muskan Awan, Ali Ashad) under the supervision of Mr. Muhammad Usman Ali.",
    problem: "Depression and anxiety are among the most common yet least addressed mental health issues in Pakistan. Psychiatrists are scarce, treatment is costly, and existing software like GenPro or TherapyNotes focuses on generic clinical management rather than psychiatry-specific tools such as mood tracking, journaling, or AI-assisted screening. Patients typically see a doctor once a month and are left unsupported the rest of the time, while physicians face heavy caseloads with little help prioritizing at-risk patients.",
    approach: "Our team designed SerenityCare as a full patient-and-doctor ecosystem covering twelve integrated modules - secure authentication and onboarding, patient profiles and medical history, AI-powered depression and anxiety detection, mood tracking and journaling, CBT-based therapy exercises, an AI support chatbot, appointment scheduling, crisis alert and emergency intervention, therapy progress analytics, digital prescriptions, a group therapy hub, and an admin and compliance panel. My focus was the frontend: building the patient and doctor-facing interfaces in React, translating clinical workflows (mood logging, CBT exercises, appointment booking) into calm, approachable UI, and making sure the experience stayed encouraging rather than clinical - deliberately soft colors, simple navigation, and clear visual feedback like streaks and progress rings to keep patients engaged over time.",
    outcome: "The result is a working prototype spanning all twelve modules, with the AI detection engine analyzing patient input to flag symptom severity and the crisis-alert module scanning journal entries for risk keywords to notify a doctor immediately. It reinforced how much thoughtful frontend design matters in health tech - a mood tracker or CBT exercise only helps if someone actually wants to open it every day, which shaped nearly every UI decision we made.",
    modules: [
      "Authentication & Secure Onboarding",
      "Patient Profile & Medical History",
      "AI-Powered Depression & Anxiety Detection",
      "Mood Tracking & Journaling",
      "CBT Exercises & Therapy Tasks",
      "AI Support Chatbot",
      "Appointment Scheduling",
      "Crisis Alert & Emergency Intervention",
      "Therapy Progress Analytics",
      "Digital Prescription & Medication Tracker",
      "Group Therapy & Peer Support Hub",
      "Admin & Compliance Panel"
    ]
  }
];

export const education = {
  degree: "BS Software Engineering",
  school: "SZABIST, Islamabad",
  duration: "2022 - 2026"
};

export const certifications = [
  "Web Engineering and Web Design - NAVTTC Pakistan (2022)"
];
