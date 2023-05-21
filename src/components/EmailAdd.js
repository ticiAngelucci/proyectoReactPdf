import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

export default function EmailAdd(props) {
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="file-input">
                <TextField
                    type="email"
                    label="email"
                    id="email"
                    variant="filled"
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                        backgroundColor: "#f4fbfe"
                    }}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                    style={{
                        background: "none",
                        border: "none",
                    }}
                    disabled={description ? "" : "disabled"}
                >
                    <AddIcon />
                </button>
            </div>
        </form>
    );
}