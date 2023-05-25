import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import EmailSection from "./EmailSection";
import PdfViewer from "./PdfViewer";

export default function SecondView(props) {
  const { pdf } = props;
  const [showCard, setShowCard] = useState(true);
  /* Con esta funcion estamos haciendo visible o no el componente para hacer la lista de emails */
  const toggleCard = () => {
    setShowCard(!showCard);
  };
  function CardView() {
    return (
      <Paper sx={{ width: "320px", margin: "auto" }}>
        {/* En EmailSection estamos pasando el archivo que cargamos en DragDropCard en formato base 64 para poder enviarlo por axios */}
        <EmailSection pdf={pdf} />
      </Paper>
    );
  }
  /* Lo dividiremos en dos componentes,uno por donde visualizaremos el pdf y otro para crear la lista de emails */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              boxShadow: { xs: "none" },
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
            }}
          >
            {/* En PdfViewer estamos pasando el archivo que cargamos en DragDropCard en formato base 64 */}
            <PdfViewer pdf={pdf} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <div class="buttonShow">
            <Button onClick={toggleCard} variant="outlined">
              {/* Si cumple showCard,mostramos la ventana para ingresar emails */}
              {showCard ? "Ocultar lista emails" : "Mostrar lista emails"}
            </Button>
          </div>
          {showCard && <CardView />}
        </Grid>
      </Grid>
    </Box>
  );
}
