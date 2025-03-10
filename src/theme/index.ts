import { createTheme } from "@mui/material";

import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

// components
import { button } from "./button";
import { iconButton } from "./iconButton";

export const theme = createTheme({
  palette: {
    ...palette,
  },
  shadows,
  spacing: 8,
  typography,
  shape: {
    borderRadius: 8,
  },
  components: {
    ...button,
    ...iconButton,
  },
});
