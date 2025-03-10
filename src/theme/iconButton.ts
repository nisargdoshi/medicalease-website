import { Theme } from "@mui/material/styles";

export const iconButton = {
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        boxShadow: "none",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&:focus": {
          outline: 0,
          backgroundColor: theme.palette.primary.focus,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.primary.disabled,
          color: theme.palette.primary.disabledColor,
        },
        '&[type="rounded"]': {
          borderRadius: "50%",
        },
      }),
      sizeMedium: {
        fontSize: 22,
        borderRadius: "6px",
      },
      sizeLarge: {
        padding: "10px",
        borderRadius: "8px",
      },
      sizeSmall: {
        borderRadius: "6px",
        padding: "8px",
      },
      colorPrimary: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&:focus": {
          outline: 0,
          backgroundColor: theme.palette.primary.focus,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.primary.disabled,
          color: theme.palette.primary.disabledColor,
        },
      }),
      colorSecondary: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
        "&:focus": {
          outline: 0,
          backgroundColor: theme.palette.secondary.focus,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.secondary.disabled,
          color: theme.palette.secondary.disabledColor,
        },
      }),
    },
    variants: [
      {
        props: { variant: "tertiary" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.neutral[700],
          border: `1px solid ${theme.palette.neutral[300]}`,
          "&:hover": {
            borderColor: theme.palette.neutral[100],
            backgroundColor: theme.palette.neutral[100],
          },
          "&:focus": {
            background: theme.palette.neutral[100],
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent",
            color: theme.palette.neutral[300],
            borderColor: theme.palette.neutral[300],
          },
        }),
      },
      {
        props: { variant: "soft" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.neutral[700],
          "&:hover": {
            color: theme.palette.neutral[700],
            backgroundColor: theme.palette.neutral[100],
          },
          "&:focus": {
            backgroundColor: theme.palette.neutral[100],
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent",
            color: theme.palette.neutral[300],
          },
        }),
      },
    ],
  },
};
