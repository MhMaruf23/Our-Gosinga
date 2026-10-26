import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();
  return <Sonner theme={theme} className="toaster group" {...props} />;
};

export { Toaster };
