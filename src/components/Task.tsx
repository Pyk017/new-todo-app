import { useThemeContext, themeContextType } from "../contexts/ThemeContext";
import ToolTip from "../ToolTip";

const Task = ({ task, updateTasks, status, deleteTasks }: any) => {
  let tippyCheckContent = "Mark Undone";

  if (!status) tippyCheckContent = "Mark Done";

  const { theme } = useThemeContext() as themeContextType;
  const classes = theme.isLightTheme
    ? "list-group-item bg-light text-black"
    : "list-group-item bg-dark text-white";

  return (
    <li className={classes}>
      <div className="form-check">
        <ToolTip
          message={tippyCheckContent}
          element={
            <input
              type="checkbox"
              className="form-check-input"
              onChange={(e) => updateTasks(e, task)}
              checked={status}
            />
          }
        />

        <label htmlFor="" className="form-check-label">
          {task.task_desc}
        </label>

        <ToolTip
          message={`Delete "${task.task_desc}"`}
          element={
            <img
              src=""
              alt="dustbin icon"
              className="delete-icon mx-4"
              onClick={(e) => deleteTasks(e, task)}
            />
          }
          placement="left"
        />
      </div>
    </li>
  );
};

export default Task;
