import {
  Bell,
  Search,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";

function Header({ setIsOpen, darkMode, setDarkMode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-lg transition-colors duration-300"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-5">
        {/* Left */}
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden mr-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors"
          >
            <Menu
              size={22}
              className="text-slate-700 dark:text-white"
            />
          </button>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">
              Dashboard
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Welcome back, Rayyan 👋
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              w-80
              rounded-xl
              px-4
              py-2.5
              bg-slate-100
              dark:bg-slate-800
              border
              border-slate-200
              dark:border-slate-700
              transition-colors
              duration-300
            "
          >
            <Search
              size={18}
              className="text-slate-500 dark:text-slate-300"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
                w-full
                bg-transparent
                text-slate-900
                dark:text-white
                placeholder:text-slate-500
                dark:placeholder:text-slate-400
                outline-none
                border-none
              "
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-105 transition-all duration-300"
          >
            {darkMode ? (
              <Sun
                size={20}
                className="text-yellow-400"
              />
            ) : (
              <Moon
                size={20}
                className="text-slate-700"
              />
            )}
          </button>

          {/* Notification */}
          <button
            className="
              relative
              p-3
              rounded-xl
              bg-slate-100
              dark:bg-slate-800
              hover:bg-slate-200
              dark:hover:bg-slate-700
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
            "
          >
            <Bell
              size={20}
              className="text-slate-700 dark:text-white"
            />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white">
              R
            </div>

            <div className="hidden lg:block">
              <p className="font-semibold text-slate-900 dark:text-white">
                Rayyan Ahmad
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.header>
  );
}

export default Header;