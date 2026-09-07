import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import ScienceIcon from "@mui/icons-material/Science";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";

const navLinks = [
  { href: "#home", label: "Home", icon: <HomeIcon fontSize="small" /> },
  { href: "#about", label: "About", icon: <AccountBalanceIcon fontSize="small" /> },
  { href: "#academics", label: "Academics", icon: <MenuBookIcon fontSize="small" /> },
  { href: "#faculty", label: "Faculty", icon: <GroupsIcon fontSize="small" /> },
  { href: "#labs", label: "Laboratories", icon: <ScienceIcon fontSize="small" /> },
  { href: "#achievements", label: "Achievements", icon: <EmojiEventsIcon fontSize="small" /> },
  { href: "#contact", label: "Contact", icon: <EmailIcon fontSize="small" /> },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={2}
      sx={{ top: 0 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                startIcon={link.icon}
                sx={{ textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "inline-flex", md: "none" }, ml: "auto" }}
            onClick={() => setOpen(true)}
            aria-label="open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
