import toast from "react-hot-toast";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  User,
  Mail,
  Building,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react";

function EmployeeForm({
  onEmployeeAdded,
  selectedEmployee,
  setSelectedEmployee,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: "",
    joining_date: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    }
  }, [selectedEmployee]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let error;

    if (selectedEmployee) {
      ({ error } = await supabase
        .from("employees")
        .update({
          name: formData.name,
          email: formData.email,
          department: formData.department,
          position: formData.position,
          salary: formData.salary,
          joining_date: formData.joining_date,
        })
        .eq("id", selectedEmployee.id));
    } else {
      ({ error } = await supabase
        .from("employees")
        .insert([formData]));
    }

    if (error) {
      console.error(error);
toast.error("Something went wrong.");      return;
    }

   toast.success(
  selectedEmployee
    ? "Employee updated successfully!"
    : "Employee added successfully!"
);

    setFormData({
      name: "",
      email: "",
      department: "",
      position: "",
      salary: "",
      joining_date: "",
    });

    if (setSelectedEmployee) {
      setSelectedEmployee(null);
    }

    if (onEmployeeAdded) {
      onEmployeeAdded();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-10 mb-8 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
          <UserPlus size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {selectedEmployee ? "Edit Employee" : "Add New Employee"}
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Fill in the employee details below.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}

        <div className="relative">
          <User
            size={20}
className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"          />

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-4
py-4
outline-none
focus:ring-4
focus:ring-blue-200
transition
"          />
        </div>

        {/* Email */}

        <div className="relative">
          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-4
py-4
outline-none
focus:ring-4
focus:ring-blue-200
transition
"          />
        </div>

      {/* Department */}

<div className="relative">
  <Building
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />

  <select
    name="department"
    value={formData.department}
    onChange={handleChange}
className="
w-full
rounded-2xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-10
py-4
outline-none
transition-all
appearance-none
"  >
    <option value="">Select Department</option>
    <option>HR</option>
    <option>IT</option>
    <option>Finance</option>
    <option>Marketing</option>
    <option>Sales</option>
    <option>Operations</option>
  </select>
</div>

{/* Position */}

<div className="relative">
  <Briefcase
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />

  <input
    name="position"
    type="text"
    placeholder="Position"
    value={formData.position}
    onChange={handleChange}
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-4
py-4
outline-none
focus:ring-4
focus:ring-blue-200
transition
"  />
</div>

{/* Salary */}

<div className="relative">
  <DollarSign
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />

  <input
    name="salary"
    type="number"
    placeholder="Salary"
    value={formData.salary}
    onChange={handleChange}
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-4
py-4
outline-none
focus:ring-4
focus:ring-blue-200
transition
"  />
</div>

{/* Joining Date */}

<div className="relative">
  <Calendar
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
  />

  <input
    name="joining_date"
    type="date"
    value={formData.joining_date}
    onChange={handleChange}
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
pl-12
pr-4
py-4
outline-none
focus:ring-4
focus:ring-blue-200
transition
"  />
</div>

<div className="md:col-span-2 flex justify-end gap-4 mt-6">
  {selectedEmployee && (
    <button
      type="button"
      onClick={() => {
        setSelectedEmployee(null);
        setFormData({
          name: "",
          email: "",
          department: "",
          position: "",
          salary: "",
          joining_date: "",
        });
      }}
      className="px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-all duration-300"
    >
      Cancel
    </button>
  )}

  <button
    type="submit"
    className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300"
  >
    {selectedEmployee ? "Update Employee" : "Add Employee"}
  </button>
</div>
      </form>
    </motion.div>
  );
}

export default EmployeeForm;