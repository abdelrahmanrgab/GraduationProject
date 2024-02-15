import React, { useState } from "react";
import { validate } from "./validationUtils";
import { useNavigate } from "react-router";

const SignUpForm = ({ toggleForm, toggleModal }) => {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = () => {
    const validationError = validate(newEmail, newPassword);
    if (validationError) {
      setError(validationError);
      return;
    }
    navigate("/designs");
    toggleModal();
  };
  return (
    <>
      <h1>Create Account</h1>
      <div className="modal-form">
        <label htmlFor="newEmail">Email</label>
        <input type="email" id="newEmail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <label htmlFor="newPassword">Password</label>
        <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <div className="message-error">{error}</div>
        <button className="form-button" onClick={handleSignUpClick}>
          Create Account
        </button>
        <div className="sub-button">
          <span> Already have an account? </span>
          <button onClick={toggleForm}>Login</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
