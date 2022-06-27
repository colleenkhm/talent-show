import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    {
        name: 'about',
        description: 'about page'
    },
    {
        name: 'projects',
        description: 'coding projects page'
    },
    {
        name: 'resume',
        description: 'pdf of resume'
    }
]);
const [currentSection, setCurrentSection] = useState(sections[0]);

const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      sections={sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <About currentSection={currentSection}></About>
          {/* <Work></Work>
          <Resume></Resume> */}
          </>
        ) : (
          <Contact></Contact>  
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
