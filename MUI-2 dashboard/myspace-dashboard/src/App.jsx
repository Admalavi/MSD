import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Card,
  CardContent,
  Switch,
  CircularProgress,
  Tooltip,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import {
  Menu,
  Notifications,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

function App() {

  // Menu open/close
  const [menu, setMenu] = useState(false);

  // Light ON/OFF
  const [light, setLight] = useState(false);

  // Dark mode
  const [dark, setDark] = useState(false);

  // Selected tab
  const [tab, setTab] = useState(0);


  // Theme
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: "#6C63FF",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* HEADER */}

      <AppBar position="static">

        <Toolbar>

          {/* Menu */}

          <Tooltip title="Open Menu">

            <IconButton
              color="inherit"
              onClick={() => setMenu(true)}
            >
              <Menu />
            </IconButton>

          </Tooltip>


          {/* Title */}

          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            My Dashboard
          </Typography>


          {/* Dark Mode */}

          <Tooltip title="Change Theme">

            <IconButton
              color="inherit"
              onClick={() => setDark(!dark)}
            >

              {dark ? <LightMode /> : <DarkMode />}

            </IconButton>

          </Tooltip>


          {/* Notification */}

          <Tooltip title="Notifications">

            <IconButton color="inherit">

              <Badge
                badgeContent={3}
                color="error"
              >
                <Notifications />
              </Badge>

            </IconButton>

          </Tooltip>


          {/* Avatar */}

          <Avatar
            src="/profile.jpg"
            alt="Akshata"
            sx={{ ml: 2 }}
          />

        </Toolbar>

      </AppBar>


      {/* DRAWER */}

      <Drawer
        open={menu}
        onClose={() => setMenu(false)}
      >

        <Box sx={{ width: 250 }}>

          <Box
            sx={{
              textAlign: "center",
              padding: 3,
              backgroundColor: "primary.main",
              color: "white",
            }}
          >

            <Avatar
              src="/profile.jpg"
              sx={{
                width: 70,
                height: 70,
                margin: "auto",
              }}
            />

            <Typography variant="h6">
              Akshata
            </Typography>

            <Typography>
              CSE Student
            </Typography>

          </Box>


          <List>

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTab(0);
                  setMenu(false);
                }}
              >
                <ListItemText primary="Dashboard" />
              </ListItemButton>

            </ListItem>


            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTab(1);
                  setMenu(false);
                }}
              >
                <ListItemText primary="Tasks" />
              </ListItemButton>

            </ListItem>


            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTab(2);
                  setMenu(false);
                }}
              >
                <ListItemText primary="Profile" />
              </ListItemButton>

            </ListItem>

          </List>

        </Box>

      </Drawer>


      {/* MAIN CONTENT */}

      <Box
        sx={{
          maxWidth: 1000,
          margin: "auto",
          padding: 4,
        }}
      >


        {/* DASHBOARD */}

        {tab === 0 && (

          <>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
            >
              Welcome, Akshata! 🖤❤️
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Here's your simple dashboard.
            </Typography>


            {/* CARDS */}

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >

              <Card sx={{ flex: 1, minWidth: 200 }}>

                <CardContent>

                  <Typography color="text.secondary">
                    My Tasks 😊
                  </Typography>

                  <Typography variant="h3">
                    10
                  </Typography>

                </CardContent>

              </Card>


              <Card sx={{ flex: 1, minWidth: 200 }}>

                <CardContent>

                  <Typography color="text.secondary">
                    Completed 😍
                  </Typography>

                  <Typography variant="h3">
                    6
                  </Typography>

                </CardContent>

              </Card>


              <Card sx={{ flex: 1, minWidth: 200 }}>

                <CardContent>

                  <Typography color="text.secondary">
                    Progress ☺️
                  </Typography>

                  <Typography variant="h3">
                    60%
                  </Typography>

                </CardContent>

              </Card>

            </Box>


            {/* PROGRESS */}

            <Card sx={{ mt: 3 }}>

              <CardContent
                sx={{ textAlign: "center" }}
              >

                <Typography variant="h6">
                  Your Progress
                </Typography>

                <CircularProgress
                  variant="determinate"
                  value={60}
                  size={120}
                  sx={{ mt: 2 }}
                />

                <Typography sx={{ mt: 2 }}>
                  60% Completed 🚀
                </Typography>

              </CardContent>

            </Card>


            {/* DESK LIGHT */}

            <Card sx={{ mt: 3 }}>

              <CardContent>

                <Typography variant="h6">
                  💡 Switch
                </Typography>

                <Typography color="text.secondary">
                  {light ? "switch is ON" : "switch is OFF"}
                </Typography>

                <Switch
                  checked={light}
                  onChange={() => setLight(!light)}
                />

              </CardContent>

            </Card>

          </>

        )}


        {/* TASKS */}

        {tab === 1 && (

          <Card>

            <CardContent>

              <Typography variant="h5">
                My Tasks
              </Typography>

              <Typography sx={{ mt: 2 }}>
                ✅ Complete React project
              </Typography>

              <Typography sx={{ mt: 2 }}>
                ⏳ Learn Material UI
              </Typography>

              <Typography sx={{ mt: 2 }}>
                📚 Study for exam
              </Typography>

            </CardContent>

          </Card>

        )}


        {/* PROFILE */}

        {tab === 2 && (

          <Card>

            <CardContent
              sx={{ textAlign: "center" }}
            >

              <Avatar
                src="/profile.jpg"
                sx={{
                  width: 120,
                  height: 120,
                  margin: "auto",
                }}
              />

              <Typography
                variant="h5"
                sx={{ mt: 2 }}
              >
                Akshata Malavi
              </Typography>

              <Typography color="text.secondary">
                B.Tech CSE Student
              </Typography>

            </CardContent>

          </Card>

        )}


        {/* TABS */}

        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          centered
          sx={{ mt: 4 }}
        >

          <Tab label="Dashboard" />

          <Tab label="Tasks" />

          <Tab label="Profile" />

        </Tabs>

      </Box>

    </ThemeProvider>
  );
}

export default App;