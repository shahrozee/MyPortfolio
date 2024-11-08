/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahroze Subhani",
  title: "Hi all, I'm Shahroze",
  subTitle: emoji(
    "A skilled Python Developer and LLM Trainer 🚀 with expertise in AI, machine learning, and Large Language Models (LLMs). Experienced in function calling, prompt engineering, and fine-tuning AI models. Strong project management background with a focus on delivering high-quality solutions in Python, Flask, and generative AI."
  ),
  resumeLink:
    "/static/files/ResumeShahroze.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahrozee",
  linkedin: "https://www.linkedin.com/in/shahroze-subhani/",
  gmail: "shahrozesubhani@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Python Developer and LLM Trainer, specializing in AI, machine learning, and exploring innovative tech stacks.",
  skills: [
    emoji(
      "⚡ Training and fine-tuning Large Language Models (LLMs) for diverse industry applications"
    ),
    emoji("⚡ Expert in Function Calling, Prompt Engineering, Model Evaluation, and Error Diagnosis"),
    emoji(
      "⚡ Developing and deploying AI-powered solutions using Python, Flask, and Generative AI technologies"
    ),
    emoji(
      "⚡ Developing 3D/2D mulitplayer video games, utilizing Photon SDK and Real-time Physics Engine"
    ),
    emoji(
      "⚡ Project Management for large-scale AI applications, Agile methodologies, and cross-functional team leadership"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fa fa-regular fa-flask"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fa fa-light fa-laptop-code"
    },
    {
      skillName: "Large Langugae Models (LLM's)",
      fontAwesomeClassname: "fa fa-light fa-language"
    },
    {
      skillName: "Generative AI",
      fontAwesomeClassname: "fa fa-microchip"
    },
    
    {
      skillName: "Prompt Engineering",
      fontAwesomeClassname: "fa fa-light fa-quote-left"
    },
    {
      skillName: "Android Development",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "iOS Development",
      fontAwesomeClassname: "fab fa-app-store-ios"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "far fa-file-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "far fa-square"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fa fa-solid fa-angle-right"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PUCIT, University of Punjab",
      logo: require("./assets/images/pnjb.png"),
      subHeader: "Bachelors of Science in Computer Software Engineering",
      duration: "2012 - 2016",
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/pgc.png"),
      subHeader: "FSc Pre-Engineering",
      duration: "2010 - 2012",
      }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI & LLM's", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "87%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "83%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer & LLM Trainer",
      company: "Upwork & Remote",
      companylogo: require("./assets/images/upwork4.jpg"),
      date: "Feburary 2022 – Present",
      "desc": "Completed various AI and ML projects, focusing on LLMs, function calling, prompt engineering, error diagnosis, and real-world application integration. Specialized in LLM training, freelance Python development, and innovative AI solutions."},
    {
      role: "Project Manager (Sr. Python Developer and Associate Mobile Developer)",
      company: "RootsPointer",
      companylogo: require("./assets/images/rootpointersLogo.jpeg"),
      date: "January 2017 – Feburary 2022",
        desc: "Led cross-functional teams in developing AI-powered applications, from concept to deployment, with expertise in transitioning from mobile development to senior Python development and project management."
      },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Achievements🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google's Python Crash Course",
      subtitle: "Completed certification for Python development course devised by Google.",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/verify/SVSHVQ25X8DZ"
        },
      ]
    },
    {
      title: "Google's Project Management Courses",
      subtitle:
        "Completed two certifications on courses by Google on project management and initiation",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Award Letter—Project Initiation",
          url: "https://www.coursera.org/account/accomplishments/verify/8JT7VYYGK3PV"
        },
        {
          name: "Award Letter—Project Management Foundations",
          url: "https://www.coursera.org/account/accomplishments/verify/SPA6GXVDLR2K"
        },
      ]
    },

    {
      title: "IBM's DevOps Course",
      subtitle: "Completed certifcation on DevOps by IBM",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/verify/RYHGW3YK8YA9"
        },
      ]
    },

    {
      title: "IBM's Python for Data Science, AI, and Development",
      subtitle: "Completed certifcation on a course offered by IBM on Python for Data Science, AI, and Development.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/certificate/EJD4VG56MKRE"
        },
      ]
    },

    {
      title: "IBM's Full Stack Software Development",
      subtitle: "Completed Full Stack Software Development Assessment certification by IBM",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/certificate/4GQHYRF9PB69"
        },
      ]
    },

    {
      title: "DeepLearning.AI (Stanford University)'s Supervised Machine Learning Course",
      subtitle: "Completed certification by DeepLearning.AI on Prompt Engineering, Building Advanced RAG, Open-Source Models with Hugging Face",
      image: require("./assets/images/deeplearningAI.png"),
      imageAlt: "dp.AI Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/verify/ZY294LKUDLR3"
        },
      ]
    },

    {
      title: "Michigan State University's Game Design and Development Course",
      subtitle: "Completed certification on Game Design and Development course offered by Michigan State University",
      image: require("./assets/images/msuLogo.png"),
      imageAlt: "MSU Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.coursera.org/account/accomplishments/certificate/48NTCR5BR5HM"
        },
      ]
    },

    {
      title: "Scrum Courses",
      subtitle: "Completed two master certifications on Scrum",
      image: require("./assets/images/scrumLogo.png"),
      imageAlt: "scrum Logo",
      footerLink: [
        {
          name: "Award Letter—Scrum Introduction",
          url: "https://www.coursera.org/account/accomplishments/verify/43LAKT633BSY"
        },
        {
          name: "Award Letter—Scrum Methodoligies",
          url: "https://www.coursera.org/account/accomplishments/verify/GZQCPV6Q94JS"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3008162522",
  email_address: "shahrozesubhani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
