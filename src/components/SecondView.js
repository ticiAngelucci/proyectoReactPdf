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

  const toggleCard = () => {
    setShowCard(!showCard);
  };
  function CardView() {
    return (
      <Grid item xs={12} md={4}>
        <Paper>
          <EmailSection pdf={pdf} />
        </Paper>
      </Grid>
    );
  }

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
            <PdfViewer pdf={pdf} />
          </Paper>
        </Grid>
        <div style={{ width: "100%",marginTop:"10px" }}>
          <Button onClick={toggleCard} variant="outlined">
            {" "}
            {showCard ? "Ocultar lista emails" : "Mostrar lista emails"}
          </Button>
        </div>
        {showCard && <CardView />}
      </Grid>
    </Box>
  );
}
