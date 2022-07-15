import React from 'react';
import portfolioResume from '../assets/portfolio-resume.pdf';
import resumeScreenshot from '../assets/resume-screenshot.png';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Resume() {
    
    return (
        <div class="resume-container">
            <div class="resume-link">
                <img src={resumeScreenshot} alt="resume"></img>
            </div>
            <div class="resume-image">
                <a href={portfolioResume} target="_blank" rel="noopener noreferrer">Download Resume Here</a>
            </div>
        </div>
    )
}

export default Resume;