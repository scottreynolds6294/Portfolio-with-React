import React from 'react';
import NavTabs from './NavTabs';
import '../App.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>My Portfolio</h1>
                <NavTabs />
            </div>
        </header>
    );
}

export default Header;