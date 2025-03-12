import { Box, Grid2 } from '@mui/material';

import logo from '@assets/logo.svg';
import dashboard from '@assets/dashboard.png';
import authRings from '@assets/auth-rings.png';
import { Outlet } from '@tanstack/react-router';

export const AuthLayout: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(90deg, #F9F7F7 9.79%, #BDACAC 100%);',
      }}
    >
      <Grid2 container spacing={10}>
        <Grid2 size={{ lg: 5, xs: 12 }}>
          <Box
            sx={{
              gap: 8,
              display: 'flex',
              flexDirection: 'column',
              pl: { xs: 0, lg: '150px' },
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                pt: 4,
                maxWidth: { xs: '100%', lg: 400 },
                textAlign: 'center',
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
            <Outlet />
          </Box>
        </Grid2>
        <Grid2 size={{ lg: 7, xs: 0 }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <Box
              component="img"
              src={authRings}
              sx={{
                zIndex: 1,

                width: '100%',
                height: 'calc(100vh + 21px)',
                position: 'absolute',
              }}
            />
            <Box
              component="img"
              src={dashboard}
              sx={{
                zIndex: 2,
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
