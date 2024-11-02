import React, { useEffect, useState } from "react";
import { mockData } from "../Utils/mockData";
import Chart from "react-apexcharts";
import { subjects } from "../Utils/Subjects";
import axios from "axios";

const Report = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://g-scores-1.onrender.com/students/feature-report"
        );
        const response1 = await axios.get(
          "https://g-scores-1.onrender.com/students/top-ten"
        );
        console.log(response1.data);
        setTopTen(response1.data);
        const subjects = Object.keys(response.data);
        console.log(subjects);
        const excellentData = subjects.map(
          (subject) => response.data[subject]?.Excellent || 0
        );
        const goodData = subjects.map(
          (subject) => response.data[subject]?.Good || 0
        );
        const averageData = subjects.map(
          (subject) => response.data[subject]?.Average || 0
        );
        const poorData = subjects.map(
          (subject) => response.data[subject]?.Poor || 0
        );
        console.log(excellentData);
        setChartData({
          series: [
            { name: "Excellent", data: excellentData },
            { name: "Good", data: goodData },
            { name: "Average", data: averageData },
            { name: "Poor", data: poorData },
          ],
          options: {
            xaxis: {
              categories: subjects,
            },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [topten, setTopTen] = useState([]);
  const [chartData, setChartData] = useState({
    series: [
      { name: "Excellent", data: [] },
      { name: "Good", data: [] },
      { name: "Average", data: [] },
      { name: "Poor", data: [] },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 0,
          columnWidth: "25%",
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: [],
        title: {
          text: "Subjects",
        },
      },
      yaxis: {
        title: {
          text: "Number of Students",
         
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
          radius: 99,
        },
      },
    },
  });

  return (
    <div className="flex flex-col w-[90%] p-10 space-y-8">
      <div className="p-10 shadow-lg bg-white rounded">
        <h2 className="text-center text-2xl font-bold mb-4">
          Student Score Distribution by Subject
        </h2>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={400}
        />
      </div>
      <div>
        <div>
          <div className="w-full overflow-auto">
            <div className="grid sm:text-[9px] lg:text-[16px] text-[8px] grid-cols-11 bg-gray-100 border border-gray-300 text-center p-4 font-bold">
              {subjects.map((subject) => (
                <div>{subject.name}</div>
              ))}
            </div>

            {topten.map((subject) => (
              <div className="grid lg:text-[14px] sm:text-[8px] text-[7px] grid-cols-11 bg-white border border-gray-300 text-center p-4">
                <div>{subject.sbd}</div>
                <div>{subject.toan ?? "-"}</div>
                <div>{subject.ngu_van ?? "-"}</div>
                <div>{subject.ngoai_ngu ?? "-"}</div>
                <div>{subject.vat_li ?? "-"}</div>
                <div>{subject.hoa_hoc ?? "-"}</div>
                <div>{subject.sinh_hoc ?? "-"}</div>
                <div>{subject.lich_su ?? "-"}</div>
                <div>{subject.dia_li ?? "-"}</div>
                <div>{subject.gdcd ?? "-"}</div>
                <div>{subject.ma_ngoai_ngu ?? "-"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
