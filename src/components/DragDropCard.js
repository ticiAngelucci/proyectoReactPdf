import React,{ useCallback,useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Card from '@mui/material/Card'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

export default function DragDropCard(props) {
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload=function(){
                var arrayAux=[]
                var base64=reader.result
                arrayAux=base64.split(",")
                setDescription(base64)
                handleAddItem({
                    id: (+new Date()).toString(),
                    base64:base64
                }); 
            }
          })
      }, [])
    const { acceptedFiles, getRootProps, getInputProps,fileRejections } = useDropzone({onDrop,accept: {'application/pdf': []},maxFiles:1});

    const files = acceptedFiles.map(file =>(
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
        
    ));
    const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
        return (
          <li key={file.path}>
               
                 {errors.map(e => <li key={e.code}>Muchos pdfs,solo se permiten 1</li>)}
             
     
          </li>
        ) 
       });
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
    
    return (
        <Card className="container" sx={{ marginTop: "20px", backgroundColor: "#f4fbfe",borderRadius:"19px" }}>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
                <div>{fileRejectionItems}</div>
            </aside> 
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
                <input {...getInputProps()}/>
                
                <CloudUploadIcon sx={{ color: "#737373", fontSize: "60px" }} />
                <p style={{
                    color: "#737373"
                }}>Arrastra y suelta archivos aquí o haz click para seleccionar archivos</p>
            </div>
        </Card>
    );
            }
