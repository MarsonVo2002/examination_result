import React from "react";
import { useState, useEffect } from "react";
import { mockData } from "../Utils/mockData";
const SearchPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };
  const handleSubmit = () => {
    console.log(registrationNumber);
    const temp = data.find((item) => item.sbd === registrationNumber);
    if (temp !== undefined) {
      console.log(temp);
      setResult(temp);
    } else {
      setResult(null);
    }
  };
  const [data, setData] = useState([]);
  const [result, setResult] = useState(null);
  useEffect(() => {
    setData(mockData);
  }, []);
  return (
    <div className="flex flex-col w-[90%] p-10 space-y-8">
      <div className="flex flex-col p-10 shadow-lg bg-white space-y-4 rounded">
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
      <div className="flex flex-col p-10 shadow-lg bg-white space-y-4 rounded">
        <h2 className="font-bold text-2xl">Detailed Scores:</h2>
        <div className="flex flex-col space-y-2">
          {result === null ? (
            <div className="flex flex-row space-x-2">
              Detailed view of search scores here!
            </div>
          ) : (
            <div>
             
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-center">
                    <th className="border border-gray-300 p-4">SBD</th>
                    <th className="border border-gray-300 p-4">Toán</th>
                    <th className="border border-gray-300 p-4">Ngữ Văn</th>
                    <th className="border border-gray-300 p-4">Ngoại Ngữ</th>
                    <th className="border border-gray-300 p-4">Vật Lý</th>
                    <th className="border border-gray-300 p-4">Hóa Học</th>
                    <th className="border border-gray-300 p-4">Sinh Học</th>
                    <th className="border border-gray-300 p-4">Lịch Sử</th>
                    <th className="border border-gray-300 p-4">Địa Lý</th>
                    <th className="border border-gray-300 p-4">GDCD</th>
                    <th className="border border-gray-300 p-4">Mã Ngoại Ngữ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 text-center">
                    <td className="border border-gray-300 p-4">
                      {result?.sbd}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.toan}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.ngu_van}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.ngoai_ngu}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.vat_li}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.hoa_hoc}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.sinh_hoc}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.lich_su}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.dia_li}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.gdcd}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {result?.ma_ngoai_ngu}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
