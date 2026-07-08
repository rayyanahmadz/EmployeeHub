import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function AnalyticsChart({ employees, darkMode }) {
  const chartColor = darkMode ? "#60a5fa" : "#2563eb";

  const departmentData = Object.values(
    employees.reduce((acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = {
          department: employee.department,
          employees: 0,
          salary: 0,
        };
      }

      acc[employee.department].employees += 1;
      acc[employee.department].salary += Number(employee.salary);

      return acc;
    }, {})
  );

  const COLORS = [
    "#2563eb",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#14b8a6",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      {/* Employees Chart */}
      <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
          Employees by Department
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={departmentData}>
            <CartesianGrid
              stroke={darkMode ? "#334155" : "#e2e8f0"}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="department"
              tick={{ fill: darkMode ? "#cbd5e1" : "#475569" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: darkMode ? "#cbd5e1" : "#475569" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                border: darkMode
                  ? "1px solid #334155"
                  : "1px solid #e2e8f0",
                borderRadius: "12px",
                color: darkMode ? "#ffffff" : "#0f172a",
                boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              }}
              labelStyle={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
              itemStyle={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
              cursor={{
                fill: darkMode
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(37,99,235,0.08)",
              }}
            />

            <Bar
              dataKey="employees"
              fill={chartColor}
              radius={[10, 10, 0, 0]}
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Salary Pie */}
      <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
          Salary Distribution
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="salary"
              nameKey="department"
              outerRadius={100}
              animationDuration={1200}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) =>
                `Rs. ${Number(value).toLocaleString()}`
              }
              contentStyle={{
                backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                border: darkMode
                  ? "1px solid #334155"
                  : "1px solid #e2e8f0",
                borderRadius: "12px",
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
              labelStyle={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
              itemStyle={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
            />

            <Legend
              wrapperStyle={{
                color: darkMode ? "#ffffff" : "#0f172a",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;