import { useState } from "react";
import { motion } from "framer-motion";
import admin from "../assets/jk.jpg";
import githubLogo from "../assets/github.png"; 
const Admin = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    window.location.href = `mailto:vjayakumar850@gmail.com?subject=Contact from Website&body=${encodeURIComponent(
      message
    )}`;
    setMessage("");
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Section */}
      <motion.div 
        className="flex flex-col items-center text-center mt-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={admin} alt="Jayakumar" className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-500" />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">
          Hi, I'm <span className="text-blue-400">Jayakumar</span> 👋
        </h1>
        <p className="text-gray-300 text-sm sm:text-base mt-2">Web Developer | Frontend Enthusiast | Tech Explorer</p>
      </motion.div>


      <motion.div 
        className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-lg mt-6 text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-200"><strong>📞 Contact:</strong> 7358906752</p>
        <p className="text-gray-200"><strong>📧 Email:</strong> <a href="mailto:vjayakumar850@gmail.com" className="text-blue-400 hover:underline">vjayakumar850@gmail.com</a></p>
        <p className="text-gray-200"><strong>📸 Instagram:</strong> <a href="https://www.instagram.com/kumar_.117" target="_blank" className="text-blue-400 hover:underline">@kumar_.117</a></p>
      </motion.div>


      <motion.div
        className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-lg mt-6 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-semibold text-center">💻 My GitHub</h3>
        <a href="https://github.com/JayaKumar200" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="w-16 h-16 mt-2 transition-transform transform hover:scale-110" />
        </a>
      </motion.div>

      <motion.div 
        className="mt-6 w-full max-w-lg bg-gray-800 p-4 rounded-lg shadow-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <textarea 
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <motion.button 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 transition-all duration-300"
          onClick={handleSendMessage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to Contact 📩
        </motion.button>
      </motion.div>

      <motion.div 
        className="w-full max-w-lg mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-lg font-semibold mb-2 text-center">📍 Our Location: Madurai, Alanganallur</h3>
        <iframe 
          title="Madurai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8017765272643!2d78.02072637408998!3d9.997801790114306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cde9029e86e7%3A0xb63b8c8d286d7309!2sAlanganallur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711891387364!5m2!1sen!2sin"
          width="100%"
          height="250"
          className="rounded-lg shadow-md"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Admin;
