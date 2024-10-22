import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import '../App.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/scott-reynolds2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={50} /> 
                    </a>
                    <a href="https://github.com/scottreynolds6294" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={50} />
                    </a>
                    <a href="https://stackoverflow.com/users/27921768/scottreynolds6294" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
                    <FaStackOverflow size={50} />
                    </a>
                </div>
                <p>&copy; 2024 Scott Reynolds. All rights reserved.</p>
            </div>
        </footer>
    );
}