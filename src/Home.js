const Home = ({ typedRef }) => {
    return (
        <div className="container">
            <div className="hero">
                <div className="content">
                    <h4>Ayush Lochan</h4>
                    <h1>
                        I'm a <span ref={typedRef} className="text-rotate"></span>
                    </h1>
                    <p className="description">
                        Passionate Web Developer skilled in crafting elegant solutions,
                        transforming ideas into functional and user-friendly web experiences.
                    </p>
                    <button className="button">Download Resume</button>
                </div>

                <div className="image-container">
                    <div className="image-wrapper">
                        <img
                            src="/Profile.jpg"
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;