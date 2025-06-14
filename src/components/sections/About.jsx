import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaUserCheck,
} from "react-icons/fa";

export const About = () => {
  const allSkills = [
    "PHP", "OOP", "MVC", "Laravel",
    "React.js", "React Native", "JavaScript", "TypeScript", "HTML & CSS",
    "Tailwind CSS", "jQuery", "Ajax",
    "Linux", "MySQL", "Git", "GitHub",
    "JSON", "Redux", "REST APIs"
  ];

  const languagesAndFrameworks = allSkills.slice(0, 11);
  const toolsAndPlatforms = allSkills.slice(11);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            I'm a Full Stack Web & Mobile Developer with over 2+ years of experience building and maintaining scalable, user-focused applications using Laravel, React.js, React Native, and MySQL. Proven track record of boosting performance and user engagement by up to 60% across various public platforms and internal tools. Skilled in writing clean, maintainable code, optimizing databases, and integrating APIs securely. Passionate about continuous learning, scalable architecture, and collaborating with cross-functional teams to deliver high-quality solutions. 
            </p>

            {/* Skills in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Languages & Frameworks:</h3>
                <div className="flex flex-wrap gap-2">
                  {languagesAndFrameworks.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Tools & Platforms:</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsAndPlatforms.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <FaGraduationCap className="text-purple-400 w-6 h-6" />
                <span>Education</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in Computer Technologies</strong> - Sokhumi State University (2021 - Present)
                </li>
                <li>Relevant Coursework: Web Development, Data Structures, Algorithms.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <FaBriefcase className="text-blue-400 w-5 h-5" />
                <span>Work Experience</span>
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Full Stack Developer at LTD Integral (2023 - 2025)</h4>
                  <p>Developer and database maintainer for web and mobile applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <FaUserCheck className="text-green-400 w-5 h-5" />
              <span>Recommendations</span>
            </h3>

            <div className="flex flex-col md:flex-row gap-6 text-gray-300">
              <div className="flex-1 p-4 rounded-lg  border-white/10 border hover:-translate-y-1 transition-all space-y-1">
                <h4 className="font-semibold">Director of LTD Integral</h4>
                <h5>Beka Toklikishvili</h5>
                <a
                  href="https://www.hr.gov.ge/files/157b178d-ff10-4db3-a149-3971c7ae8107"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Recommendation
                </a>
              </div>

              <div className="flex-1 p-4 rounded-lg border-white/10 border hover:-translate-y-1 transition-all space-y-1">
                <h4 className="font-semibold">Guest Lecturer, Sokhumi State University</h4>
                <h5>Beka Toklikishvili</h5>
                <a
                  href="https://www.hr.gov.ge/files/5444358d-1617-444f-84b8-6f58038f40a5"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Recommendation
                </a>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <FaAward className="text-yellow-400 w-5 h-5" />
              <span>Awards</span>
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="space-y-1">
                <h4 className="font-semibold">

                  3rd Place (OIOIUS-2024)

                </h4>

                <p>

                  II Open International Olympiad in Informatics of University Students<br />
                  Ashgabat, Turkmenistan – 04/2024
                </p>
                <a href="https://iogu.edu.tm/en/news/418"
                  target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  View Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
