import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaUser,
    FaCommentAlt,
    FaCheck,
    FaSpinner,
} from "react-icons/fa";

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        error: null,
    });

    // Form field focus state
    const [focusedField, setFocusedField] = useState(null);

    // Form validation state
    const [validation, setValidation] = useState({
        name: { valid: true, message: "" },
        email: { valid: true, message: "" },
        subject: { valid: true, message: "" },
        message: { valid: true, message: "" },
    });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    // Contact information
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "your.email@example.com",
            link: "mailto:your.email@example.com",
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+1 (123) 456-7890",
            link: "tel:+11234567890",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "City, Country",
            link: null,
        },
    ];

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validate field on change
        validateField(name, value);
    };

    // Handle field focus
    const handleFocus = (field) => {
        setFocusedField(field);
    };

    // Handle field blur
    const handleBlur = () => {
        setFocusedField(null);
    };

    // Validate a single field
    const validateField = (name, value) => {
        let isValid = true;
        let message = "";

        switch (name) {
            case "name":
                if (value.trim().length < 2) {
                    isValid = false;
                    message = "Name must be at least 2 characters";
                }
                break;
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = "Please enter a valid email address";
                }
                break;
            case "subject":
                if (value.trim().length < 3) {
                    isValid = false;
                    message = "Subject must be at least 3 characters";
                }
                break;
            case "message":
                if (value.trim().length < 10) {
                    isValid = false;
                    message = "Message must be at least 10 characters";
                }
                break;
            default:
                break;
        }

        setValidation((prev) => ({
            ...prev,
            [name]: { valid: isValid, message },
        }));

        return isValid;
    };

    // Validate all fields
    const validateForm = () => {
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            const fieldIsValid = validateField(key, formData[key]);
            if (!fieldIsValid) isValid = false;
        });

        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submission
        if (!validateForm()) {
            return;
        }

        setFormStatus({ submitted: false, submitting: true, error: null });

        // Simulate form submission
        setTimeout(() => {
            // In a real application, you would send the form data to a server here
            console.log("Form submitted:", formData);
            setFormStatus({ submitted: true, submitting: false, error: null });
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset form status after 8 seconds
            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    submitting: false,
                    error: null,
                });
            }, 8000);
        }, 1500);
    };

    // Get icon for form field
    const getFieldIcon = (fieldName) => {
        switch (fieldName) {
            case "name":
                return <FaUser />;
            case "email":
                return <FaEnvelope />;
            case "subject":
                return <FaCommentAlt />;
            case "message":
                return <FaCommentAlt />;
            default:
                return null;
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <motion.div
                    className="section__header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section__title">Contact Me</h2>
                    <p className="section__subtitle">
                        Get in touch for opportunities or just to say hello
                    </p>
                </motion.div>

                <div className="contact__container">
                    <motion.div
                        className="contact__info"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                className="contact__info-item glass-card"
                                variants={itemVariants}
                            >
                                <div className="contact__info-icon">
                                    {item.icon}
                                </div>
                                <div className="contact__info-content">
                                    <h3 className="contact__info-title">
                                        {item.title}
                                    </h3>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            className="contact__info-value"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="contact__info-value">
                                            {item.value}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="contact__form-container glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {formStatus.submitted ? (
                                <motion.div
                                    className="contact__success"
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        className="contact__success-icon-container"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.2,
                                        }}
                                    >
                                        <FaCheck className="contact__success-icon" />
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Message Sent!
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        Thank you for reaching out. I'll get
                                        back to you as soon as possible.
                                    </motion.p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    className="contact__form"
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {Object.keys(formData).map(
                                        (field, index) => (
                                            <motion.div
                                                className="contact__form-group"
                                                key={field}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <label
                                                    htmlFor={field}
                                                    className="contact__form-label"
                                                >
                                                    {field
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        field.slice(1)}
                                                </label>
                                                <div
                                                    className={`contact__form-input-container ${
                                                        focusedField === field
                                                            ? "focused"
                                                            : ""
                                                    } ${
                                                        !validation[field].valid
                                                            ? "invalid"
                                                            : ""
                                                    }`}
                                                >
                                                    <span className="contact__form-icon">
                                                        {getFieldIcon(field)}
                                                    </span>
                                                    {field === "message" ? (
                                                        <textarea
                                                            id={field}
                                                            name={field}
                                                            value={
                                                                formData[field]
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            onFocus={() =>
                                                                handleFocus(
                                                                    field
                                                                )
                                                            }
                                                            onBlur={handleBlur}
                                                            className="contact__form-textarea"
                                                            placeholder={`Your ${
                                                                field
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                field.slice(1)
                                                            }`}
                                                            rows="5"
                                                            required
                                                        ></textarea>
                                                    ) : (
                                                        <input
                                                            type={
                                                                field ===
                                                                "email"
                                                                    ? "email"
                                                                    : "text"
                                                            }
                                                            id={field}
                                                            name={field}
                                                            value={
                                                                formData[field]
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            onFocus={() =>
                                                                handleFocus(
                                                                    field
                                                                )
                                                            }
                                                            onBlur={handleBlur}
                                                            className="contact__form-input"
                                                            placeholder={`Your ${
                                                                field
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                field.slice(1)
                                                            }`}
                                                            required
                                                        />
                                                    )}
                                                </div>
                                                {!validation[field].valid && (
                                                    <motion.div
                                                        className="contact__form-error"
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: "auto",
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                    >
                                                        {
                                                            validation[field]
                                                                .message
                                                        }
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        )
                                    )}

                                    <motion.button
                                        type="submit"
                                        className="btn btn--primary contact__form-submit"
                                        disabled={formStatus.submitting}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {formStatus.submitting ? (
                                            <>
                                                <FaSpinner className="icon-spin" />{" "}
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane /> Send Message
                                            </>
                                        )}
                                    </motion.button>

                                    {formStatus.error && (
                                        <div className="contact__form-error">
                                            {formStatus.error}
                                        </div>
                                    )}
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
