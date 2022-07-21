import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import profilePhoto from '../assets/images/profile.jpg';
import Banner from './Banner';

function About() {
    return (
        <section className="my-5">
            <h2 id="about">About Me</h2>
            <article class="about-container">
                <img class="about-photo" src={profilePhoto} alt='Colleen Murray' />
                <div class="about-bio">
                    <p>
                        I developed an interest in language-learning at a young age, which took me from studying Spanish, French, and ASL throughout high school to graduating from Lawrence University with a Bachelor's degree in Linguistics and Classics. During quarantine I discovered that my passion for linguistics had begun to extend beyond natural languages and into the world of coding, which motivated me to pursue a Full Stack Web Development Certificate through Washington University in St. Louis. I am in search of a position as a software developer or engineer that allows me to further my commitment to breaking down communication barriers, improving information accessibility, and inspiring creativity. When not busy coding I enjoy volunteering, traveling with friends, playing violin, and solving crossword puzzles.
                    </p>
                    <p>
                        Though originally from Portland, Oregon, my curiosity about the world has led me to college in Appleton, Wisconsin, to studying abroad in Athens, Greece, to moving out to St. Louis, Missouri for a year-long contract on a volunteer emergency response team, and currently to returning to my roots in the food service industry as I pursue my new career path here in St. Louis. I have a great community here and love the city, but I would be willing to relocate for the right position!
                    </p>
                </div>
            </article>
        </section>
    )
}

export default About;