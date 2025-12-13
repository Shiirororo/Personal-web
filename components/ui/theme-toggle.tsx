"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const resolvedTheme = (currentTheme as string) ?? "light";

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className={className}>
      <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
        {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
    </div>
  );
}
