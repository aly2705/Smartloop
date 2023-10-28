import React, { useState } from "react";
import "./login.css";

import { useAuth } from "../../context/auth-context";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitFrom = async (e) => {
    e.preventDefault();

    //console.log(email, password);

    if (!email.trim() || !password.trim()) return;

    try {
      await login(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmitFrom} className="login-form">
        <h2>Conecteaza-te</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Parola</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
