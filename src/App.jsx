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

 
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>Iuri Antia | Full Stack Web & Mobile Developer</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Portfolio of Iuri Antia – Full Stack Web & Mobile Developer specializing in Laravel, React, and React Native. Explore projects, skills, and contact info."
        />
        <meta name="keywords" content="Iuri Antia, Full Stack Developer, Web Developer, Laravel, React Native, JavaScript, Georgia Developer" />
        <meta name="author" content="Iuri Antia" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://iuriantia.netlify.app" />

        <meta property="og:title" content="Iuri Antia | Full Stack Web & Mobile Developer" />
        <meta property="og:description" content="Showcasing robust web and mobile development work using Laravel, React, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iuriantia.netlify.app" />
        <meta property="og:image" content="https://iuriantia.netlify.app/preview.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iuri Antia | Full Stack Web & Mobile Developer" />
        <meta name="twitter:description" content="Explore the portfolio of Iuri Antia – building fast and scalable web & mobile apps." />
        <meta name="twitter:image" content="https://iuriantia.netlify.app/preview.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Iuri Antia",
            url: "https://iuriantia.netlify.app",
            sameAs: ["https://linkedin.com/in/iuri-antia-832b4326"],
            jobTitle: "Full Stack Web & Mobile Developer",
            image: "https://iuriantia.netlify.app/favicon.svg",
          })}
        </script>
      </Helmet>


      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}
      >
        <NavBar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home  />
        <About  />
        <Projects  />
        <Contact />
      </div>
    </>
  )
}

export default App
