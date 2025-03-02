import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const DriverSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [userData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      const newUser = {
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password
      };
  
      setUserData(newUser);
      console.log("Submitted Data:", newUser);
  
      setEmail('');
      setPassword(''); // Fixed extra space issue
      setFirstname('');
      setLastname('');
    };

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img className="w-16 mb-4" src="https://pngimg.com/d/uber_PNG24.png" alt="" />
          <form onSubmit={submitHandler}> {/* Fixed function call */}
            <h3 className="text-base font-medium mb-2">What's your name</h3>
            <div className='flex gap-3'>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <h3 className="text-base font-medium mb-2 mt-2">Enter Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <button
              type="submit"
              className="bg-[#111] text-white mt-5 font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              Signup
            </button>
          </form>
          <p className="text-center">
            Already have an account? <Link to={"/driver-login"} className="text-blue-600">Login here</Link>
          </p>
        </div>

        <div>
          <p className="text-[10px] leading-tight">
            By creating an account, I agree to the Uber Clone <Link to={"/"} className="text-blue-600">Terms of Use</Link> and acknowledge the <Link to={"/"} className="text-blue-600">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </>
  );
}

export default DriverSignup