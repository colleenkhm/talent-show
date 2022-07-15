import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Work() {

    return (
        <section class="section" id="work">
            <h2>Projects</h2>
        <div class="work-container">
            <a class="flex-item" id="dubcity" href="https://dub-city-vr-tournaments.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div>
                    <h4>DubCity VR Tournaments</h4>
                    <p>React/GraphQL</p>
                </div>
            </a>
            <a class="flex-item" id="sleepily" href="https://sleepy-cove-47573.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div>
                    <h4>Sleepily</h4>
                    <p>Node/Express/MySQL</p>
                </div>
            </a>
            <a class="flex-item" id="biwoc-health" href="https://colleenkhm.github.io/biwoc-health/" target="_blank" rel="noopener noreferrer">
                <div class="span">
                    <h4>BIWOC Health (Mock-Up, Site Pre-Deployment)</h4>
                    <p>React/MongoDB</p>
                </div>
            </a>
            <a class="flex-item" id="team-profile-generator" href="https://colleenkhm.github.io/team-profile-generator" target="_blank" rel="noopener noreferrer">
                <div>
                    <h4>Team Profile Generator</h4>
                    <p>Node/Inquirer/Jest</p>
                </div>
            </a>
            <a class="flex-item" id="work-day-scheduler" href="https://colleenkhm.github.io/run-my-life/" target="_blank" rel="noopener noreferrer">
                <div>
                    <h4>Timely</h4>
                    <p>HTML/CSS/JavaScript</p>
                </div>
            </a>
            <a class="flex-item" id="guess-that-movie" href="https://colleenkhm.github.io/guess-that-movie/" target="_blank" rel="noopener noreferrer">
                <div>
                    <h4>Guess That Movie</h4>
                    <p>jQuery/Web APIs</p>
                </div>
            </a>
        </div>
        
    </section>
    )
}

export default Work;

 /* <h2 id="portfolio">Portfolio</h2>
            <div>
                <div className="flex-row">
                    {projects.map((project, i) => (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                    </a>
                    ))}
                </div>
            </div> */