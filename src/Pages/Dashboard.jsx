import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Cardd from "./Card";
import Graph from "./Graph";

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState("card");
  const data = [
    {
      label: "Card Show",
      value: "card",
      desc: <Cardd />,
    },
    {
      label: "Graph",
      value: "graph",
      desc: <Graph />,
    },
    {
      label: "3D Card",
      value: "3dCard",
      desc: <div className="mt-10 text-center text-5xl">Coming soooooon!</div>,
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mt-5 text-center capitalize">
        Your Working Hour
      </h1>
      <Tabs value={activeTab} className="mt-10">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Dashboard;
