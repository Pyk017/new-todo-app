import { useState, useEffect } from "react";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ActiveTasks from "./pages/ActiveTasks";
import CompletedTasks from "./pages/CompletedTasks";
import { v4 as uuidV4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/animations/scale.css";
import { useThemeContext, themeContextType } from "./contexts/ThemeContext";

function App() {
  const setLocalStorage = (tasks: any) => {
    if (!tasks.length) return;

    localStorage.setItem("TASKS", JSON.stringify(tasks));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("TASKS") == null) return [];

    let data = localStorage.getItem("TASKS") || "[]";

    return JSON.parse(data);
  };

  const [tasks, setTasks] = useState(getLocalStorage());

  const inputChanges = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter" && event.code !== "NumpadEnter") return;

    const inputValue = event.currentTarget.value;

    if (inputValue === "") return;

    let obj = {
      id: uuidV4(),
      task_desc: inputValue,
      isCompleted: false,
      date_modified: new Date(),
    };

    tasks.sort((a: any, b: any) => a.date_modified - b.date_modified);

    setTasks([obj, ...tasks]);

    event.currentTarget.value = "";
  };

  const updateTasks = (
    event: React.ChangeEvent<HTMLInputElement>,
    _task: any
  ) => {
    tasks.forEach((task: any) => {
      if (task.id === _task.id) {
        task.isCompleted = !_task.isCompleted;
      }
    });

    setTasks([...tasks]);
  };

  const deleteTasks = (
    event: React.MouseEvent<HTMLImageElement>,
    task: any
  ) => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmation) return;

    tasks.forEach((element: any, idx: number) => {
      if (element.id === task.id) {
        tasks.splice(idx, 1);
      }
    });

    if (!tasks.length) localStorage.clear();

    setTasks([...tasks]);
  };

  const resetTasks = () => {
    localStorage.clear();
    setTasks(getLocalStorage());
  };

  document.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.code === "Escape") resetTasks();
  });

  useEffect(() => {
    setLocalStorage(tasks);
  }, [tasks]);

  const { theme } = useThemeContext() as themeContextType;

  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <div
      className="App"
      style={{ background: currentTheme.bg, color: currentTheme.syntax }}
    >
      <div className="container pt-5">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks.sort(
                    (a: any, b: any) => a.isCompleted - b.isCompleted
                  )}
                  inputChanges={inputChanges}
                  updateTasks={updateTasks}
                  deleteTasks={deleteTasks}
                />
              }
            ></Route>
            <Route
              path="/all"
              element={
                <Home
                  tasks={tasks.sort(
                    (a: any, b: any) => a.isCompleted - b.isCompleted
                  )}
                  inputChanges={inputChanges}
                  updateTasks={updateTasks}
                  deleteTasks={deleteTasks}
                />
              }
            ></Route>
            <Route
              path="/search"
              element={
                <SearchPage
                  tasks={tasks.sort(
                    (a: any, b: any) => a.isCompleted - b.isCompleted
                  )}
                  updateTasks={updateTasks}
                />
              }
            ></Route>
            <Route
              path="/active"
              element={
                <ActiveTasks
                  tasks={tasks
                    .filter((task: any) => !task.isCompleted)
                    .sort((a: any, b: any) => a.isCompleted - b.isCompleted)}
                  updateTasks={updateTasks}
                  deleteTasks={deleteTasks}
                />
              }
            ></Route>
            <Route
              path="/completed"
              element={
                <CompletedTasks
                  tasks={tasks
                    .filter((task: any) => task.isCompleted)
                    .sort((a: any, b: any) => a.isCompleted - b.isCompleted)}
                  updateTasks={updateTasks}
                  deleteTasks={deleteTasks}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
