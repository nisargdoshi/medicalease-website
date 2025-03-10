import { Components, createTheme } from "@mui/material";
import { Theme, Shadows as ShadowsType } from "@mui/material/styles";

import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

// components
import { label } from "./label";
import { button } from "./button";
import { iconButton } from "./iconButton";

// @ts-ignore
import "@types/mui.d.ts";

const baseTheme = createTheme({
  palette: {
    ...palette,
  },
  shadows: shadows as ShadowsType,
  spacing: 8,
  typography,
  shape: {
    borderRadius: 8,
  },
});

// Then add components using the typed approach
export const theme = createTheme(baseTheme, {
  components: {
    ...(button as Components<Theme>),
    ...(iconButton as Components<Theme>),
    ...(label as Components<Theme>),
  },
});
