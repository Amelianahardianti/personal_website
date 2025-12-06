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
  // Ensiplant
  {
    id: 1,
    slug: "ensiplant",
    title: "Ensiplant",
    category: "Android Development",
    description: "Plant encyclopedia app with clean UI and smooth navigation.",
    longDescription: "...",
    image: "/ensiplant.png",
    tech: ["/Kotlin.png", "/AndroidStudio.png", "/Figma.png", "/Firebase.svg"],
    repo: "https://github.com/Amelianahardianti/ensiplant",
    link: ""
  },

  // MUAR
  {
    id: 2,
    slug: "muar",
    title: "MUAR",
    category: "Web Development",
    description: "Wesbite for conected make up artist and their client.",
    longDescription: "...",
    image: "/muar.png",
    tech: ["/Php.png", "/mysql.png", "/vs.png","/html.png"],
    repo: "https://github.com/Amelianahardianti/muar",
    link: ""
  },

  // EduSafe
  {
    id: 3,
    slug: "edusafe",
    title: "EduSafe",
    category: "Web Development",
    description: "...",
    longDescription: "...",
    image: "/edusafe.png",
    tech: ["/next.png", "/MongoDB.png", "/Nodejs.png"],
    repo: "https://github.com/Amelianahardianti/edusafe",
    link: "https://edusafe2.vercel.app/"
  },

  // EaShip
  {
    id: 4,
    slug: "eaship",
    title: "EaShip",
    category: "Desktop App Development",
    description: "...",
    longDescription: "...",
    image: "/eaship.png",
    tech: ["/ssarp.png", "/WPF.png", "/PostgreSQL.png"],
    repo: "https://github.com/Amelianahardianti/eaship",
    link: ""
  },
    // pawdoc
  {
    id: 5,
    slug: "PawDoc",
    title: "Pawdoc",
    category: "Desktop App Development for vet clinic",
    description: "...",
    longDescription: "...",
    image: "/pawdoc.png",
    tech: ["/ssarp.png", "/WPF.png", "/Firebase.svg"],
    repo: "https://github.com/Amelianahardianti/eaship",
    link: ""
  }
];
