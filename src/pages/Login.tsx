import { useState } from "react";

import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import { EnvelopeSimple, Lock, Eye, EyeSlash } from "@phosphor-icons/react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: "60%", lg: 400 },
          mx: { xs: "auto", lg: "unset" },
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Welcome Back!</Typography>
        <Typography sx={{ mt: 1.25, color: "text.secondary" }}>
          Your email & password to access your account.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "60%", lg: 400 },
          mx: { xs: "auto", lg: "unset" },
        }}
      >
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
                    {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
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
          maxWidth: { xs: "60%", lg: 400 },
          mx: { xs: "auto", lg: "unset" },
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
    </>
  );
};
