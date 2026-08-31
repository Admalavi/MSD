import { useState } from "react";

import {
  Box,
  Button,
  Fab,
  LinearProgress,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";

function App() {
  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);

  // Popover state
  const [popoverAnchor, setPopoverAnchor] = useState(null);

  // Rating state
  const [rating, setRating] = useState(3);

  // Pagination state
  const [page, setPage] = useState(1);

  // Menu functions
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Popover functions
  const handlePopoverClick = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  // Speed Dial actions
  const actions = [
    {
      icon: <EditIcon />,
      name: "Edit",
    },
    {
      icon: <DeleteIcon />,
      name: "Delete",
    },
    {
      icon: <ShareIcon />,
      name: "Share",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>

      <Typography variant="h4" gutterBottom>
        Material UI Components
      </Typography>

      {/* 1. FAB */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        1. Floating Action Button
      </Typography>

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>


      {/* 2. Linear Progress */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        2. Linear Progress
      </Typography>

      <LinearProgress
        variant="determinate"
        value={60}
      />


      {/* 3. Menu */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        3. Menu
      </Typography>

      <Button
        variant="contained"
        onClick={handleMenuClick}
      >
        Open Menu
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          Profile
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          Settings
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          Logout
        </MenuItem>
      </Menu>


      {/* 4. Pagination */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        4. Pagination
      </Typography>

      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => setPage(value)}
        color="primary"
      />

      <Typography sx={{ mt: 1 }}>
        Current Page: {page}
      </Typography>


      {/* 5. Popover */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        5. Popover
      </Typography>

      <Button
        variant="outlined"
        onClick={handlePopoverClick}
      >
        Open Popover
      </Button>

      <Popover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography>
            Hello! This is a Popover.
          </Typography>
        </Box>
      </Popover>


      {/* 6. Rating */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        6. Rating
      </Typography>

      <Rating
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />

      <Typography>
        Rating: {rating}
      </Typography>


      {/* 7. Skeleton */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        7. Skeleton
      </Typography>

      <Skeleton
        variant="text"
        width={300}
      />

      <Skeleton
        variant="rectangular"
        width={300}
        height={100}
      />

      <Skeleton
        variant="circular"
        width={50}
        height={50}
      />


      {/* 8. Speed Dial */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        8. Speed Dial
      </Typography>

      <SpeedDial
        ariaLabel="Speed Dial"
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>

    </Box>
  );
}

export default App;