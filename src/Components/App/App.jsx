import React, { useEffect, useState } from "react";
import Wapper from "../Pages/Wapper/Wapper";
import "./App.css";
export let Mycontext = React.createContext();
export default function App() {
const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.body.classList.add("dark");
        
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [darkMode]);

  if (darkMode === null) return null;
  return (
    <>
      <Mycontext.Provider value={{ darkMode, setDarkMode }}>
        <Wapper />
      </Mycontext.Provider>
    </>
  );
}
