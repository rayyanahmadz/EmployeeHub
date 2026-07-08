import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";

function EmployeeList({
  employees,
  onEmployeeDeleted,
  onEdit,
}) {
  async function deleteEmployee(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("employees")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
toast.error("Something went wrong.");      return;
    }

toast.success("Employee deleted successfully!");
    if (onEmployeeDeleted) {
      onEmployeeDeleted();
    }
  }

  // Empty State
  if (employees.length === 0) {
    return (
      <div className="mt-8">
<div className="flex items-center justify-between mb-8">
  <div>
    <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
      Employees
    </h2>

    <p className="text-slate-500 dark:text-slate-400">
      Manage all employees in one place.
    </p>
  </div>

  <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg">
    {employees.length} Employees
  </div>
</div>
        <div className="bg-white/70 dark:bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-16 text-center hover:-translate-y-1 transition-all duration-300">
          <div className="text-7xl mb-4">📂</div>

          <h2 className="text-2xl font-bold">
            No Employees Found
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Add your first employee to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white transition-colors">
  Employees
</h2>

      <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
  <div className="overflow-x-auto md:overflow-x-visible">
    <table className="w-full">           <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-4 py-4 text-left">
                  Employee
                </th>

                <th className="px-4 py-4 text-left">
                  Department
                </th>

                <th className="px-4 py-4 text-left">
                  Position
                </th>

                <th className="px-4 py-4 text-left">
                  Salary
                </th>

                <th className="px-4 py-4 text-center whitespace-nowrap">
                  Joining Date
                </th>

                <th className="px-4 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
className="
transition-all
duration-300
hover:bg-slate-100
dark:hover:bg-slate-800/80
"                >
                  {/* Employee */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        {employee.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                          {employee.name}
                        </p>

                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {employee.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {employee.department}
                    </span>
                  </td>

                  {/* Position */}
                  <td className="text-slate-900 dark:text-white">
                    {employee.position}
                  </td>

                  {/* Salary */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-emerald-600">
                      Rs. {Number(employee.salary).toLocaleString()}
                    </span>
                  </td>

                  {/* Joining Date */}
                  <td className="text-slate-900 dark:text-white">
                    {employee.joining_date}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => onEdit(employee)}
                       className="px-3 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold shadow-md hover:scale-105 transition-all duration-200"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteEmployee(employee.id)
                        }
                        className="px-3 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white text-sm font-semibold shadow-md hover:scale-105 transition-all duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;