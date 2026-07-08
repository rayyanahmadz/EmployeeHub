import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Building2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Sidebar({
  isOpen,
  setIsOpen,
  dashboardRef,
  analyticsRef,
  employeesRef,
  settingsRef,
}) {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    {
      icon: <LayoutDashboard size={20} />,
      title: "Dashboard",
      ref: dashboardRef,
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Analytics",
      ref: analyticsRef,
    },
    {
      icon: <Users size={20} />,
      title: "Employees",
      ref: employeesRef,
    },
    {
      icon: <Settings size={20} />,
      title: "Settings",
      ref: settingsRef,
    },
  ];

  const handleNavigation = (item) => {
    setActive(item.title);

    if (item.ref?.current) {
      item.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          w-72
          min-h-screen
          lg:h-screen
          bg-white/80
          dark:bg-slate-900/90
          backdrop-blur-xl
          border-r
          border-slate-200
          dark:border-slate-800
          flex
          flex-col
          transition-transform
          duration-300
          ease-in-out
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-white shadow-lg">
              <Building2 size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                EmployeeHub
              </h1>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                HR Management
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-slate-700 dark:text-white"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-5 py-8 space-y-3">
          {menu.map((item) => (
            <motion.button
              key={item.title}
              whileHover={{ x: 8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300
                ${
                  active === item.title
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                    : "text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
            >
              {item.icon}

              <span className="font-medium text-base">
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>

        {/* User */}
        <div className="border-t border-slate-200 dark:border-slate-800 p-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
              R
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Rayyan
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Administrator
              </p>
            </div>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}

export default Sidebar;