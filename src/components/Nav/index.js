import React from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
        contactSelected,
        setContactSelected,
    } = props
    
    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">
                    Colleen Murray
                </a>
            </h1>
            <nav>
                <ul className="flex-row nav-bar">
                    {pages.map((page) => (
                        <li>
                            <a key={page.id} className={`mx-2 ${currentPage.name === page.name && !contactSelected && 'navActive'}`} href={'#' + category.name}
                            onClick={() => {
                                setCurrentPage(page);
                                setContactSelected(false);
                            }}></a>
                        </li>
                    ))}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;