import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function EmailAdd(props) {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      description,
    });
    setDescription("");
  };
  return (
    <form style={{margin: "20px"}} onSubmit={handleSubmit}>
      <div
        style={{
          width: "100%",
          maxWidth: 500,
        }}
      >
        <TextField
          type="email"
          label="email"
          id="email"
          variant="filled"
          sx={{
            width: "100%",
            maxWidth: 500,
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button class="add"
          disabled={description ? "" : "disabled"}
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
}
