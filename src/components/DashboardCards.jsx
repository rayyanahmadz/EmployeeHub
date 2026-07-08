import { Users, Building2, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "react-countup";
function DashboardCards({ employees }) {
  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map((e) => e.department)
  ).size;

  const averageSalary =
    employees.length > 0
      ? Math.round(
          employees.reduce(
            (sum, e) => sum + Number(e.salary),
            0
          ) / employees.length
        )
      : 0;

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
      icon: <Users size={30} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Departments",
      value: departments,
      icon: <Building2 size={30} />,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Average Salary",
      value: `Rs. ${averageSalary.toLocaleString()}`,
      icon: <DollarSign size={30} />,
      color: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
        whileHover={{
  y: -10,
  scale: 1.03,
  rotate: 0.5,
}}
          whileTap={{
            scale: 0.98,
          }}
          className="bg-white/70 dark:bg-slate-900/80 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Top Gradient */}
          <div
            className={`h-2 bg-gradient-to-r ${card.color}`}
          ></div>

          <div className="p-6 flex items-center justify-between">

            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                {card.title}
              </p>

             <h2 className="text-3xl font-bold mt-2 text-slate-800 dark:text-white">
  {card.value}
</h2>

              <p className="text-green-600 text-sm mt-4 font-medium">
                ▲ Updated Live
              </p>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color}
              flex items-center justify-center text-white shadow-lg`}
            >
              {card.icon}
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default DashboardCards;