// Project.js
import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import '../App.css';

const Project = ({ title, description, imageUrl, projectUrl, githubUrl }) => {
    return (
        <div className="grid-item">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <img src={imageUrl} alt={`${title} Image`} className="project-image" />
                <div className="overlay">
                    <div className="overlay-title">
                        <div className="title">{title}</div>
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub size={40} className="github-icon" />
                            </a>
                        )}
                    </div>
                    <div className="description">{description}</div>
                </div>
            </a>
        </div>
    );
};

export default Project;


