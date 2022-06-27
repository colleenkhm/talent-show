import React from 'react';
import profilePhoto from '../../assets/images/profile.jpg';

function About() {
    return (
        <section className="my-5">
            <h2 id="about">About Me</h2>
            <img src={profilePhoto} alt='Colleen Murray' />
            <div className="my-2">
                <p>
                    I developed an interest in language-learning at a young age, which took me from studying Spanish, French, and ASL throughout high school to graduating from Lawrence University with a Bachelor's degree in Linguistics and Classics. During quarantine I discovered that my passion for linguistics had begun to extend beyond natural languages and into the world of programming, which motivated me to pursue a Full Stack Web Development Certificate through Washington University in St. Louis. Upon completion of this program in early July I hope to find a position as a developer that allows me to further my commitment to breaking down communication barriers, improving information accessibility, and inspiring creativity. When not busy coding I enjoy volunteering, traveling with friends, playing violin, and solving crossword puzzles.
                </p>
            </div>
        </section>
    )
}

export default About;