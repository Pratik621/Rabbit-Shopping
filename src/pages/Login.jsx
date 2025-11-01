import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/login.webp"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen ">
      {/* LEFT SIDE - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full bg-white p-8 max-w-md rounded-lg shadow-sm"> 
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl mb-6 font-bold text-center">Hey there! 👋</h2>
          <p className="text-center mb-6">
            Enter your username and password to access your account.
          </p>

          <div className="mb-4">
            <label className="block text-sm mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?
            <Link
              to="/register"
              className="text-blue-600 hover:underline ml-1"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE - Image */}
      <div className="hidden md:block w-1/2 bg-white">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={loginImage} alt="Login" className="h-[500px] w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
