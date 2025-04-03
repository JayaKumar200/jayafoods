import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = ({ setUserName, userName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSignin = () => {
    if (userName.length < 7) {
      alert("Username must be at least 7 characters long!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    alert("Sign-in successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign In</h1>
        <h2 className="text-lg text-center text-gray-600 mb-6">Welcome to JK Instamat</h2>

        <input
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          type="submit"
          onClick={handleSignin}
        >
          Sign In
        </button>

        <h3 className="text-center text-gray-600 mt-4">
          Already have an account? 
          <Link className="text-blue-500 hover:underline ml-1" to="/login">
            Login Here
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
