import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__copyright">
                        <p>
                            &copy; {currentYear} Omanshu Mahawar. All rights reserved.
                        </p>
                    </div>

                    <div className="footer__credits">
                        <p>
                            Built using React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
