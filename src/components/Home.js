import React from 'react';
import Banner from './Banner';

function Home() {
    return (
        <div>
            <div className="hero">
                <h3 className="descriptors">Linguist. Web Developer. Traveler.</h3>
            </div>
            <Banner className="banner"></Banner>
            <div className="summary">
                <p>Self-motivated developer driven to break down communication barriers, improve information accessibility, and inspire creativity.</p>
            </div>
        </div>
    )
}

export default Home;