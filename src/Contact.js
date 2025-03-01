const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="head">Contact Me</h1>
            <form className="contact-form">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" />

                <label>Email:</label>
                <input type="email" placeholder="Enter your email address" />

                <label>Subject:</label>
                <input type="text" placeholder="Enter your subject" />

                <label>Message:</label>
                <textarea placeholder="Enter your message" rows="5"></textarea>

                <div class="button-container">
                    <button class="button">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact