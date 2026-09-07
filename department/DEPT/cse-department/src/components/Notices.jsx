import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const notices = [
  "B.Tech Semester Examination Schedule",
  "Department Technical Event Registration",
  "Industrial Visit Registration",
  "Project Submission Guidelines",
  "Placement Training Program",
];

function Notices() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
            UPDATES
          </Typography>
          <Typography variant="h3" component="h2">
            Latest Notices
          </Typography>
        </Box>

        <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <List disablePadding>
            {notices.map((notice, index) => (
              <ListItem
                key={notice}
                divider={index !== notices.length - 1}
                sx={{
                  py: 2.5,
                  px: 3,
                  gap: 2,
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                }}
                secondaryAction={
                  <Button
                    variant="text"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    View
                  </Button>
                }
              >
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  {String(index + 1).padStart(2, "0")}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {notice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Department of Computer Science & Engineering
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
}

export default Notices;
