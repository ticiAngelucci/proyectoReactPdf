import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useState } from "react";
import EmailAdd from "./emailComponents/EmailAdd";
import EmailList from "./emailComponents/EmailList";

/* Esta es la url del backend donde la enviaremos */
const baseURL = "https://proyectoReact.com/civisign/serviciofirma";

export default function EmailSection(props) {
  const { pdf } = props;
  /* Crearemos error para poder encontrar errores si no hay un email agregado*/
  const [error, setError] = useState("null");
  /* En esta parte estamos creando la data para poder enviarlo al backend */
  const createPost = () => {
    /* Si la lista de emails se encuentra vacia,saltara un error y no podra enviarse */
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
      {error === 1 ? (
        <div class="errorEmail">Error agregar almenos un email</div>
      ) : null}
      <div class="containerEmail">
        {/* Con el componente EmailList estamos agregando los items a la lista,pasandolo mediante props */}
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
