import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import { LogInUser } from "../services/apiService";
import { useUser } from "../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await LogInUser(email, password);
    console.log("Logindata2: ", response);
    if (response) {
      setUser({name : response.user.name});
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="invalid">{error}</div>}
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
