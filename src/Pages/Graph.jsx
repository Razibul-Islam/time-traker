import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Graph = () => {
  const data = [
    { title: "Hour", value: 1, color: "#E38627", label: "Hour" },
    { title: "Minute", value: 50, color: "#C13C37", label: "Minute" },
    { title: "Second", value: 20, color: "#6A2135", label: "Second" },
  ];

  return (
    <div className="w-48">
      <PieChart
        data={data}
        label={({ dataEntry }) => dataEntry.label}
        labelStyle={(index) => ({
          fontSize: "15px",
          textAlign: "left",
          fill: "paleturquoise",
          position: "outside",
        })}
        lineWidth={50}
        animate
        animationDuration={500}
        animationEasing="ease-out"
      />
    </div>
  );
};

export default Graph;
