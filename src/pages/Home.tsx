import { useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";
import NoTask from "../components/NoTask";
import SkeletonPage from "../SkeletonPage";
import { useThemeContext, themeContextType } from "../contexts/ThemeContext";

const Home = ({ tasks, inputChanges, updateTasks, deleteTasks }: any) => {
  const [loading, setLoading] = useState(true);

  const { theme } = useThemeContext() as themeContextType;

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const classes =
    `container-box py-3 px-4` + (theme.isLightTheme ? " bg-white" : " bg-dark");

  return (
    <div className={classes}>
      <div className="container-header">
        <Heading header={"ALL TASKS"} />
        <InputBox genericFunction={inputChanges} placeholder={"Add New ..."} />

        {loading && <SkeletonPage />}

        {!loading && Boolean(tasks.length) && (
          <TaskList
            tasks={tasks}
            updateTasks={updateTasks}
            deleteTasks={deleteTasks}
          />
        )}

        {!loading && !Boolean(tasks.length) && (
          <NoTask message={"No Tasks Available"} />
        )}
      </div>
      <Footer tasks={tasks} page={"all"} />
    </div>
  );
};

export default Home;
