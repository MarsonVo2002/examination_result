import React from "react";
import { useState, useEffect } from "react";
import { mockData } from "../Utils/mockData";
import { subjects } from "../Utils/Subjects";
import axios from "axios";
const SearchPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };
  const handleSubmit = async () => {
    console.log(registrationNumber);
    try {
      const response = await axios.get(
        `https://g-scores-1.onrender.com/students/${registrationNumber}`
      );
      console.log(response.data);
      setResult(response.data);
      setError(false);
    } catch (error) {
      setResult(null);
      setError(true)
    }
  };
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);
  useEffect(() => {
    setData(mockData);
  }, []);
  return (
    <div className="flex flex-col w-full p-10 space-y-8 min-h-screen">
      <div className="flex flex-col p-10 shadow-lg bg-white space-y-4 rounded sm:text-[9px] lg:text-[16px] text-[8px]">
        <h2 className="font-bold text-2xl">User Registration</h2>
        <div>
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
          {error && (<p className="text-red-600">No result found</p>)}
        </div>
      </div>
      <div className="flex flex-col p-10 shadow-lg bg-white space-y-4 rounded">
        <h2 className="font-bold text-2xl">Detailed Scores:</h2>
        <div className="flex flex-col space-y-2">
          {result === null ? (
            <div className="flex flex-row space-x-2">
              Detailed view of search scores here!
            </div>
          ) : (
            <div>
              <div className="w-full overflow-auto">
                <div className="sm:text-[9px] lg:text-[16px] text-[8px] grid grid-cols-11 bg-gray-100 border border-gray-300 text-center p-4 font-bold">
                  {subjects.map((subject) => (
                    <div>{subject.name}</div>
                  ))}
                </div>
                <div className="grid lg:text-[14px] sm:text-[8px] text-[7px] grid-cols-11 bg-white border border-gray-300 text-center p-4">
                  <div>{result.sbd}</div>
                  <div>{result.toan ?? "-"}</div>
                  <div>{result.ngu_van ?? "-"}</div>
                  <div>{result.ngoai_ngu ?? "-"}</div>
                  <div>{result.vat_li ?? "-"}</div>
                  <div>{result.hoa_hoc ?? "-"}</div>
                  <div>{result.sinh_hoc ?? "-"}</div>
                  <div>{result.lich_su ?? "-"}</div>
                  <div>{result.dia_li ?? "-"}</div>
                  <div>{result.gdcd ?? "-"}</div>
                  <div>{result.ma_ngoai_ngu ?? "-"}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
