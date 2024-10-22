// Portfolio.js
import React from 'react';
import Project from '../components/Project'; 

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <section className="my-work mb-5" id="work">
                <div className="my-work-row">
                    <div className="portfolio-content">
                        <div className="images-grid d-grid gap-4">
                        <Project
                            title="Tech Blog Demo"
                            description="Express.js, Sequelize, Handlebars"
                            imageUrl="/images/tech-blog.jpg"
                            projectUrl="https://tech-blog-ikrx.onrender.com/"
                            githubUrl="https://github.com/scottreynolds6294/Tech-Blog"
                        />
                        <Project
                            title="Weather Dashboard"
                            description="JavaScript"
                            imageUrl="/images/weather-dashboard.jpg"
                            projectUrl="https://scottreynolds6294.github.io/Weather-Dashboard/"
                            githubUrl="https://github.com/scottreynolds6294/Weather-Dashboard"
                        />
                        <Project
                            title="Movie Database App"
                            description="Server Side API's"
                            imageUrl="/images/movie-database.jpg"
                            projectUrl="https://natale565.github.io/movie-night/"
                            githubUrl="https://github.com/natale565/movie-night"
                        />
                        <Project
                            title="Note Taking App"
                            description="Back End Server Configuration"
                            imageUrl="/images/notes-app.jpg"
                            projectUrl="https://note-taker-app-in84.onrender.com/"
                            githubUrl="https://github.com/scottreynolds6294/Note-Taker-App"
                        />
                        <Project
                            title="E-Commerce Back End"
                            description="PostgreSQL"
                            imageUrl="/images/ecommerce-backend.jpg"
                            projectUrl="https://app.screencastify.com/v3/watch/qKKIHDRTjmB1yXZDvGhE"
                            githubUrl="https://github.com/scottreynolds6294/E-Commerce-Back-End"
                        />
                        <Project
                            title="Social Network RESTful API"
                            description="NoSQL, MongoDB, Express.js"
                            imageUrl="/images/RESTful-API.jpg"
                            projectUrl="https://www.youtube.com/watch?v=jrtP9iGRfHw"
                            githubUrl="https://github.com/scottreynolds6294/Social-Networking-API"
                        />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
