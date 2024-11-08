import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTheme } from "../../redux/slices/themeSlice";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};
