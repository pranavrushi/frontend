import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [subject, setSubject] = useState("");

  const onSubmitBtnClick = async (e) => {
    e.preventDefault();
    alert("you clicked on submit button");
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(msg);
  };
  return (
    <section className={`mb-4 ${styles.section}`}>
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact Us
      </h2>
      <p
        className={`text-center w-responsive mx-auto mb-5 ${styles.contact_para}`}
      >
        SIME as a society has a leading edge for innovation, sharing of
        knowledge, ideas, experiences, and exploring our ways to understand the
        recent engineering and industrial environment trends.
        <br />
        <br />
        Want to tell us something? Got a query? Would you mind filling in the
        details and your message below?
        <br />
        <br />
        SIME welcomes you to connect with us. Thank you!
      </p>

      <div className="row">
        <div
          className={`justify-content-center col-lg-8 ${styles.google_sheet}`}
        >
          <form
            onSubmit={onSubmitBtnClick}
            id="google-sheet"
            name="google-sheet"
            method="POST"
            autoComplete="off"
          >
            <div className="row">
              <div className="col-md-6 ">
                <div className="md-form mb-0 ">
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Email-ID"
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    name="Number"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    name="Subject"
                    className="form-control"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    name="Message"
                    rows="3"
                    className="form-control md-textarea"
                    placeholder="Message"
                    value={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-info my-2" type="submit">
                Send
              </button>
            </div>
            <div className="status"></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
