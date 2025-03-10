import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Select,
  SelectChangeEvent,
  MenuItem,
  Chip,
} from "@mui/material";

import { X, UserCircle, Eye, PencilSimple } from "@phosphor-icons/react";

const names = [
  "Oliver",
  "Van",
  "April",
  "Ralph",
  "Omar",
  "Carlos",
  "Miriam",
  "Bradley",
  "Virginia",
  "Kelly",
];

const ComponentsTest = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    const values = typeof value === "string" ? value.split(",") : value;
    setSelectedNames(values);
  };

  return (
    <Container>
      {/* Buttons */}
      <Box sx={{ my: 2 }}>
        <Typography variant="h5">Buttons</Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            mx: 2,
          }}
        >
          Primary
        </Button>
        <Button
          disabled
          variant="contained"
          color="primary"
          sx={{
            mx: 2,
          }}
        >
          Primary
        </Button>
        <Button
          disabled
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mx: 2,
          }}
        >
          Secondary
        </Button>
        <Box sx={{ my: 2 }}>
          <Button
            size="small"
            variant="tertiary"
            sx={{
              mx: 2,
            }}
          >
            Tertiary Small
          </Button>
          <Button
            variant="tertiary"
            sx={{
              mx: 2,
            }}
          >
            Tertiary
          </Button>
          <Button
            size="large"
            variant="tertiary"
            sx={{
              mx: 2,
            }}
          >
            Tertiary Large
          </Button>
          <Button
            disabled
            variant="tertiary"
            sx={{
              mx: 2,
            }}
          >
            Tertiary Disabled
          </Button>
        </Box>
        <Box sx={{ my: 2 }}>
          <Button
            size="small"
            variant="soft"
            sx={{
              mx: 2,
            }}
          >
            Soft Small
          </Button>
          <Button
            variant="soft"
            sx={{
              mx: 2,
            }}
          >
            Soft
          </Button>
          <Button
            size="large"
            variant="soft"
            sx={{
              mx: 2,
            }}
          >
            Soft Large
          </Button>
          <Button
            disabled
            variant="soft"
            sx={{
              mx: 2,
            }}
          >
            Soft Disabled
          </Button>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ my: 2 }}>
        <Typography mb={2} variant="h5">
          Icon Buttons
        </Typography>
        <IconButton size="small">
          <PencilSimple />
        </IconButton>
        <IconButton sx={{ mx: 2 }}>
          <PencilSimple />
        </IconButton>
        <IconButton size="large" type="rounded" disabled>
          <PencilSimple />
        </IconButton>
        <Box sx={{ my: 2 }}>
          <IconButton size="small" color="secondary">
            <PencilSimple />
          </IconButton>
          <IconButton sx={{ mx: 2 }} color="secondary">
            <PencilSimple />
          </IconButton>
          <IconButton size="large" type="rounded" disabled color="secondary">
            <PencilSimple />
          </IconButton>
        </Box>
        <Box sx={{ my: 2 }}>
          <IconButton size="small" variant="tertiary">
            <PencilSimple />
          </IconButton>
          <IconButton variant="tertiary" sx={{ ml: 2 }}>
            <PencilSimple />
          </IconButton>
          <IconButton
            disabled
            size="large"
            type="rounded"
            variant="tertiary"
            sx={{ ml: 2 }}
          >
            <PencilSimple />
          </IconButton>
        </Box>
        <Box sx={{ my: 2 }}>
          <IconButton size="small" variant="soft">
            <PencilSimple />
          </IconButton>
          <IconButton variant="soft" sx={{ ml: 2 }}>
            <PencilSimple />
          </IconButton>
          <IconButton
            disabled
            size="large"
            type="rounded"
            variant="soft"
            sx={{ ml: 2 }}
          >
            <PencilSimple />
          </IconButton>
        </Box>
      </Box>

      {/* Buttons */}

      <Divider />

      {/* Inputs */}
      <Box sx={{ my: 2 }}>
        <Box>
          <InputLabel>Small</InputLabel>
          <TextField
            placeholder="Placeholder"
            size="small"
            helperText="Helper Text"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <UserCircle size={16} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Eye size={16} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Default</InputLabel>
          <TextField placeholder="Placeholder" />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Large</InputLabel>
          <TextField placeholder="Placeholder" size="large" />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Disabled</InputLabel>
          <TextField
            disabled
            placeholder="Placeholder"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <UserCircle size={16} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Eye size={16} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Error</InputLabel>
          <TextField
            error
            placeholder="Placeholder"
            helperText="Helper Text"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <UserCircle size={16} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Eye size={16} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Tags LG</InputLabel>
          <Select
            multiple
            fullWidth
            size="large"
            value={selectedNames}
            onChange={handleChange}
            IconComponent={null}
            renderValue={(selected) => (
              <Box
                sx={{ mt: -0.25, display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    deleteIcon={<X size={12} />}
                    onDelete={() => console.log(value)}
                  />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Tags Default</InputLabel>
          <Select
            multiple
            fullWidth
            value={selectedNames}
            onChange={handleChange}
            IconComponent={null}
            renderValue={(selected) => (
              <Box
                sx={{ mt: -0.25, display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    deleteIcon={<X size={12} />}
                    onDelete={() => console.log(value)}
                  />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>Tags Small</InputLabel>
          <Select
            multiple
            fullWidth
            size="small"
            value={selectedNames}
            onChange={handleChange}
            IconComponent={null}
            renderValue={(selected) => (
              <Box
                sx={{ mt: -0.35, display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    deleteIcon={<X size={12} />}
                    onDelete={() => console.log(value)}
                  />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>TextArea Label</InputLabel>
          <TextField fullWidth multiline rows={2} placeholder="Placeholder" />
        </Box>
        <Box sx={{ my: 1.5 }}>
          <InputLabel>TextArea Disabled</InputLabel>
          <TextField
            fullWidth
            multiline
            disabled
            rows={2}
            placeholder="Placeholder"
          />
        </Box>
      </Box>
      {/* Inputs */}
    </Container>
  );
};

export default ComponentsTest;
