import { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { NavBar } from './components/NavBar.jsx'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './components/sections/Home.jsx'
import { About } from './components/sections/About.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { Helmet } from 'react-helmet'

function App() {

  const seoData = {
    home: {
      title: "Home | Iuri Antia - Full Stack Developer",
      description: "Welcome to the portfolio of Iuri Antia, a skilled Full Stack Developer specializing in React, Laravel, and mobile development. Discover innovative projects and clean code craftsmanship.",
    },
    about: {
      title: "About Me | Iuri Antia - Full Stack & Mobile Developer",
      description: "Learn more about Iuri Antia, a passionate Full Stack and Mobile Developer with 2+ years of experience creating scalable, user-centric web and mobile applications.",
    },
    projects: {
      title: "Projects | Iuri Antia - React, Laravel & Mobile Apps",
      description: "Explore a curated selection of Iuri Antia’s web and mobile projects built with modern technologies like React, React Native, Laravel, and MySQL. See how innovation meets quality.",
    },
    contact: {
      title: "Contact | Iuri Antia - Get in Touch",
      description: "Reach out to Iuri Antia for collaboration, freelance opportunities, or project inquiries. Let’s build something amazing together!",
    },
  }
  
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Iuri Antia | Full Stack Web & Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of Iuri Antia – Full Stack Web & Mobile Developer specializing in Laravel, React, and React Native. Explore projects, skills, and contact info."
        />
        <meta property="og:title" content="Iuri Antia | Full Stack Web & Mobile Developer" />
        <meta
          property="og:description"
          content="Showcasing robust web and mobile development work using Laravel, React, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://Antia.netlify.app/favicon.svg" /> {/* optional preview image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iuri Antia | Full Stack & Mobile Developer" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Iuri Antia – building fast, scalable, and elegant web/mobile apps."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Iura Antia",
            url: "https://Antia.netlify.app",
            sameAs: ["https://linkedin.com/in/iuri-antia-832b4326"],
            jobTitle: "Full Stack Web Developer",
            image: "https://Antia.netlify.app/logo.png",
          })}
        </script>;
        
      </Helmet>

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
      >
        <NavBar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home seo={seoData.home} />
        <About seo={seoData.about} />
        <Projects seo={seoData.projects} />
        <Contact seo={seoData.contact} />
      </div>
    </>
  )
}

export default App
