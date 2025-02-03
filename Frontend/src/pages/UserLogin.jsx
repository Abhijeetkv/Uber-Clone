import React,{useState} from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email)
  }

  return (
    <>
      <div className="p-7 flex flex-col justify-between h-screen">
       <div>
       <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => submitHandler()}>
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
        >Login</button>
      </form>
      <p className="text-center">New here?  <Link to={"/signup"} className="text-blue-600">Create new Account</Link></p>
       </div>

       <div>
        <button
           className="bg-[#10b461] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        >Sign in as Driver</button>
       </div>
      </div>
    </>
  );
};

export default UserLogin;
