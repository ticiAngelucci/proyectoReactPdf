import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

export default function EmailAdd(props) {
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                        width: '100%',
                        maxWidth: 500,
                        backgroundColor: "#f4fbfe",
                    }}>
                <TextField
                    type="email"
                    label="email"
                    id="email"
                    variant="filled"
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        backgroundColor: "#f4fbfe",
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