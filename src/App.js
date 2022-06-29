import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
        id: '0',
        title: 'About',
        description: 'about page'
    },
    {
        id: '1',
        title: 'Projects',
        description: 'coding projects page'
    },
    {
        id: '2',
        title: 'Resume',
        description: 'pdf of resume'
    }
]);
const [currentPage, setCurrentPage] = useState(pages[0]);

const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <div>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
      </div>
      <div>
        <main>
          {!contactSelected ? (
            <>
            <About currentPage={currentPage}></About>
            <Work></Work>
            <Resume></Resume>
            </>
          ) : (
            <ContactForm></ContactForm>
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
