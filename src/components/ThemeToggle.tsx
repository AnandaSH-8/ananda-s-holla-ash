import { Flashlight, FlashlightOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const isOn = theme === 'light';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isOn ? "Turn torch off (switch to dark theme)" : "Turn torch on (switch to light theme)"}
      className="hover-scale relative overflow-visible"
    >
      {/* Warm beam / halo when the torch is on */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full transition-all duration-500 bg-[radial-gradient(circle,hsl(38_95%_60%/0.55),transparent_70%)] opacity-100 scale-125 blur-[6px] dark:opacity-0 dark:scale-90 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <Flashlight className="relative h-5 w-5 text-amber-500 rotate-0 scale-100 transition-all duration-300 dark:-rotate-45 dark:scale-0 motion-reduce:transition-none" />
      <FlashlightOff className="absolute h-5 w-5 text-muted-foreground rotate-45 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 motion-reduce:transition-none" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
