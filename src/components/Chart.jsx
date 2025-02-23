import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "19 June", revenue: 1000 },
  { date: "20 June", revenue: 3000 },
  { date: "21 June", revenue: 4000 },
  { date: "22 June", revenue: 4500 },
  { date: "24 June", revenue: 6000 },
  { date: "25 June", revenue: 7000 },
];

const Chart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-lg font-bold mb-4 text-center">Total Revenue</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4DD0E1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
