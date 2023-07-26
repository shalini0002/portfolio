import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
  useEffect(() => {
    if(status === 'success') clearFields()
  }, [status]) ;

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearFields = () => {
    setEmail("");
  };
  return (
    <div className="col-md-12">
      <div className="newsletter-bx">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-xl-5">
            <h3>Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </div>
          <div className="col-md-6 col-xl-7">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
