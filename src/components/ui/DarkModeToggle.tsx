'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    const isDarkMode = document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--brand-primary)] hover:border-[var(--brand-accent)] transition-all shadow-sm flex items-center justify-center"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#C79A63]" />
      ) : (
        <Moon className="w-4 h-4 text-[#5C3A21]" />
      )}
    </button>
  );
}
