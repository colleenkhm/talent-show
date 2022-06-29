import React from 'react'

function Footer() {
    return(
        <footer>
            <ul className="flex-row socials-container">
                <li>
                    <a href="https://www.linkedin.com/in/colleen-murray-161314230/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-solid fa-people-arrows-left-right"></i>LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/colleenkhm" target="_blank" rel="noopener noreferrer" title="Github"><i className="fa-solid fa-desktop"></i>GitHub</a>
                </li>
                <li>
                    <a href="https://www.duolingo.com/profile/colleenkhm" target="_blank" rel="noopener noreferrer" title="Duolingo"><i className="fas fa-comments"></i>Duolingo</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;