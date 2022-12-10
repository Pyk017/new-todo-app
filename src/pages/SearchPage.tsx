import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";

import SkeletonPage from "../SkeletonPage";
import { useThemeContext, themeContextType } from "../contexts/ThemeContext";

const SearchPage = ({ tasks, updateTasks }: any) => {
  const [searchTask, setSearchTask] = useState(tasks);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const searchTasks = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let val: any = event.currentTarget.value.toLowerCase();

    if (val === "") {
      setSearchTask(tasks);
      return;
    }

    setSearchTask(
      tasks.filter((task: any) => {
        return task.task_desc.toLowerCase().indexOf(val) !== -1;
      })
    );
  };

  const { theme } = useThemeContext() as themeContextType;
  const classes =
    `container-box py-3 px-4` + (theme.isLightTheme ? " bg-white" : " bg-dark");

  return (
    <div className={classes}>
      <div className="container-header">
        <Heading header={"SEARCH TASKS"} />
        <InputBox
          genericFunction={searchTasks}
          placeholder={"Search Tasks ..."}
        />

        {loading && <SkeletonPage />}

        {!loading && Boolean(searchTask.length) && (
          <TaskList tasks={searchTask} updateTasks={updateTasks} />
        )}

        {!loading && !Boolean(searchTask.length) && (
          <NoTask message={"No Tasks Available"} />
        )}
      </div>
      <Footer tasks={searchTask} />
    </div>
  );
};

export default SearchPage;
