import { Theme } from "@emotion/react";

export const label = {
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "20px",
        color: theme.palette.neutral[700],
      }),
    },
  },
};
