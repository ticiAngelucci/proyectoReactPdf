import React from 'react';
import { useDropzone } from 'react-dropzone';
import Card from '@mui/material/Card';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const e = React.createElement

export default function DragDropCard(props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <Card className="container" sx={{marginTop:"50px",backgroundColor:"#f4fbfe"}}>
            <section class="sectionCardDragDrop">
                Hello
            </section>
            <div
                style={{
                    cursor: "pointer",
                    height: "200px",
                }}
                {...getRootProps({ className: "dropzone" })}
            >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{ color:"#737373 !important" }}/>
                <p>Arrastra y suelta archivos aquí o haz click para seleccionar archivos</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </Card>
    );
}