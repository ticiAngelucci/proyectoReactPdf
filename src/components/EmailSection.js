import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailAdd from "./emailComponents/EmailAdd";
import EmailList from "./emailComponents/EmailList";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function EmailSection(props) {
  const { pdf } = props;

  function createPost() {
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
          lista_email: list.map((data)=>data.description),
          fecha: data.fecha,
          url_callback: "https://www.jus.mendoza.gob.ar/test_firma",
        })
        .then((response) => {
          console.log("Enviado", response.data);
        });
    });
  }

  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="flex-start"
      sx={{ borderRadius: "18px" }}
    >
      <div class="sectionCardDragDrop">Firmantes</div>
      <div>
        <EmailAdd handleAddItem={handleAddItem} />
        <EmailList list={list} setList={setList} />
      </div>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#48c1f4",
          color: "white",
          borderRadius: "19px",
        }}
        onClick={createPost}
      >
        Enviar
      </Button>
    </Grid>
  );
}
