import { useMount, useToggle, useUpdateEffect } from "ahooks";
import { ReactNode, createContext, useContext } from "react";

type Mode = "light" | "dark";

interface AppState {
  mode: Mode; // color mode
  toggle: () => void; // toggle color mode
}

const AppContext = createContext<AppState | undefined>(undefined);

const useApp = () => {
  const context = useContext(AppContext);
  if (context) return context;
  throw new Error("useApp must be used within a AppProvider");
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mode, { toggle, set }] = useToggle<Mode, Mode>("light", "dark");

  useMount(() => {
    switch (localStorage.mode) {
      case "dark":
        set("dark");
        break;
      case "light":
        set("light");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          set("dark");
        } else {
          set("light"); // default
        }
    }
  });

  useUpdateEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark"); // tailwindcss
      localStorage.mode = "dark";
    } else {
      document.documentElement.classList.remove("dark"); // tailwindcss
      localStorage.mode = "light";
    }
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, toggle }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
