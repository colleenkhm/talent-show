import React, { useState } from 'react';
import Nav from './components/AppNavBar';
import Home from './components/Home'
import Footer from './components/Footer';

function App() {

const [resumeSelected, setResumeSelected] = useState(false);

  return (
      <>
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
      </>
  );
}

export default App;
