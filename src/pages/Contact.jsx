import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors  ((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
            valid = false;
        }

        if (valid) {
            console.log('Form submitted:', formData);
            alert("Form submitted successfully");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } else {
            setErrors(newErrors);
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;

        if (!formData[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
            }));
        } else if (name === "email" && !emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Please enter a valid email address",
            }));
        }
    };
    return (
        <div className='contact-page'>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                </div>
    
                <div className="submit-button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
    
}