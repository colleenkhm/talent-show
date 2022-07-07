import React from 'react';

function Nav(props) {
    const {
        resumeSelected,
        setResumeSelected
    } = props;
    return (
        <header className="flex-row px-1">
            <h1>
                <a href="https://colleenkhm.github.io/talent-show/">
                    Colleen Murray
                </a>
            </h1>
            <nav>
                <ul className="flex-row nav-bar">
                    <li>
                        <a href="#about" class="section-link">About</a>
                    </li>
                    <li>
                        <a href="#work" class="section-link">Projects</a>
                    </li>
                    <li>
                        <a href="#footer" class="section-link">Contact</a>
                    </li>
                    <li className={`${resumeSelected}`}>
                        <a>
                            <span onClick={() => setResumeSelected(true)}>Resume</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;