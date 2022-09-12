import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Log = ({ id, activity, minutes, notes, date, deleteSelf }) => {
  const handleClick = (e) => {
    e.preventDefault();
    deleteSelf(id);
  };

  return (
    <Box
      sx={{
        backgroundColor: "grey.100",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        padding: 1,
      }}
    >
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Typography
          multiline
          variant="outlined"
          sx={{
            minHeight: 30,
          }}
        >
          {activity}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Typography
          multiline
          variant="outlined"
          sx={{
            width: 300,
            minHeight: 50,
          }}
        >
          {notes}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Typography
          multiline
          variant="outlined"
          sx={{
            width: 300,
            minHeight: 10,
          }}
        >
          {minutes}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Typography
          multiline
          variant="outlined"
          sx={{
            width: 300,
            minHeight: 10,
          }}
        >
          {date}
        </Typography>
      </Paper>
      <Button variant="contained" onClick={handleClick}>
        Delete
      </Button>
    </Box>
  );
};

export default Log;
