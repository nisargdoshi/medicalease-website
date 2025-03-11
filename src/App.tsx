import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { FunctionComponent } from "./types/common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy, Suspense, useEffect, useState } from "react";

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/production").then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

const App = ({ router }: AppProps): FunctionComponent => {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-expect-error window does not contain toggleDevtools
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: theme.palette.background.default },
          }}
        />
        {/* code for auth provider */}
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        {showDevtools && (
          <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction buttonPosition="bottom-right" />
          </Suspense>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
