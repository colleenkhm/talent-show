import React from "react";
import portfolioResume from "../assets/portfolio-resume.pdf";
import resumeScreenshot from "../assets/resume-screenshot.png";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Resume() {
  return (
    <div className="skills-container">
      <div className="skills-row">
        <div className="skills" id="technical-skills">
          <h4>Technical Skills</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>SQL/MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>Handlebars</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="skills" id="soft-skills">
          <h4>Soft Skills</h4>
          <ul>
            <li>Adaptability</li>
            <li>Customer Service</li>
            <li>Collaboration</li>
            <li>Language/Translation</li>
            <li>Leadership</li>
            <li>Education</li>
            <li>Growth Mindset</li>
          </ul>
        </div>
        <div className="resume-container skills">
        <div className="resume-image">
                <img src={resumeScreenshot} alt="resume"></img>
            </div>
        <div className="resume-link">
          <a href={portfolioResume} target="_blank" rel="noopener noreferrer">
            Download Resume Here
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Resume;

/* <div className="soft-skills">
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
                </div> */
