export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  repo: string;
  link: string;
}

export const projects: Project[] = [
  // ------------------------------------------------------
  // 1. Ensiplant
  // ------------------------------------------------------
  {
    id: 1,
    slug: "ensiplant",
    title: "Ensiplant",
    category: "Android Development",
    description:
      "A social media app for plant lovers, similar to a microblog where users can share plant updates.",
    longDescription:
      "Ensiplant is an Android-based mobile application designed as a social platform for plant enthusiasts. Users can post plant photos, share care tips, interact with others, and build a community similar to a microblogging experience. Featuring a clean UI and smooth navigation, Ensiplant is developed using Kotlin, Android Studio, and Firebase for authentication and data storage. The app focuses on simplicity, usability, and a fun community experience for plant lovers.",
    image: "/ensiplant.png",
    tech: ["/Kotlin.png", "/AndroidStudio.png", "/Figma.png", "/Firebase.svg"],
    repo: "https://github.com/Amelianahardianti/ensiplant",
    link: ""
  },

  // ------------------------------------------------------
  // 2. MUAR
  // ------------------------------------------------------
  {
    id: 2,
    slug: "muar",
    title: "MUAR",
    category: "Web Development",
    description:
      "A web platform that connects users with makeup artists quickly and easily.",
    longDescription:
      "MUAR is a web platform built to help users discover and connect with makeup artists (MUAs). The website provides clear service information, MUA portfolios, and an intuitive interface to simplify the booking process. MUAR is developed using PHP, MySQL, HTML, and CSS, focusing on a clean layout, responsiveness, and user-friendly navigation. It serves as a bridge for clients looking for reliable MUAs and for MUAs to professionally showcase their work.",
    image: "/muar.png",
    tech: ["/Php.png", "/mysql.png", "/vs.png", "/html.png"],
    repo: "https://github.com/Amelianahardianti/tbd_muar",
    link: ""
  },

  // ------------------------------------------------------
  // 3. EduSafe
  // ------------------------------------------------------
  {
    id: 3,
    slug: "edusafe",
    title: "EduSafe",
    category: "Web Development",
    description:
      "A school communication platform for teachers, parents, and students.",
    longDescription:
      "EduSafe is a full-stack web application designed to improve communication between teachers, parents, and students. The platform includes features such as announcements, attendance tracking, weather-based safety alerts, and multi-role dashboards. Built with Next.js, MongoDB, and Node.js, EduSafe prioritizes usability, clean interface design, and efficient information flow within the school environment.",
    image: "/edusafe.png",
    tech: ["/next.svg", "/MongoDB.png", "/Nodejs.png"],
    repo: "https://github.com/Amelianahardianti/edusafe",
    link: "https://edusafe2.vercel.app/"
  },

  // ------------------------------------------------------
  // 4. EaShip
  // ------------------------------------------------------
  {
    id: 4,
    slug: "eaship",
    title: "EaShip",
    category: "Desktop App Development",
    description:
      "A tugboat and barge booking system with real-time weather integration.",
    longDescription:
      "EaShip is a desktop application built with WPF to digitalize the booking process for tugboats and barges in maritime logistics. The system provides vessel management, booking workflows, status monitoring, and real-time weather data for major ports. Using Entity Framework and PostgreSQL as the backend, EaShip ensures structured data handling and efficient maritime operations. It is designed with a modern UI and reusable WPF components.",
    image: "/eaship.png",
    tech: ["/ssarp.png", "/WPF.png", "/PostgreSQL.png"],
    repo: "https://github.com/lisaolivia/EASHIP",
    link: ""
  },

  // ------------------------------------------------------
  // 5. PawDoc
  // ------------------------------------------------------
  {
    id: 5,
    slug: "PawDoc",
    title: "PawDoc",
    category: "Desktop App Development",
    description:
      "A veterinary clinic management system for patient records and scheduling.",
    longDescription:
      "PawDoc is a WPF desktop application created to support veterinary clinics in managing patient data, medical records, and treatment schedules. Built with C#, WPF, and Firebase, it allows clinics to store and synchronize data efficiently. PawDoc focuses on user-friendly workflows that help veterinarians organize daily operations and deliver better service to pet owners.",
    image: "/pawdoc.png",
    tech: ["/ssarp.png", "/WPF.png", "/Firebase.svg"],
    repo: "https://github.com/Amelianahardianti/pawdoc",
    link: ""
  }
];
