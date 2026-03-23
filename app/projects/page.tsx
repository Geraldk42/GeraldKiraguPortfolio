import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "LinkCal",
    description:
      "A mobile app that simplifies scheduling by allowing users to link calendars and find mutual availability.",
    tech: ["Java", "Firebase"],
    github: "https://github.com/Geraldk42/mobile-fanta-lite.git",
    
  },
  {
    title: "Land Property Management System",
    description:
      "A web-based Land Property Management System using core PHP that enables efficient management of property records, contracts, and transactions",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/Geraldk42/Land-Property-Management-System",
    
  },
  {
    title: "Analytics Dashboard",
    description:
      "A web-based dashboard displaying employee work hours with visual charts and real-time analytics.",
    tech: ["Blazor", "C#", "Chart.js"],
    github: "https://github.com/Geraldk42/Managemate",
    
  },
  {
    title: "Veridian Tenant Management System",
    description:
      "Veridian TMS is a comprehensive property management solution designed specifically for the Kenyan market. It streamlines the relationship between landlords and tenants through digital lease agreements, automated M-Pesa rent collection, and real-time financial reporting.",
    tech:["PHP"],
    github: "https://github.com/Geraldk42/TMS-Veridian",
    live : "https://veridian-tms.gt.tc/"
  },
  {
    title: "ServiceHub",
    description:
      " Local Services Booking & Management API.A backend system that connects clients to service providers (plumbers, cleaners, electricians, caregivers)",
    tech: ["Node.js Express", "MongoDB Atlas", "Postman"],
    github: "https://github.com/Geraldk42/servicehub-API"  
  },
  // I'm gonna add more projects here
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 min-h-screen px-6">
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white transition-colors">
          My Projects
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors">
          Here’s a collection of projects I’ve worked on, showcasing my skills and experience.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}