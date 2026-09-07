import { Box, Container, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.dark", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Box>
            <Typography variant="h6">DYP CSE</Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Department of Computer Science & Engineering
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            © 2026 Department of Computer Science & Engineering. All Rights
            Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
