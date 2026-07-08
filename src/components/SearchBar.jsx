function SearchBar({ search, setSearch }) {
  return (
    <div
      className="
        mb-6
        bg-white/70 dark:bg-slate-900/80
        backdrop-blur-xl
        shadow-lg
        rounded-xl
        border
        border-white/40
      "
    >
      <input
        type="text"
        placeholder="Search by name, email or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
px-4
py-3
outline-none
focus:ring-4
focus:ring-blue-200
transition
"      />
    </div>
  );
}

export default SearchBar;