import { useState } from "react";
import Heading from "../components/Heading";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";

import SkeletonPage from "../SkeletonPage";
import { useThemeContext, themeContextType } from "../contexts/ThemeContext";

const ActiveTasks = ({ tasks, updateTasks, deleteTasks }: any) => {
  const [loading, setLoading] = useState(true);

  const { theme } = useThemeContext() as themeContextType;
  const classes =
    `container-box py-3 px-4` + (theme.isLightTheme ? " bg-white" : " bg-dark");

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <div className={classes}>
      <div className="container-header">
        <Heading header={"ACTIVE TASKS"} />

        {loading && <SkeletonPage />}

        {!loading && Boolean(tasks.length) && (
          <TaskList
            tasks={tasks}
            updateTasks={updateTasks}
            deleteTasks={deleteTasks}
          />
        )}

        {!loading && !Boolean(tasks.length) && (
          <NoTask message={"No Active Tasks"} />
        )}
      </div>
      <Footer tasks={tasks} page={"active"} />
    </div>
  );
};

export default ActiveTasks;
