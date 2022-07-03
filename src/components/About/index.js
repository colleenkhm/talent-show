import React from 'react';
import profilePhoto from '../../assets/images/profile.jpg';

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
                </div>
            </article>
        </section>
    )
}

export default About;