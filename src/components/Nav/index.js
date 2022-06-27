import React from 'react';

function Nav(props) {
    const {
        sections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected
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
                    {sections.map((section) => (
                    <li>
                        <a className={`mx-2 ${
                        currentSection.name === section.name && 'NavActive'
                    }`}
                    key={section.name}
                    onClick={() => {
                        setCurrentSection(section);
                        setContactSelected(false)
                    }}
                    ></a>
                    </li>
                    ))}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => 
                            setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;