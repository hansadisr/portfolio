import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
