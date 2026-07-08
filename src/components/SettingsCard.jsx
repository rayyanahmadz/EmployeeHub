import { Moon, Sun, Palette, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function SettingsCard({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10 rounded-3xl border border-white/20 dark:border-slate-700
      bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl
      shadow-2xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
        Settings
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            {darkMode ? (
              <Moon className="text-blue-500" />
            ) : (
              <Sun className="text-yellow-500" />
            )}

            <h3 className="font-semibold text-slate-700 dark:text-white">
              Theme
            </h3>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Current mode:
          </p>

          <p className="font-semibold mt-2 text-blue-600">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="text-pink-500" />

            <h3 className="font-semibold text-slate-700 dark:text-white">
              UI
            </h3>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Premium Glassmorphism Interface
          </p>

          <p className="mt-2 font-semibold text-indigo-500">
            Version 2.0
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-green-500" />

            <h3 className="font-semibold text-slate-700 dark:text-white">
              Database
            </h3>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Connected to Supabase
          </p>

          <p className="font-semibold mt-2 text-green-600">
            Online
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default SettingsCard;