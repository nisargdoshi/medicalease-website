import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { theme } from '../theme';

import '../index.css';
import type React from 'react';

export const Route = createRootRoute({
  component: (): React.FC => (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: 'background.default' },
          }}
        />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});
