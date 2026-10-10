export const profileData = {
  name: "Arnold A. Magalona",
  titles: [
    "Full-Stack Web Developer",
    "System Architect & Engineer",
    "Graphics & UI/UX Designer",
    "Computer Engineer"
  ],
  headline: "Engineering robust full-stack web applications, custom enterprise systems, and seamless digital experiences.",
  email: "arnoldmagalona007@gmail.com",
  phone: "+63 947 8895 495",
  rawPhone: "09478895495",
  location: "Surigao City, Caraga Region, Philippines",
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    years: "2011 – 2017",
    institution: "St. Paul University Surigao"
  },
  status: "Available for High-Impact Projects & Consultations",
  summary: "Results-driven Computer Engineer and Full-Stack Developer with extensive experience architecting mission-critical enterprise systems, campus-wide portals, secure database frameworks, and high-converting modern web platforms. Proven track record in public sector ICT planning (DICT) and higher-education enterprise digitization (SPUS).",
  stats: [
    { label: "Years of Experience", value: "8+", suffix: "Years" },
    { label: "Enterprise Systems Built", value: "5+", suffix: "Core Systems" },
    { label: "Live Client Platforms", value: "4+", suffix: "Deployed" },
    { label: "Workshop Participants Trained", value: "500+", suffix: "Attendees" }
  ],
  socials: {
    github: "https://github.com/Arnold-Mags",
    linkedin: "https://www.linkedin.com/in/arnold-magalona-104344163",
    facebook: "https://www.facebook.com/arar.magalona007/"
  }
};

export const clientProjects = [
  {
    id: "spus",
    name: "St. Paul University Surigao",
    domain: "spus.edu.ph",
    url: "https://spus.edu.ph",
    category: "Higher Education & Portals",
    badge: "Institutional Flagship",
    tagline: "Full-scale university web ecosystem, digital portals, and automated student/faculty services.",
    description: "Architected and maintained the main public-facing web presence and integrated university digital ecosystem for St. Paul University Surigao. Engineered seamless linkages between academic portals, admissions, news broadcasting, and campus communications serving thousands of students and faculty members.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    accentColor: "#06B6D4",
    highlights: [
      "Institutional portal integrations for unified student and faculty access",
      "High-availability server setup optimized for peak enrollment traffic",
      "Mobile-first responsive interface with accessible academic news feed",
      "Comprehensive digital showcase for university departments and programs"
    ],
    techStack: ["PHP", "JavaScript", "MySQL", "CSS3/Grid", "REST APIs", "Apache/Linux Admin"],
    metrics: { users: "5,000+ Active Users", uptime: "99.9% Uptime", type: "Full Ecosystem" }
  },
  {
    id: "tradehub",
    name: "Tradehub Logistics",
    domain: "tradehubogistics.com",
    url: "https://tradehubogistics.com",
    category: "Logistics & Supply Chain",
    badge: "Commercial Platform",
    tagline: "Modern logistics management web platform and supply chain customer gateway.",
    description: "Engineered a high-performance web platform for Tradehub Logistics designed to streamline cargo services, corporate supply chain inquiries, and service quotations with an intuitive, corporate-grade user interface.",
    gradient: "from-blue-500/20 via-cyan-500/10 to-teal-500/20",
    accentColor: "#3B82F6",
    highlights: [
      "Modern corporate UI designed for maximum conversion and client trust",
      "Interactive quote request and freight service catalog",
      "Rapid page load speeds optimized for international cargo clients",
      "Responsive fleet and warehouse capabilities showcase"
    ],
    techStack: ["React / Modern Web", "JavaScript", "Custom CSS", "Lead Generation Engine", "SEO Architecture"],
    metrics: { industry: "Supply Chain", speed: "< 1.2s Load", target: "B2B & B2C" }
  },
  {
    id: "docmona",
    name: "Doc Mona Clinic",
    domain: "docmonaclinic.online",
    url: "https://docmonaclinic.online",
    category: "Healthcare & Clinic Care",
    badge: "Medical Management",
    tagline: "Comprehensive healthcare portal, clinic management, and appointment platform.",
    description: "Developed a patient-centric medical clinic portal facilitating transparent healthcare consultation info, service portfolios, physician schedules, and digital patient inquiry routing for Doc Mona Clinic.",
    gradient: "from-teal-500/20 via-emerald-500/10 to-cyan-500/20",
    accentColor: "#10B981",
    highlights: [
      "Streamlined digital appointment booking and consultation requests",
      "Comprehensive medical specialty catalog and diagnostic service directory",
      "Secure patient data handling and inquiries dispatch",
      "Warm, professional medical aesthetic built for patient ease and accessibility"
    ],
    techStack: ["Full-Stack Web", "JavaScript", "SQL Backend", "Responsive UI", "SSL / Data Protection"],
    metrics: { focus: "Patient Care", accessibility: "100% Mobile Ready", security: "HIPAA-Minded" }
  },
  {
    id: "itero",
    name: "ITERO Malimono",
    domain: "itero-ai.online",
    url: "https://itero-ai.online",
    category: "AI & Innovation Tech",
    badge: "Next-Gen AI Platform",
    tagline: "Futuristic artificial intelligence and smart community innovation platform.",
    description: "Created an AI & innovation platform showcasing advanced technological initiatives, automated workflows, and smart municipal digital modernization programs under the ITERO Malimono framework.",
    gradient: "from-purple-500/20 via-cyan-500/10 to-blue-500/20",
    accentColor: "#8B5CF6",
    highlights: [
      "Sleek dark-mode futuristic UI with interactive technology showcases",
      "Smart portal for community technology programs and digital innovations",
      "Dynamic data visualizations and interactive feature cards",
      "Built with high-performance responsive frontend architecture"
    ],
    techStack: ["React Architecture", "AI Workflows", "Modern CSS", "Interactive UI", "REST Endpoints"],
    metrics: { domain: "Smart Tech & AI", ui: "Futuristic Dark UI", audience: "Community & Tech" }
  }
];

export const enterpriseSystems = [
  {
    id: "rfid-hrms",
    title: "SPUS HRMS & RFID Attendance Monitoring",
    organization: "St. Paul University Surigao",
    category: "Enterprise System & IoT Hardware Integration",
    iconName: "UserCheck",
    summary: "Integrated Human Resource Management System with hardware-level RFID card reader synchronization for automated employee attendance, timekeeping, and payroll audit readiness.",
    problemSolved: "Eliminated manual paper logbooks and timecards by building an instant contact-free RFID clock-in system that synchronizes directly with HR database records in real time.",
    keyFeatures: [
      "Real-time RFID card scanner reader integration (TCP/IP / Serial / USB)",
      "Automated biometric/RFID attendance logs with millisecond timestamping",
      "Comprehensive leave management, overtime calculation, and shift scheduling",
      "HR reporting engine with exportable DTR (Daily Time Record) for payroll",
      "Role-based administrative permissions and audit trails"
    ],
    techStack: ["PHP / C#", "SQL Server / MySQL", "RFID Hardware Protocols", "Network Sockets", "Web Interface"],
    status: "Production Deployed"
  },
  {
    id: "enrollment-system",
    title: "SPUS Academic Enrollment System",
    organization: "St. Paul University Surigao",
    category: "Core Academic Enterprise Platform",
    iconName: "GraduationCap",
    summary: "Campus-wide automated enrollment and registration engine managing student admissions, curriculum tracking, subject scheduling, and automated tuition fee assessment.",
    problemSolved: "Streamlined multi-department enrollment bottlenecks, reducing registration time per student from hours of queued paper processing to automated digital workflows.",
    keyFeatures: [
      "Dynamic curriculum and prerequisites evaluation engine",
      "Automated section assignment and classroom capacity load balancing",
      "Real-time assessment calculation with scholarship and discount modifiers",
      "Registrar document validation and student masterlist generation",
      "High-concurrency database transaction handling during peak admission rush"
    ],
    techStack: ["Full-Stack Web / PHP", "Relational SQL", "Transaction Locking", "JavaScript", "Secure Auth"],
    status: "Production Deployed"
  },
  {
    id: "student-portal",
    title: "SPUS Unified Student & Faculty Portal",
    organization: "St. Paul University Surigao",
    category: "Self-Service Enterprise Portal",
    iconName: "LayoutDashboard",
    summary: "Centralized self-service portal empowering thousands of students to access term grades, real-time balance ledgers, course schedules, and official university announcements.",
    problemSolved: "Decentralized registrar and finance inquiries by providing 24/7 self-service access to academic standing, financial statements, and clearance approvals.",
    keyFeatures: [
      "Real-time grade viewing with historical GPA and transcript tracker",
      "Student financial ledger with breakdown of tuition, balances, and payments",
      "Interactive weekly class schedule view with faculty and room assignments",
      "Online clearance processing with multi-department digital sign-offs",
      "Mobile-optimized dashboard accessible on smartphones and tablets"
    ],
    techStack: ["Web Portal Architecture", "SQL Database", "REST API", "Responsive CSS", "Session Management"],
    status: "Production Deployed"
  },
  {
    id: "clinic-management",
    title: "SPUS Clinic Information Management System",
    organization: "St. Paul University Surigao",
    category: "Healthcare Electronic Records (EHR)",
    iconName: "Activity",
    summary: "Comprehensive healthcare records and clinic operations system handling electronic medical consultations, student health profiles, and medicine inventory tracking.",
    problemSolved: "Digitized physical clinic patient index cards, enabling medical staff to instantly pull up student/employee health histories, allergic reactions, and prescription logs.",
    keyFeatures: [
      "Electronic Health Records (EHR) for students, staff, and faculty",
      "Daily medical & dental consultation logbook with diagnosis records",
      "Clinic pharmacy medicine inventory and expiration alert monitoring",
      "Emergency contact retrieval and confidential medical alert flags",
      "Automated health clearance generation for sports and campus events"
    ],
    techStack: ["SQL Database", "PHP / Web Frontend", "Data Encryption", "Reporting Module", "Role-Based ACL"],
    status: "Production Deployed"
  },
  {
    id: "qmo-document-tracking",
    title: "SPUS QMO Document Tracking System",
    organization: "St. Paul University Surigao",
    category: "Quality Management & Compliance Workflow",
    iconName: "FileCheck",
    summary: "Enterprise document workflow and routing tracking platform engineered for the Quality Management Office to enforce ISO standards, accreditation audits, and version control.",
    problemSolved: "Eliminated misplaced physical routing folders across campus offices, providing a verifiable digital audit trail with barcode/tracking IDs for all university directives.",
    keyFeatures: [
      "Unique tracking ID and barcode generation for every inbound/outbound document",
      "Real-time department routing status (Received, Under Review, Approved, Forwarded)",
      "Document versioning repository for ISO compliance and accreditation records",
      "Bottleneck alerting when documents remain unacted beyond SLA thresholds",
      "Secure digital archive with keyword indexing and instant retrieval"
    ],
    techStack: ["SQL Architecture", "Web Workflow Engine", "Barcode Scanning Logic", "Audit Logging", "PDF Generation"],
    status: "Production Deployed"
  }
];

export const coreCompetencies = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    iconName: "Code2",
    description: "Designing and engineering responsive, high-performance web applications with modern frontend frameworks, scalable backend logic, and clean RESTful API architectures.",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & Semantic Web", "Modern CSS / Glassmorphism", "PHP", "Node.js", "REST APIs", "Responsive UI/UX"]
  },
  {
    id: "enterprise-systems",
    title: "Custom Enterprise Systems",
    iconName: "Server",
    description: "Architecting end-to-end bespoke enterprise platforms from ground up, including HRMS, Academic Portals, Healthcare EHRs, and document routing engines.",
    skills: ["ERP / HRMS Architecture", "RFID & IoT Hardware Sockets", "Workflow Automation", "Role-Based Access Control (RBAC)", "High Concurrency Scaling", "Secure Session Management"]
  },
  {
    id: "database-architecture",
    title: "Database Management (SQL)",
    iconName: "Database",
    description: "Designing robust relational database schemas, optimizing complex multi-table queries, indexing strategies, data integrity enforcement, and transaction safety.",
    skills: ["MySQL", "PostgreSQL", "Microsoft SQL Server", "Relational Data Modeling", "Query Optimization & Indexing", "Backup & Recovery Procedures", "Database Migration"]
  },
  {
    id: "infrastructure-security",
    title: "Systems, Network & Cybersecurity",
    iconName: "ShieldCheck",
    description: "Managing enterprise server environments, configuring local area network routing, workstation hardware diagnostics, and implementing defensive cybersecurity best practices.",
    skills: ["Computer Networks (LAN/VLAN)", "Server Administration (Linux/Windows)", "Cybersecurity (Cybersafe / ToT)", "Hardware Diagnostics & Servicing", "SSL/TLS & Threat Hardening"]
  },
  {
    id: "graphics-design",
    title: "Graphics & UI/UX Design",
    iconName: "Palette",
    description: "Crafting compelling digital branding, user-centric interface mockups, high-converting visual assets, and training others in modern creative workflows.",
    skills: ["Adobe Photoshop", "UI/UX Wireframing & Prototyping", "Brand Identity & Logo Design", "Design Systems & Color Palettes", "Marketing Assets", "Interactive Micro-Animations"]
  }
];

export const careerTimeline = [
  {
    period: "2021 – 2022",
    role: "Planning Officer 1",
    organization: "Department of Information and Communications Technology (DICT)",
    location: "Caraga Region, Philippines",
    badge: "Government / Public Sector Leadership",
    highlights: [
      "Led initiatives for Cybersafe for Learning Education, training educators and students on digital safety and threat defense.",
      "Conducted comprehensive ICT system evaluation and regional project monitoring for government digital initiatives.",
      "Provided administrative and technical leadership during regional rollout of digital literacy and broadband programs.",
      "Collaborated with inter-agency stakeholders to standardize digital government template adoption."
    ]
  },
  {
    period: "2017 – 2021",
    role: "Website and System Developer",
    organization: "St. Paul University Surigao - ICT Department",
    location: "Surigao City, Philippines",
    badge: "Enterprise Engineering & Infrastructure",
    highlights: [
      "Solely architected and engineered 5+ campus-wide enterprise systems (HRMS with RFID, Enrollment System, Student Portal, Clinic Records, QMO Tracking).",
      "Developed and administered the primary institutional web portal (spus.edu.ph), boosting digital engagement and user accessibility.",
      "Managed relational SQL database clusters, server backups, and campus-wide computer network infrastructure.",
      "Conducted hardware servicing, workstation provisioning, and technical troubleshooting for faculty and laboratory units."
    ]
  },
  {
    period: "2011 – 2017",
    role: "Bachelor of Science in Computer Engineering",
    organization: "St. Paul University Surigao",
    location: "Surigao City, Philippines",
    badge: "Academic Foundation",
    highlights: [
      "Comprehensive 5-year engineering curriculum covering Microprocessors, Computer Architecture, Digital Circuits, Software Engineering, and Data Communications.",
      "Active participant in technical symposiums, programming hackathons, and hardware servicing workshops."
    ]
  }
];

export const speakerCertifications = [
  {
    title: "Certified Microsoft Innovative Educator (MIE)",
    issuer: "Microsoft Education",
    category: "Professional Certification",
    icon: "Award",
    description: "Recognized for leveraging technology to enhance modern digital classrooms, collaborative learning environments, and educator empowerment."
  },
  {
    title: "Digital Citizenship Trainer",
    issuer: "Digital Tayo / Meta (Facebook)",
    category: "Train the Trainer Program",
    icon: "ShieldAlert",
    description: "Certified trainer advocating online safety, critical information evaluation, digital privacy, and constructive online dialogue."
  },
  {
    title: "Cybersecurity Certified (ToT & Cybersafe)",
    issuer: "DICT / Cybersecurity Training of Trainers",
    category: "Security Certification",
    icon: "Lock",
    description: "Certified in organizational cybersecurity awareness, vulnerability awareness, incident prevention, and cyber threat mitigation."
  },
  {
    title: "Workshop Speaker & Technical Trainer",
    issuer: "Regional ICT & Academic Workshops",
    category: "Keynote & Hands-On Training",
    icon: "Mic",
    description: "Conducted hands-on training sessions for hundreds of professionals and students on Government Web Templates (WordPress CMS), Adobe Photoshop Graphics, and Cybersecurity Defense."
  }
];

export const clientFeedbackHighlights = [
  {
    quote: "Arnold's ability to bridge hardware RFID scanners with full-scale HR database systems completely transformed our daily campus operations. A true computer engineer with exceptional web and database expertise.",
    author: "ICT & Academic Leadership",
    organization: "St. Paul University Surigao",
    tag: "Enterprise System Deployment"
  },
  {
    quote: "Delivered a clean, modern, and high-converting web platform on time. Arnold understands not just code, but user experience, branding, and conversion architecture.",
    author: "Operations Management",
    organization: "Commercial & Logistics Partner",
    tag: "Commercial Web Platform"
  }
];
