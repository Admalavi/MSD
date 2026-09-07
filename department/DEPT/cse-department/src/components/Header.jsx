import { Box, Container, Stack, Typography, Avatar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Header() {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "background.default",
        py: 2,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: "primary.main",
                width: 56,
                height: 56,
                fontWeight: 700,
              }}
            >
              DYP
            </Avatar>

            <Box>
              <Typography variant="h6" component="h2" sx={{ lineHeight: 1.2 }}>
                D. Y. Patil College of Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department of Computer Science & Engineering
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" color="primary" />
              <Typography variant="body2">+91 231 260 1234</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon fontSize="small" color="primary" />
              <Typography variant="body2">cse@dypgroup.edu.in</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
