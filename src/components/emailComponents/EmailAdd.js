import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function EmailAdd(props) {
  const { handleAddItem } = props;
  /* con handleSubmit estamos agregando el contenido del input type email (por ende no dejara de ingresar contenido que no tenga @) a description */
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      description,
      done: false,
      id: (+new Date()).toString(),
    });
    setDescription("");
  };
  return (
    <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
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
        <button class="add" disabled={description ? "" : "disabled"}>
          <AddIcon />
        </button>
      </div>
    </form>
  );
}
