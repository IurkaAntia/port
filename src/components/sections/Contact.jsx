import { RevealOnScroll } from "../RevealOnScroll"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


export const Contact = () => {
    return (

        <section id="contact" className=" min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <div className=" px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition relative flex justify-center space-x-8 text-4xl">
                        <a
                            href="https://github.com/IurkaAntia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:www.iuriantia@gmail.com"
                            className="hover:text-red-500 transition"
                        >
                            <SiGmail />
                        </a>
                        <a
                            href="https://ge.linkedin.com/in/iuri-antia-832b43269"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    )
}
