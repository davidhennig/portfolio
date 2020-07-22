import React from "react";


const Contact = () => {



    return (
        <div className="contact-wrapper">
            <div className="contact">
                <div className="links">
                    <div className="link">
                        <p>Email:</p>
                        <a href="mailto:DavidJHennig@gmail.com">
                            <button>Send an email</button>
                        </a>
                    </div>
                    <div className="link">
                        <p>LinkedIn: </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/davidhennig/">
                            <button>Connect on LinkedIn</button>
                        </a>
                    </div>
                    <div className="link">
                        <p>Github: </p>
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