import React, { useState } from "react";
import "../styles/SignIn.css";
import { RegisterUser } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { useUser } from '../context/UserContext';

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const isLongEnough = password.length >= 8;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const response = await RegisterUser(email, name, password);
    setUser({ name });
    console.log("Response:", response);
    navigate('/');
  };

  return (
    <div className="sign-in-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ul className="criteria-list">
            <li className={isLongEnough ? "valid" : "invalid"}>
              {isLongEnough ? "✅" : "❌"} At least 8 characters
            </li>
            <li className={hasLetter ? "valid" : "invalid"}>
              {hasLetter ? "✅" : "❌"} At least one letter
            </li>
            <li className={hasNumber ? "valid" : "invalid"}>
              {hasNumber ? "✅" : "❌"} At least one number
            </li>
            <li className={hasSpecialChar ? "valid" : "invalid"}>
              {hasSpecialChar ? "✅" : "❌"} At least one special character
            </li>
          </ul>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
