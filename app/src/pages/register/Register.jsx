import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

let initialValue = {
  username: "",
  email: "",
  country: "",
  city: "",
  phone: "",
  password: "",
};
export default function Register() {
  const [userData, setUserData] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://booking-app-p324.onrender.com/api/auth/register",
        JSON.stringify(userData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setUserData(initialValue));
    navigate("/login");
  };

  return (
    <div className="background">
      <div className="Register">
        <div className="lContainer">
          <p className="head-line">Register</p>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Enter Username"
            className="lInput"
          />

          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter you email"
            className="lInput"
          />

          <input
            type="text"
            onChange={handleChange}
            name="country"
            placeholder="Enter country"
            className="lInput"
          />

          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="Enter city"
            className="lInput"
          />

          <input
            type="number"
            onChange={handleChange}
            name="phone"
            placeholder="Enter phone number"
            className="lInput"
          />

          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Enter password"
            className="lInput"
          />
          <button onClick={handleSubmit} className="lButton">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

