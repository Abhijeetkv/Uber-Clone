import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { DriverDataContext} from '../context/DriverContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DriverSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const [driver, setDriver] = React.useContext(DriverDataContext);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const driverData = {
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          type: vehicleType
        }
      };
  
      const res = await axios.post(`${import.meta.VITE_BASE_URL}/drivers/register`, driverData);

      if (res.status === 200) {
        setDriver(res.data.driver);
        localStorage.setItem('token', res.data.token);
        navigate('/driver-home');
      }

      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');

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

            <h3 className="text-base font-medium mb-2 mt-2">Vehicle Information</h3>
            <input
              type="text"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              type="text"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <input
              type="number"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
            <button
              type="submit"
              className="bg-[#111] text-white mt-5 font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            >
              Create Account
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