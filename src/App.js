import React, { useState } from 'react';
import Nav from './components/Nav';
// import About from './components/About';
// import Work from './components/Work';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

function App() {
  const [sections] = useState([
    {
        name: 'about',
        description: 'about Colleen'
    },
    {
        name: 'projects',
        description: 'coding projects'
    },
    {
        name: 'contact',
        description: 'contact information'
    },
    {
        name: 'resume',
        description: 'pdf of resume'
    }
]);
const [currentSection, setCurrentSection] = useState(categories[0]);

  return (
    <div>
      <Nav
      sections={sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Nav>
      {/* <main>
        <div>
          <About></About>
          <Work></Work>
          <Contact></Contact>
          <Resume></Resume>
        </div>
      </main> */}
    </div>
  );
}

export default App;
