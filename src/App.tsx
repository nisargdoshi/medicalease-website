import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import ComponentsTest from "./pages/test";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: theme.palette.background.default },
        }}
      />
      <ComponentsTest />
    </ThemeProvider>
  );
};

export default App;
