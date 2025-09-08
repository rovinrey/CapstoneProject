import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/AuthContext'

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth() as { login: (data: { email: string; role: string; token: string }) => void };
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Mock authentication (replace with backend call)
    let role = form.email.includes("admin") ? "admin" : "beneficiary";
    login({ email: form.email, role, token: "mock-token" });

    if (role === "admin") navigate("/admin");
    else navigate("/beneficiary");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
