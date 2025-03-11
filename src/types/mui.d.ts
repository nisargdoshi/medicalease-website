import { ButtonProps, IconButtonProps } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    tertiary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
    tertiary?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      950?: string;
    };
  }

  interface PaletteColor {
    focus?: string;
    disabled?: string;
    disabledColor?: string;
  }

  interface SimplePaletteColorOptions {
    focus?: string;
    disabled?: string;
    disabledColor?: string;
  }

  interface ComponentsOverrides {
    MuiButton: {
      variants: Array<{
        props: { variant: "tertiary" | "soft" };
        style: any;
      }>;
    };
    MuiIconButton: {
      variants: Array<{
        props: { variant: "tertiary" | "soft" };
        style: any;
      }>;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tertiary: true;
    soft: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    size: "small" | "large";
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsVariantOverrides {
    tertiary: true;
    soft: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    link: true;
  }
}
