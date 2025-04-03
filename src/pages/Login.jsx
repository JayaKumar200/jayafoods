import { useState } from "react";
import "tailwindcss/tailwind.css";

const Login = ({ userName }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setError("");
    if (!validateEmail(loginEmail)) {
      setError("Enter a valid email address!");
      return;
    }
    if (loginPassword.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <h2 className="text-lg text-gray-600 mt-2">Welcome, {userName || "Guest"}!</h2>

        <div className="mt-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            placeholder="Enter your Email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            placeholder="Enter your Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-4 font-semibold hover:bg-yellow-400 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
