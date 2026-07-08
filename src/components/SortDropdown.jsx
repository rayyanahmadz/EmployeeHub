function SortDropdown({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
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
      <option value="">Sort By</option>
      <option value="name">Name (A–Z)</option>
      <option value="salaryHigh">
        Salary High → Low
      </option>
      <option value="salaryLow">
        Salary Low → High
      </option>
    </select>
  );
}

export default SortDropdown;