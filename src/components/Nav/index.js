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
                        <span>About</span>
                    </li>
                    <li className="mx-2">
                        <span>Work</span>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    <li className="mx-2">
                        <span>Resume</span>
                    </li>
                    {/* {sections.map((section) => (
                    <li className={`mx-2 ${
                        currentSection.name === section.name && 'NavActive'
                    }`}
                    key={section.name}
                    >
                        <span onClick={() => {
                            setCurrentSection(section)
                        }} >
                            
                        </span>
                    </li>
                ))} */}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;