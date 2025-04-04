
const Contact = () => {
  return (
      <div className="contact-container">
          <h1 className="head">Get in Touch</h1>
          <form className="contact-form">
              <div className="form-group">
                  <label>
                      <i className="icon fas fa-user"></i>
                      Name
                  </label>
                  <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="form-input"
                  />
              </div>

              <div className="form-group">
                  <label>
                      <i className="icon fas fa-envelope"></i>
                      Email
                  </label>
                  <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="form-input"
                  />
              </div>

              <div className="form-group">
                  <label>
                      <i className="icon fas fa-tag"></i>
                      Subject
                  </label>
                  <input 
                      type="text" 
                      placeholder="Enter your subject" 
                      className="form-input"
                  />
              </div>

              <div className="form-group">
                  <label>
                      <i className="icon fas fa-comment"></i>
                      Message
                  </label>
                  <textarea 
                      placeholder="Enter your message" 
                      rows="5" 
                      className="form-input"
                  ></textarea>
              </div>

              <div className="button-container">
                  <button className="send-button">
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                  </button>
              </div>
          </form>
      </div>
  );
};

export default Contact;