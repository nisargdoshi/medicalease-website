import { useState } from "react";

import {
  Box,
  Button,
  FormControlLabel,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { EnvelopeSimple, Lock, Eye, EyeSlash } from "@phosphor-icons/react";

import logo from "@assets/logo.svg";
import dashboard from "@assets/dashboard.png";
import authRings from "@assets/auth-rings.png";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(90deg, #F9F7F7 9.79%, #BDACAC 100%);",
      }}
    >
      <Grid2 container spacing={10}>
        <Grid2 size={{ lg: 5, xs: 12 }}>
          <Box
            sx={{
              gap: 8,
              display: "flex",
              flexDirection: "column",
              pl: { xs: 0, lg: "150px" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                pt: 4,
                maxWidth: { xs: "100%", lg: 400 },
                textAlign: "center",
              }}
            >
              <img src={logo} alt="logo" />
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", lg: 400 },
                textAlign: "center",
              }}
            >
              <Typography variant="h2">Welcome Back!</Typography>
              <Typography sx={{ mt: 1.25, color: "text.secondary" }}>
                Your email & password to access your account.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: { xs: "100%", lg: 400 } }}>
              <Box>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                  fullWidth
                  id="email"
                  size="large"
                  type="email"
                  placeholder="Enter your email"
                  sx={{
                    "& .MuiInputBase-root": {
                      bgcolor: "common.white",
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EnvelopeSimple size={24} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 3 }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  fullWidth
                  id="password"
                  size="large"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your email"
                  sx={{
                    "& .MuiInputBase-root": {
                      bgcolor: "common.white",
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock size={24} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{
                            cursor: "pointer",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Eye size={24} />
                          ) : (
                            <EyeSlash size={24} />
                          )}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel control={<Switch />} label="Remember Me" />

                <Typography variant="link">Forgot Password?</Typography>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Button fullWidth variant="contained" color="primary">
                  Log in
                </Button>
              </Box>
              <Box sx={{ mt: 5, textAlign: "center" }}>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.neutral[600],
                  }}
                >
                  Don't have an account?{" "}
                  <Typography
                    component="span"
                    variant="link"
                    sx={{
                      color: "info.dark",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: { xs: "100%", lg: 400 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2">Version 1.0</Typography>
              <Box>
                <Typography component="span" variant="body2">
                  Terms of Use |{" "}
                </Typography>
                <Typography component="span" variant="body2">
                  Privacy Policy
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ lg: 7, xs: 0 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Box
              component="img"
              src={authRings}
              sx={{
                zIndex: 1,

                width: "100%",
                height: "calc(100vh + 21px)",
                position: "absolute",
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
