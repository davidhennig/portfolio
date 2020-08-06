import React from "react";


const Contact = () => {



    return (
        <div className="contact-wrapper">
            <div className="contact">
                <div className="links">
                    <div className="link">
                        <a href="mailto:DavidJHennig@outlook.com">
                            <button>Send an email</button>
                        </a>
                    </div>
                    <div className="link">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/davidhennig/">
                            <button>Connect on LinkedIn</button>
                        </a>
                    </div>
                    <div className="link">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/davidhennig">
                            <button>View my Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;