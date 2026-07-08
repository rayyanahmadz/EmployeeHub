import SearchBar from "./components/SearchBar";
import DashboardCards from "./components/DashboardCards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DepartmentFilter from "./components/DepartmentFilter";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SortDropdown from "./components/SortDropdown";
import ExportButton from "./components/ExportButton";
import LoadingSkeleton from "./components/LoadingSkeleton";
import AnalyticsChart from "./components/AnalyticsChart";
import SettingsCard from "./components/SettingsCard";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "./lib/supabase";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [sort, setSort] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const dashboardRef = useRef(null);
  const analyticsRef = useRef(null);
  const employeesRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  async function fetchEmployees() {
    setLoading(true);

    const { data, error } = await supabase
      .from("employees")
      .select("*");

    if (!error) {
      setEmployees(data);
    }

    setLoading(false);
  }

  const filteredEmployees = [...employees]
    .filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "" || employee.department === department;

      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);

      if (sort === "salaryLow")
        return Number(a.salary) - Number(b.salary);

      if (sort === "salaryHigh")
        return Number(b.salary) - Number(a.salary);

      return 0;
    });

  return (
    <div className="relative flex min-h-screen bg-slate-100 dark:bg-slate-950">

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

      </div>

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dashboardRef={dashboardRef}
        analyticsRef={analyticsRef}
        employeesRef={employeesRef}
        settingsRef={settingsRef}
      />

      <main className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto">

        <Header
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-8">

          <div ref={dashboardRef}>
            <DashboardCards employees={employees} />
          </div>

          <div ref={analyticsRef}>
            <AnalyticsChart
              employees={employees}
              darkMode={darkMode}
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">

            <div className="flex-1">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />
            </div>

            <DepartmentFilter
              department={department}
              setDepartment={setDepartment}
              employees={employees}
            />

            <SortDropdown
              sort={sort}
              setSort={setSort}
            />

            <ExportButton employees={filteredEmployees} />

          </div>

          <EmployeeForm
            onEmployeeAdded={fetchEmployees}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
          />

          <div ref={employeesRef}>
            {loading ? (
              <LoadingSkeleton />
            ) : (
              <EmployeeList
                employees={filteredEmployees}
                onEmployeeDeleted={fetchEmployees}
                onEdit={setSelectedEmployee}
              />
            )}
          </div>

          <div ref={settingsRef}>
            <SettingsCard darkMode={darkMode} />
          </div>

          <footer className="mt-12 text-center text-slate-500 dark:text-slate-400 text-sm">
            <p>EmployeeHub © 2026</p>

            <p className="mt-1">
              Built with React • Tailwind • Supabase
            </p>
          </footer>

        </div>

      </main>

    </div>
  );
}

export default App;