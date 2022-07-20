import React from 'react';

function Home() {
    return (
        <div>
            <div className="hero">
                <h2>Linguist</h2>
                <h2>Web Developer</h2>
                <h2>Traveler</h2>
            </div>
            <div className="skills">
                <div className="technical-skills">
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Handlebars</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="soft-skills">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>
                            <h4>Customer Service</h4>
                            <p>I have six years of experience in the food service industry and am able to easily develop connections with clients and work to understand/meet their needs.</p>
                        </li>
                        <li>
                            <h4>Language/Translation</h4>
                            <p>I have been studying Spanish, French, and American Sign Language since early high school and majored in linguistics in college. Last year I spent two months supporting FEMA as an interpreter in Spanish and American Sign Language at various COVID testing and vaccination sites throughout Missouri.</p>
                            </li>
                        <li>
                            <h4>Collaboration</h4>
                            <p>I have worked in many teams, from 12 years of playing lacrosse, to serving</p>
                            </li>
                        <li>Adaptability</li>
                        <li>Leadership</li>
                        <li>Education</li>
                    </ul>
                </div>
                <div className="currently-learning">
                    <h3>In The Works</h3>
                    <h4>Currently Learning</h4>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                    <h4>Currently Utilizing</h4>
                    <ul>
                        <li>Ionic</li>
                        <li>Textract</li>
                        <li>AWS</li>
                        <li>Serverless Backend</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;