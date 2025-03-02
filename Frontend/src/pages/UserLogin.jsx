import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from 'axios';

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // New state for error messages

  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before a new request

    const userData = { email, password };

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if (res.status === 200) {
        setUser(res.data.user);
        navigate('/home');
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.log(error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
          
          {error && <p className="text-red-500 mb-2">{error}</p>} {/* Error Message */}

          <form onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />

            <h3 className="text-lg font-medium m-2">Enter Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />

            <button
              className="bg-[#111] text-white mt-5 font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              Login
            </button>
          </form>

          <p className="text-center">New here? <Link to={"/signup"} className="text-blue-600">Create new Account</Link></p>
        </div>

        <div>
          <Link
            to='/driver-login'
            className="bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          >
            Sign in as Driver
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
