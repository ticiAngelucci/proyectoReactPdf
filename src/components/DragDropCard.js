import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Card from "@mui/material/Card";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DragDropCard(props) {
  /* En este componente estaremos utilizando la libreria react-dropzone para poder subir archivos pdf
  En la funcion onDrop,estariamos convirtiendo la url a base 64 para poder pasarla por el prop */
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        var arrayAux = [];
        var base64 = reader.result;
        arrayAux = base64.split(",");
        setDescription(base64);
        handleAddItem({
          id: (+new Date()).toString(),
          docname: file.name,
          documento: base64,
          fecha: file.lastModifiedDate,
        });
      };
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({ onDrop, accept: { "application/pdf": [] }, maxFiles: 1 });
  /* Aca visualizaremos si hay algun error al cargar el pdf */
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {errors.map((e) => (
          <li key={e.code}>Muchos pdfs,solo se permiten 1</li>
        ))}
      </li>
    );
  });
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  return (
    <Card
      className="container"
      sx={{
        marginTop: "20px",
        backgroundColor: "#f4fbfe",
        borderRadius: "19px",
      }}
    >
      {fileRejectionItems.length !== 0 ? (
        <div>Error,solo se puede agregar un archivo pdf</div>
      ) : null}
      <section class="sectionCardDragDrop">
        <div class="textSectionCardDragDrop"> Visor PDF</div>
      </section>
      <div
        style={{
          cursor: "pointer",
          width: "100vw",
          height: "100vw",
          marginTop: "70px",
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />

        <CloudUploadIcon sx={{ color: "#737373", fontSize: "60px" }} />
        <p
          style={{
            color: "#737373",
          }}
        >
          Arrastra y suelta archivos aquí o haz click para seleccionar archivos
        </p>
      </div>
    </Card>
  );
}
