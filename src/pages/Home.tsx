import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { PencilSimple } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <Container>
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
    </Container>
  );
};
