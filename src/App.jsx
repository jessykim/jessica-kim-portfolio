import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import ProjectDetails from './pages/ProjectDetails';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <main>
        <NavBar 
          faHouse={faHouse} 
          faComments={faComments}
          faBriefcase={faBriefcase}
          faCode={faCode}
          faAddressCard={faAddressCard}
        />
        <Routes>
          <Route path='/' element={<Home
            faComments={faComments}
            faBriefcase={faBriefcase}
            faCode={faCode}
            faAddressCard={faAddressCard}
          />} />
          <Route path='about' element={
            <About 
              faEarthAmericas={faEarthAmericas}
              faCookieBite={faCookieBite}
              faPalette={faPalette}
              faMusic={faMusic}
            />
          } />
          <Route path='contact' element={<Contact />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:projectDetails' element={<ProjectDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
