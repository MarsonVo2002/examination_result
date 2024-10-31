import React from "react";
import { useState } from "react";
const RegistrationCard = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };
  const handleSubmit = () => {
    console.log("Registration Number:", registrationNumber);
    setRegistrationNumber("");
  };
  return (
    <div className="flex flex-col w-[90%]">
      <div className=" p-10 shadow-lg bg-white space-y-4 mt-4">
        <h2 className="font-bold text-2xl">User Registration</h2>
        <div className="flex flex-col space-y-2">
          <p>Registration Number:</p>
          <div className="flex flex-row space-x-2">
            <input
              className="p-2 w-[70%] border-2 rounded"
              placeholder="Enter registration number"
              value={registrationNumber}
              onChange={handleInputChange}
            ></input>
            <button
              className="py-2 px-6 bg-black text-white rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className=" p-10 shadow-lg bg-white space-y-4 mt-4 rounded-3xl">
        <h2 className="font-bold text-2xl">Detailed Scores:</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            Detailed view of search scores here!
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
