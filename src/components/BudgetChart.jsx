import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Over Budget", value: 19, color: "#ff4d4d" },
  { name: "On Budget", value: 48, color: "#3b82f6" },
  { name: "Under Budget", value: 33, color: "#22c55e" },
];

const BudgetChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-lg font-bold mb-4 text-center">Budget</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetChart;
