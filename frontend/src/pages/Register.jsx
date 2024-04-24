import React, { useState } from "react";
import { axiosInstance } from "../config/axiosIstance";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axiosInstance.post("/register", { email:email, password:password,firstname:firstName,lastname:lastName });
    console.log(data);
    if (data.status === true) {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg w-96 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={HandleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 block ">firstName</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border border-black mt-1 shadow-sm rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block ">LastName</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border border-black mt-1 shadow-sm rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block ">email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-black mt-1 shadow-sm rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block ">password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-black mt-1 shadow-sm rounded-md"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 transition-colors rounded-md bg-blue-500 hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
