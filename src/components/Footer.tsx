import { useNavigate } from "react-router-dom";
import ToolTip from "../ToolTip";
import { useThemeContext, themeContextType } from "../contexts/ThemeContext";

const Footer = ({ tasks, page }: any) => {
  const navigate = useNavigate();

  let items = `${tasks.length} items`;

  let [pageAllClasses, pageActiveClasses, pageCompletedClasses] = [
    `page-all px-3 my-3`,
    `page-active px-3 my-3`,
    `page-completed px-3 my-3`,
  ];

  if (page === "all") pageAllClasses += " active-page text-black";

  if (page === "active") pageActiveClasses += " active-page text-black";

  if (page === "completed") pageCompletedClasses += " active-page text-black";

  const { theme } = useThemeContext() as themeContextType;

  const classes =
    "container-footer d-flex justify-content-between align-items-center " +
    (theme.isLightTheme ? " bg-gray text-black" : " bg-dark text-white");

  return (
    <div className={classes}>
      <div className="left-items d-flex">
        <div className="add-new-task px-3 my-3">
          <ToolTip
            message={`Add Task`}
            element={
              <img
                src=""
                alt="new task icon"
                onClick={() => navigate("/all")}
              />
            }
          />
        </div>
        <div className="search px-3 my-3">
          <ToolTip
            message={`Search Task`}
            element={
              <img
                src=""
                alt="search icon"
                onClick={() => navigate("/search")}
              />
            }
          />
        </div>
        <div className="items-count px-3 my-3">{items}</div>
      </div>

      <div className="mid-item">
        <small>Press `ESC` to reset your list</small>
      </div>

      <div className="right-items d-flex">
        <ToolTip
          message={`Show All Tasks`}
          element={
            <div className={pageAllClasses} onClick={() => navigate("/all")}>
              All
            </div>
          }
        />
        <ToolTip
          message={`Show Active Tasks`}
          element={
            <div
              className={pageActiveClasses}
              onClick={() => navigate("/active")}
            >
              Active
            </div>
          }
        />
        <ToolTip
          message={`Show Completed Tasks`}
          element={
            <div
              className={pageCompletedClasses}
              onClick={() => navigate("/completed")}
            >
              Completed
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Footer;
