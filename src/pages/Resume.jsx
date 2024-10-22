import React from "react";
export default function Resume () {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <p>
                Download my resume: {" "}
                <a href="/resume/Scott-Reynolds-Resume.pdf" download="Scott-Reynolds-Resume.pdf">
                    Click here to download
                </a>
            </p>
            <h2>Proficiencies</h2>
            <ul>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>React</li>
                <li>MERN Stack</li>
            </ul>
        </div>
    );
}