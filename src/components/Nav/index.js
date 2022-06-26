import React from 'react';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Colleen Murray
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#work">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;