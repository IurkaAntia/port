import { RevealOnScroll } from "../RevealOnScroll";
import { Helmet } from "react-helmet";
const projects = [
  {
    title: "Scan Tbilisi",
    // role: "Back End Developer",
    // date: "12/2023 – 02/2024",
    description:
      "QR-code based system on historical buildings in Tbilisi that provides passers-by with stories and information in Georgian and English. Improved accessibility to cultural heritage by 60%.",
    stack: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    link: "https://www.scantbilisi.ge/en",
  },

  
  {
    title: "Zugdidi Municipality Web App",
    // role: "Full Stack Developer",
    // date: "12/2023",
    description:
      "Official site of Zugdidi Municipality, providing community information, services, and event updates for citizens and tourists. Enhanced civic accessibility by 50%.",
    stack: ["Laravel", "Bootstrap", "JQuery", "MySQL"],
    link: "https://zugdidi.gov.ge/ka",
  },
  {
    title: "Social Services for Youth",
    // role: "Back End Developer",
    // date: "06/2023 – 07/2023",
    description:
      "Platform for informing youth about nine categories of government social assistance aimed at promoting equality and opportunities. Increased service awareness by 40%.",
    stack: ["Laravel", "MySQL", "Bootstrap", "JQuery"],
    link: "https://www.ssyouth.ge",
  },
  {
    title: "Sou Stud App",
    // role: "Back End Developer",
    // date: "12/2024 – 02/2024",
    description:
      "Sou Stud is a student-focused app that delivers timely push notifications for marks, updates, and personalized alerts. It also provides job listings and student news to keep users connected with opportunities and campus life. Since launch, user engagement has grown by 40%, and notifications have boosted student responsiveness by 30%, improving academic awareness and outcomes.",
    stack: ["Laravel", "MySQL", "React Native", "StyleSheet"],
    link: " https://github.com/tornikeokroadze/SouStud-APP",
  },
  {
    title: "SSyouth Social Services App",
    // role: "Front End Developer",
    // date: "06/2023 – 07/2023",
    description:
      "Frontend interface for accessing and applying to various youth-focused social services using a clean and responsive UI. Improved user interaction by 35%.",
    stack: ["React Native", "StyleSheet", "Laravel", "MySQL"],
    link: "https://play.google.com/store/apps/details?id=com.ssyouth",
    offline: true,
  },
  {
    title: "Real Estate Internal Tool",
    // role: "Full Stack Developer",
    // date: "04/2024 – 05/2024",
    description:
      "Internal system for managing real estate clients and listings with search and filter matching by employee-defined preferences. Accelerated client-property matching by 45%.",
    stack: ["jQuery", "Ajax", "Laravel", "Bootstrap", "MySQL"],
    link: "https://17.com.ge/admin/en/login",
    offline: true, // <-- Mark this project as offline
  },
];

export const Projects = ({seo}) => {
  return (
    <>
    <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition relative"
              >
                <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                  {project.title}
                  {project.offline && (
                      <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full ml-2 uppercase font-semibold">
                      Offline
                    </span>
                  )}
                </h3>
                {/* <p className="text-sm text-gray-400 mb-2">
                  {project.role} | {project.date}
                  </p> */}
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                      <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 transition"
                      >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.offline ? (
                    <p className="text-red-400 italic text-sm">This project is currently offline.</p>
                ) : (
                    project.link && (
                        <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                        View Project
                      </a>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
    </>
  );
};
