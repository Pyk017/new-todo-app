import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useThemeContext, themeContextType } from "./contexts/ThemeContext";

const SkeletonPage = () => {
  const { theme } = useThemeContext() as themeContextType;

  const currentTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <div className="skeleton-container">
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center my-2 mx-3"
              key={idx}
            >
              <Skeleton
                style={{
                  backgroundColor: currentTheme.ui,
                  width: "30rem",
                }}
              />
              <Skeleton
                circle={true}
                style={{
                  backgroundColor: currentTheme.ui,
                  width: "30px",
                  height: "30px",
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonPage;
