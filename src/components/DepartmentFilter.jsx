function DepartmentFilter({
  department,
  setDepartment,
  employees,
}) {
  const departments = [
    ...new Set(employees.map((e) => e.department)),
  ];

  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
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
"    >
      <option value="">All Departments</option>

      {departments.map((dept) => (
        <option key={dept} value={dept}>
          {dept}
        </option>
      ))}
    </select>
  );
}

export default DepartmentFilter;