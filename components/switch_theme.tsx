import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { FaMoon, FaSun } from "react-icons/fa";

export const LIGHTTHEME = "retro";
export const DARKTHEME = "night";

export const SwitchTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", DARKTHEME);

  const toggleTheme = () => {
    setTheme(theme === DARKTHEME ? LIGHTTHEME : DARKTHEME);
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className="btn btn-circle" onClick={() => toggleTheme()}>
      {theme === DARKTHEME ? (
        <FaMoon className="w-5 h-5" />
      ) : (
        <FaSun className="w-5 h-5" />
      )}
    </button>
  );
};
