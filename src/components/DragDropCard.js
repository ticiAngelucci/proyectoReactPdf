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
        <Card className="container" sx={{ marginTop: "20px", backgroundColor: "#f4fbfe",borderRadius:"19px" }}>
            <section class="sectionCardDragDrop">
                <div class="textSectionCardDragDrop"> Visor PDF</div>
            </section>
            <div
                style={{
                    cursor: "pointer",
                    width: "100vw",
                    height: "100vw",
                    marginTop: "70px"
                }}
                {...getRootProps({ className: "dropzone" })}
            >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{ color: "#737373", fontSize: "60px" }} />
                <p style={{
                    color: "#737373"
                }}>Arrastra y suelta archivos aquí o haz click para seleccionar archivos</p>
            </div>
           {/*  <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside> */}
        </Card>
    );
}