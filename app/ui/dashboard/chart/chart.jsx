"use client";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./chart.module.css";

const data = [
  {
    name: "Mon",
    visit: 1800,
    click: 2550,
  },
  {
    name: "Tue",
    visit: 4648,
    click: 5750,
  },
  {
    name: "Wed",
    visit: 2578,
    click: 6185,
  },
  {
    name: "Thu",
    visit: 1268,
    click: 3495,
  },
  {
    name: "Fri",
    visit: 5412,
    click: 6498,
  },
  {
    name: "Sat",
    visit: 3154,
    click: 5972,
  },
];
export default function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border: "none"}}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
