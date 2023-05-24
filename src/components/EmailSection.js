import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useState } from "react";
import EmailAdd from "./emailComponents/EmailAdd";
import EmailList from "./emailComponents/EmailList";

const baseURL = "https://proyectoReact.com/civisign/serviciofirma";

export default function EmailSection(props) {
  const { pdf } = props;
  const [error, setError] = useState("null");
  const createPost = () => {
    if (list.length !== 0) {
      pdf.map((data) => {
        axios
          .post(baseURL, {
            docname: data.docname,
            documento: data.documento,
            metadata: {
              cargo: "tester",
              razon: "prueba de desarrollo",
              localidad: "Mendoza",
            },
            lista_email: {
              email: list.map((data) => data.description),
            },
            fecha: data.fecha,
            url_callback: "https://www.jus.mendoza.gob.ar/test_firma",
          })
          .then((response) => {
            console.log("Enviado", response.data);
          });
      });
    } else {
      setError(1);
    }
  };

  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ borderRadius: "18px" }}
    >
      <div class="sectionCardDragDrop">Firmantes</div>
      <EmailAdd handleAddItem={handleAddItem} />
      {error === 1 ? <div style={{
          backgroundColor: "#cb3234",
          color: "white",
          margin: "20px",
          borderRadius: "23px",
          padding: "10px",
        }}>Error agregar almenos un email</div> : null}
      <div
        style={{
          backgroundColor: "#f4fbfe",
          margin: "20px",
          borderRadius: "23px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <EmailList list={list} setList={setList} />
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#48c1f4",
            color: "white",
            borderRadius: "19px",
            boxShadow: "0px 8px 5px rgba(0, 0, 0, 0.1)",
          }}
          onClick={createPost}
        >
          Enviar
        </Button>
      </div>
    </Grid>
  );
}
