// @ts-expect-error Importing type declarations for MUI
import '@types/mui.d.ts';

import { createTheme } from '@mui/material';
import type { Shadows as ShadowsType } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { typography, typographyOverride } from './typography';

// components
import { label, input } from './input';
import { button } from './button';
import { iconButton } from './iconButton';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
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
    ...button,
    ...iconButton,
    ...label,
    ...input,
    ...typographyOverride,
  },
});
