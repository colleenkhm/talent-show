import React, { useState } from 'react';

function Work() {
    const [projects] = useState([
        {
            name: 'BIWOC Health',
            link: 'https://colleenkhm.github.io/biwoc-health/',
            description: 'A website that provides resources for Women of Color to empower individuals to make informed decisions regarding their healthcare.'
        },
        {
            name: 'Sleepily',
            link: 'https://github.com/colleenkhm/active-slumber',
            description: 'An app for users to help track sleeping patterns with data saving to user account. Made with Express.js, Handlebars.js, and MUI.'
        }
    ])
    return (
        <section>
            <h2 id="projects">The Work Page</h2>
            <div>
                <div className="flex-row">
                    {projects.map((project, i) => (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                    </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;