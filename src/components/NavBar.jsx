import { useEffect } from "react"

export const NavBar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-xl font-bold font-mono text-white">
                        <img
                            src="/logo.png"
                            alt="Iuri Antia Logo"
                            className="w-8 h-8 object-contain"
                        />

                    </a>
                    <div onClick={() => setMenuOpen((prev) => !prev)} className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-color"> Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-color"> About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-color"> Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-color"> Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}