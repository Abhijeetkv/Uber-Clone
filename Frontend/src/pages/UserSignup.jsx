import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState(""); // New state for error handling

  const navigate = useNavigate();
  const { user, setUser } = useContext(userDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before a new request

    const newUser = {
      fullname: { firstname, lastname },
      email,
      password,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (res.status === 201) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate('/home');
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              placeholder="First name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <h3 className="text-base font-medium mb-2 mt-2">What's your email</h3>
          <input
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2 mt-2">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error message */}

          <button
            type="submit"
            className="bg-[#111] text-white mt-5 font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          >
            Create account
          </button>
        </form>

        <p className="text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          By creating an account, I agree to the Uber Clone <Link to="/" className="text-blue-600">Terms of Use</Link> and acknowledge the <Link to="/" className="text-blue-600">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
