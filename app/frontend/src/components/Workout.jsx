import React, { useState, useEffect } from "react";
import Log from "./Log";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Workout = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/logs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  const [logs, setLogs] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const [newMinutes, setNewMinutes] = useState();
  const [newNotes, setNewNotes] = useState("");

  const fetchLogs = () => {
    fetch("http://localhost:8000/api/logs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLogs(data));
  };

  const deleteLog = async (id) => {
    await fetch(`http://localhost:8000/api/log/${id}/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    fetchLogs();
  };

  const createLog = async () => {
    const log = { newActivity, newMinutes, newNotes };
    if (newActivity === "" || newMinutes === "" || newNotes === "") {
      alert("Please fill out all fields");
    } else if (newActivity.length > 100) {
      alert("Activity name is too long");
    } else if (newNotes.length > 100) {
      alert("Notes are too long");
    } else {
      await fetch("http://localhost:8000/api/logs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity: newActivity,
          minutes: newMinutes,
          notes: newNotes,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      fetchLogs();
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {logs.map((log) => (
          <Log
            key={log.id}
            id={log.id}
            activity={log.activity}
            minutes={log.minutes}
            notes={log.notes}
            date={log.date}
            deleteSelf={deleteLog}
          />
        ))}
      </Box>

      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          multiline
          rowsMax={2}
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          type="text"
          placeholder="Activity"
          sx={{
            width: 300,
          }}
        />
        <TextField
          multiline
          rowsMax={8}
          value={newNotes}
          onChange={(e) => setNewNotes(e.target.value)}
          type="text"
          placeholder="Notes"
          sx={{
            width: 300,
          }}
        />
        <TextField
          type="number"
          inputProps={{ min: 1 }}
          value={newMinutes}
          onChange={(e) => setNewMinutes(e.target.value)}
          placeholder="Minutes"
          sx={{
            width: 300,
          }}
        />
        <Button variant="contained" onClick={createLog}>
          Add Log
        </Button>
      </Box>
    </div>
  );
};

export default Workout;
