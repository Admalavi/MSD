import { Box, Container, Typography, Stack, Button } from "@mui/material";

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: 600,
        display: "flex",
        alignItems: "center",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("/images/faculty/col.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ letterSpacing: 4, mb: 2, display: "block" }}
        >
          WELCOME TO
        </Typography>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            maxWidth: 850,
            fontSize: { xs: "42px", md: "72px" },
            lineHeight: 1.05,
            mb: 3,
          }}
        >
          Department of
          <Box component="span" sx={{ display: "block", color: "secondary.main" }}>
            Computer Science & Engineering
          </Box>
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{ maxWidth: 650, fontWeight: 400, lineHeight: 1.7, mb: 4 }}
        >
          Empowering students with knowledge, innovation, research and
          technology for a better future.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            href="#about"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Explore Department
          </Button>

          <Button
            href="#contact"
            variant="outlined"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
