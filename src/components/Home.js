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
                <p>Self-motivated developer with a drive to innovate and collaborate. Committed to breaking down communication barriers, increasing information accessibility, and serving communities in need.</p>
            </div>
        </div>
    )
}

export default Home;