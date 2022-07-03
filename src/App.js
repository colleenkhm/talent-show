import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
// import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
        <Nav
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        ></Nav>
      <div>
        <main>
          {!resumeSelected ? (
            <>
            <About></About>
            <Work></Work>
            </>
          ) : (
            <Resume></Resume>
          )}
        </main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
