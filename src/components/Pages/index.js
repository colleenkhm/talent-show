import React from 'react';

function Pages(props) {
    const { currentSection } = props;

    return (
        <section>
            <h1>{currentSection.name}</h1>
        </section>
    )
}

export default Pages;