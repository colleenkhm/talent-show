import React from 'react';
import About from '../About'
import Work from '../Work'
import Contact from '../Contact'
import Resume from '../Resume'

function Nav() {

    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">
                    Colleen Murray
                </a>
            </h1>
            <nav>
                <ul className="flex-row nav-bar">
                    <li>
                        <a href="#about" onClick={About}>About</a>
                    </li>
                    <li>
                        <a href="#work" onClick={Work}>Work</a>
                    </li>
                    <li>
                        <a href="#contact" onclick={Contact}>Contact</a>
                    </li>
                    <li>
                        <a href="#resume" onclick={Resume}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;