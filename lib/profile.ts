// Profile content, transcribed from Zac's LinkedIn profile on 2026-08-30.
// Role descriptions are his own wording, kept verbatim.

export type Role = {
  title: string;
  dates: string;
  duration: string;
  employment?: string;
  note?: string;
  summary?: string;
  bullets?: string[];
};

export type Company = {
  name: string;
  meta?: string;
  location?: string;
  roles: Role[];
};

export const profile = {
  name: "Zac Acker",
  pronouns: "He/Him",
  headline: "Building AI infrastructure that ships to Production",
  location: "Greater Indianapolis",
  site: { label: "acker.cloud", href: "https://acker.cloud" },
  linkedin: { label: "linkedin.com/in/zacker", href: "https://www.linkedin.com/in/zacker/" },
  current: "Kainos",
  school: "Indiana University Bloomington",
  topSkills: [
    "Leadership",
    "Teamwork",
    "Data Analysis",
    "Data Integration",
    "Artificial Intelligence (AI)",
  ],
};

export const experience: Company[] = [
  {
    name: "Kainos",
    meta: "Full-time · 5 yrs 10 mos",
    location: "Indianapolis, Indiana, United States · Hybrid",
    roles: [
      {
        title: "Senior Manager, AI Engineering",
        dates: "Jul 2026 - Present",
        duration: "2 mos",
        summary: "Building AI infrastructure that ships to Production.",
      },
      {
        title: "Workday Integrations Senior Manager",
        dates: "Oct 2025 - Jul 2026",
        duration: "10 mos",
        summary:
          "Responsible for product ownership, sales strategy, and technical leadership across global Workday services practice.",
      },
      {
        title: "Workday Integrations Manager",
        dates: "Jun 2022 - Oct 2025",
        duration: "3 yrs 5 mos",
        bullets: [
          "Leading staffing, resourcing, forecasting, and escalation efforts for the Workday Integration team in the Americas, ensuring optimal talent and expertise for successful project delivery.",
          "Implementing best practices, process enhancements, thorough documentation, and automation initiatives across the integration function to enhance capability and maximize efficiency and quality.",
          "Coordinating comprehensive training and mentoring programs to foster the professional growth and expertise of team members, promoting a cohesive and collaborative team environment.",
          "Actively participating in sales engagements by providing subject matter expertise, supporting the sales team, and demonstrating the value of Workday Integration solutions to clients.",
        ],
      },
      {
        title: "Workday Integrations Lead Consultant",
        dates: "Dec 2021 - Jun 2022",
        duration: "7 mos",
        bullets: [
          "Led a high-performing team of Workday Integration Consultants, providing guidance, mentoring, and fostering collaboration.",
          "Implemented best practices, process enhancements, and automation initiatives to improve team capabilities.",
          "Conducted comprehensive training sessions to enhance team members' skills in the latest Workday integration technologies, promoting their professional growth and expertise.",
          "Oversaw the development of detailed technical documentation, including integration specifications, configurations, and deployment guidelines.",
          "Proactively addressed complex integration issues by utilizing troubleshooting techniques and collaborating closely with stakeholders to minimize impact.",
          "Represented the Kainos leadership team at Workday Altitude in Nashville, TN.",
        ],
      },
      {
        title: "Workday Integrations Consultant",
        dates: "Nov 2020 - Dec 2021",
        duration: "1 yr 2 mos",
        bullets: [
          "Introduced the role of the first AMS Integration Consultant in the Americas, driving successful integrations for clients within the Workday ecosystem.",
          "Worked closely with clients and cross-functional teams to gather integration requirements and design robust solutions using Workday Integration tools.",
          "Developed and implemented seamless integrations between Workday and external systems, ensuring accurate data flow and system functionality.",
          "Led data transformation efforts, applying mapping and transformation rules to meet data privacy and security regulations.",
          "Diagnosed and resolved integration-related issues, conducting testing and debugging for smooth operations.",
          "Created detailed technical documentation and conducted training for clients and end-users on integration processes and best practices.",
          "Collaborated with functional consultants, developers, and project managers to deliver integration projects within specified timelines and quality standards.",
          "Stayed current with the latest trends and best practices in Workday integration, applying industry expertise to innovate solutions and drive continuous improvement.",
        ],
      },
    ],
  },
  {
    name: "Alight Solutions",
    meta: "Full-time · 1 yr 8 mos",
    location: "Indianapolis, Indiana, United States · Hybrid",
    roles: [
      {
        title: "Workday Associate Consultant, Integrations",
        dates: "Mar 2020 - Nov 2020",
        duration: "9 mos",
        bullets: [
          "Supported Workday HCM and Financials integration applications across project lifecycles, autonomously planning, designing, configuring, testing, and deploying integrations with meticulous attention to detail.",
          "Collaborated closely with Integrations Delivery Manager and Project Managers to align seamlessly with client specifications, delivering integration solutions that met project objectives and exceeded client expectations.",
          "Led discovery sessions with clients, leveraging domain expertise to identify and implement domain-specific integrations tailored to their unique requirements.",
          "Provided comprehensive requirements and design documents, facilitating smooth knowledge transfers and conducting customer training sessions.",
          "Thrived in serving both large enterprise and medium enterprise customers, adapting to their specific needs and delivering exceptional service with tailored integration solutions.",
          "Gained M&A experience, understanding the complexities of integrating systems and data during organizational transitions to ensure seamless continuity and optimize operational efficiency.",
        ],
      },
      {
        title: "Workday Analyst, Integrations",
        dates: "May 2019 - Mar 2020",
        duration: "11 mos",
        bullets: [
          "Stepped in to mentor and guide the AMS Integrations Team for four months in the absence of a manager, providing leadership and ensuring smooth project execution.",
          "Effectively scoped project work with strong organizational skills and attention to detail, ensuring timely and successful delivery.",
          "Helped new team members familiarize themselves with Standard Operating Procedures, best practices, and integration solutions.",
          "Led knowledge transfer and design meetings with clients, facilitating effective planning for future projects and workstreams.",
          "Conducted AMS Integrations Team Office Hours in Indianapolis, engaging with team members and offering guidance on integration-related matters.",
          "Collaborated closely with the HCM team, contributing to HCM Office Hours and supporting overall organizational growth and success.",
        ],
      },
      {
        title: "Workday Specialist, Integrations",
        dates: "Apr 2019 - May 2019",
        duration: "2 mos",
        bullets: [
          "Quickly resolved high-priority issues, minimizing downtime and ensuring customer satisfaction.",
          "Created comprehensive documentation to capture solutions and best practices, facilitating efficient troubleshooting and knowledge sharing.",
          "Led the development and implementation of Standard Operating Procedures to enhance accountability and efficiency, improving internal workflow and customer experience.",
          "Collaborated closely with cross-functional teams to streamline processes, driving operational excellence and continuous improvement.",
          "Played a key role in training and mentoring team members on SOPs and best practices, ensuring consistent and high-quality customer support.",
        ],
      },
    ],
  },
  {
    name: "Appirio",
    meta: "Full-time · 8 mos",
    location: "Indianapolis, Indiana, United States · Hybrid",
    roles: [
      {
        title: "Workday Specialist",
        dates: "Sep 2018 - Apr 2019",
        duration: "8 mos",
        note: "Workday practice acquired by Alight Solutions, April 2019.",
        bullets: [
          "Consulted in a fast-paced post-implementation role, specializing in optimizing the Workday platform for medium enterprise companies.",
          "Developed expertise in HCM, Advanced Reporting, Integrations, BIRT, Compensation, Security, Authentication, and Data Migration.",
          "Configured and customized Workday modules to streamline HR processes, improve reporting, and ensure data accuracy.",
          "Implemented robust security measures and authentication protocols to protect sensitive information and ensure compliance.",
          "Executed data migration strategies, ensuring seamless transfer of critical data into Workday with minimal disruption.",
          "Contributed to developing and delivering training materials, empowering clients to effectively manage their HR processes using Workday.",
        ],
      },
    ],
  },
  {
    name: "N-I-TECH, INC.",
    meta: "5 yrs 5 mos",
    location: "Brownstown, Indiana, United States · On-site",
    roles: [
      {
        title: "Information Technology System Manager",
        dates: "May 2017 - Sep 2018",
        duration: "1 yr 5 mos",
        employment: "Full-time",
        bullets: [
          "Designed, implemented, and maintained software, hardware, and network infrastructure across Windows Server, Windows OS, and cloud environments.",
          "Developed comprehensive standard operating procedures and policies, serving as a resource for client environments and internal teams.",
          "Administered internal client management systems, using system automation and remote control cloud computing to enhance productivity.",
          "Integrated various systems to enable seamless communication with industry-specific software, streamlining workflows.",
          "Installed and maintained security surveillance hardware and monitoring software.",
          "Built websites and graphic illustrations with Adobe Suite tools.",
          "Conducted training sessions for helpdesk specialists, consultants, and clients on standard operating procedures and technology systems.",
        ],
      },
      {
        title: "Technology Consultant, Software and Hardware Implementation",
        dates: "May 2014 - May 2017",
        duration: "3 yrs 1 mo",
        employment: "Full-time",
        bullets: [
          "Administered and implemented software and hardware solutions across government, corporate, and residential sectors.",
          "Served as a Tier 3 support resource and subject matter expert, guiding Helpdesk Specialists to resolve complex technical issues.",
          "Provided onsite, remote, and phone support to swiftly address IT challenges and minimize disruptions.",
          "Proactively trained clients on new and existing technology, helping them maximize IT investments.",
          "Created and maintained user-friendly websites for clients.",
        ],
      },
      {
        title: "Technical Support Specialist, IT Infrastructure Maintenance",
        dates: "May 2013 - May 2014",
        duration: "1 yr 1 mo",
        employment: "Part-time",
        bullets: [
          "Provided Tier 1 and Tier 2 technical support, addressing user requests and troubleshooting issues to maintain productivity.",
          "Maintained local and remote computers, tablets, smartphones, servers, printers, network equipment, and industry-specific applications.",
          "Managed user account configurations through Active Directory, ensuring accurate rights, permissions, and sharing groups.",
          "Updated the help desk ticketing system with detailed descriptions of work performed and hours dedicated.",
        ],
      },
    ],
  },
  {
    name: "Thrive Culture Media",
    meta: "Self-employed · 10 mos",
    location: "Indianapolis, Indiana, United States · Remote",
    roles: [
      {
        title: "Web Developer, Digital Media Specialist",
        dates: "Mar 2017 - Dec 2017",
        duration: "10 mos",
        note: "A media group covering culture, tech, music, film, gaming, and sports.",
        bullets: [
          "Led content production and editing for reviews and articles.",
          "Sourced images and artwork to maintain a consistent brand look across platforms.",
          "Created visuals that supported website content and improved user experience.",
          "Managed website architecture to optimize performance and navigation.",
          "Oversaw hosting applications, implementing updates for functionality and security.",
          "Engaged with followers and maintained a social media presence on Twitter, Facebook, and Reddit.",
        ],
      },
    ],
  },
  {
    name: "Acker Technology",
    meta: "Self-employed · 2 yrs 10 mos",
    location: "Bloomington, Indiana, United States · Remote",
    roles: [
      {
        title: "Web Developer",
        dates: "Aug 2013 - May 2016",
        duration: "2 yrs 10 mos",
        bullets: [
          "Led the development and upkeep of dynamic websites for small to medium-sized businesses.",
          "Applied Google listings expertise and SEO strategies to improve visibility and search rankings.",
          "Used social media to strengthen brand awareness and maintain a cohesive online presence for clients.",
          "Worked closely with clients to translate their objectives into user-friendly website designs.",
          "Monitored website performance and executed updates to optimize functionality.",
        ],
      },
    ],
  },
  {
    name: "Aisin Drivetrain Inc.",
    meta: "Internship · 10 mos",
    location: "Crothersville, Indiana, United States · On-site",
    roles: [
      {
        title: "Mechanical Engineering Intern",
        dates: "Aug 2011 - May 2012",
        duration: "10 mos",
        bullets: [
          "Worked with a mechanical engineering team to manufacture transmissions and drivetrains for automotive and heavy equipment industries.",
          "Designed and implemented a product assembly line and transmission inspection station using Autodesk AutoCAD and Inventor.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "Indiana University Bloomington",
    degree: "Bachelor of Science (BS), Informatics",
    dates: "2012 - 2017",
    activities: "ICSA, Intramural Sports",
    detail:
      "Studied programming, software development, data management, human-computer interaction, cybersecurity, and the social and ethical implications of technology. Applied it through hands-on projects, an internship that led to full time employment, and collaborative work.",
  },
  {
    school: "Indiana University Jacobs School of Music",
    degree: "Minor, Music Theory and Production",
    dates: "2012 - 2017",
    detail:
      "Studied musical accompaniment systems, optical score recognition, music audio analysis, and the synthesis of musical expression from a score.",
  },
  {
    school: "Brownstown Central High School",
    degree: "Core 40 with Academic Honors, General Studies",
    dates: "2008 - 2012",
    activities: "Student Council, Science Olympiad, Academic Team, Varsity Tennis",
  },
  {
    school: "Trailhead by Salesforce",
    degree: "Explorer",
    dates: "2020 - Present",
  },
];

export const skills = [
  "Artificial Intelligence (AI)",
  "Data Integration",
  "Data Analysis",
  "Data Visualization",
  "Dashboards",
  "Microsoft Power BI",
  "SQL",
  "XML",
  "Leadership",
  "Teamwork",
  "Computer Ethics",
  "Music Production",
  "Music Theory",
  "Music Composition",
];
