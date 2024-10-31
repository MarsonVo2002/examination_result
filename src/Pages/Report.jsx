import React from 'react'
import { mockData } from '../Utils/mockData';
import Chart from "react-apexcharts";
function calculateScoreGroups  (data) {
  const subjects = ["toan", "ngu_van", "ngoai_ngu", "vat_li", "hoa_hoc", "sinh_hoc", "lich_su", "dia_li", "gdcd"];
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
};
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
        borderRadius: 4,
      },
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
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-center text-2xl font-bold mb-4">Student Score Distribution by Subject</h2>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={400} />
    </div>)
}

export default Report