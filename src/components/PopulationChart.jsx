import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

function PopulationChart() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => {
        const sortedByPopulation = countries.sort(
          (a, b) => b.population - a.population
        );
        const names = sortedByPopulation.map((country) => country.name.common);
        const populations = sortedByPopulation.map(
          (country) => country.population
        );

        setData({
          series: [{ data: populations }],
          options: {
            ...data.options,
            xaxis: {
              categories: names,
            },
          },
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Davlatlarning Aholisi
      </h1>
      <div id="chart" className="flex justify-center">
        <ReactApexChart
          series={data.series}
          options={data.options}
          type="bar"
          height={4100}
          width={1200}
        />
      </div>
    </div>
  );
}

export default PopulationChart;
