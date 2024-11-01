import React from "react";
import { mockData } from "../Utils/mockData";
import Chart from "react-apexcharts";
import { subjects } from "../Utils/Subjects";
function calculateScoreGroups(data) {
  const subjects = [
    "toan",
    "ngu_van",
    "ngoai_ngu",
    "vat_li",
    "hoa_hoc",
    "sinh_hoc",
    "lich_su",
    "dia_li",
    "gdcd",
  ];
  const scoreGroups = {
    ">=8": {},
    "6-7.99": {},
    "4-5.99": {},
    "<4": {},
  };

  subjects.forEach((subject) => {
    scoreGroups[">=8"][subject] = 0;
    scoreGroups["6-7.99"][subject] = 0;
    scoreGroups["4-5.99"][subject] = 0;
    scoreGroups["<4"][subject] = 0;

    data.forEach((student) => {
      const score = student[subject];
      if (score !== null && score !== undefined) {
        if (score >= 8) scoreGroups[">=8"][subject]++;
        else if (score >= 6) scoreGroups["6-7.99"][subject]++;
        else if (score >= 4) scoreGroups["4-5.99"][subject]++;
        else scoreGroups["<4"][subject]++;
      }
    });
  });

  return scoreGroups;
}
const Report = () => {
  const groupedData = calculateScoreGroups(mockData);

  const chartOptions = {
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
      categories: Object.keys(groupedData[">=8"]),
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
  };

  const chartSeries = [
    {
      name: ">= 8",
      data: Object.values(groupedData[">=8"]),
    },
    {
      name: "6 - 7.99",
      data: Object.values(groupedData["6-7.99"]),
    },
    {
      name: "4 - 5.99",
      data: Object.values(groupedData["4-5.99"]),
    },
    {
      name: "< 4",
      data: Object.values(groupedData["<4"]),
    },
  ];

  return (
    <div className="flex flex-col w-[90%] p-10 space-y-8">
      <div className="p-10 shadow-lg bg-white rounded">
        <h2 className="text-center text-2xl font-bold mb-4">
          Student Score Distribution by Subject
        </h2>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={400}
        />
      </div>
      <div>
        <div>
          <div className="w-full overflow-auto">
            <div className="grid grid-cols-11 bg-gray-100 border border-gray-300 text-center p-4 font-bold">
              {subjects.map((subject) => (
                <div>{subject.name}</div>
              ))}
            </div>
           
              {mockData.map((subject) => (
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-11 bg-white border border-gray-300 text-center p-4">
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
