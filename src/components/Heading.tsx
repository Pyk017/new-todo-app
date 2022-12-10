import { useThemeContext, themeContextType } from "../contexts/ThemeContext";

const Heading = ({ header }: any) => {
  const { theme, toggleTheme } = useThemeContext() as themeContextType;

  return (
    <div className="d-flex align-items-center justify-content-end">
      <div
        className="display-3 text-center mb-3 w-75"
        style={{ marginLeft: "11rem" }}
      >
        {header}
      </div>
      <div className="d-flex">
        <div className="custom-control custom-radio mx-2 text-center">
          <input
            type="radio"
            id="light-mode"
            className="custom-control-input"
            checked={theme.isLightTheme}
            onChange={toggleTheme}
          />
          <label className="custom-control-label" htmlFor="light-mode">
            Light Mode
          </label>
        </div>
        <div className="custom-control custom-radio mx-2 text-center">
          <input
            type="radio"
            id="dark-mode"
            className="custom-control-input"
            checked={!theme.isLightTheme}
            onChange={toggleTheme}
          />
          <label className="custom-control-label" htmlFor="dark-mode">
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default Heading;

// {theme.isLightTheme ? "Light Mode" : "Dark Mode"}
