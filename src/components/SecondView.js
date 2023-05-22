import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PdfViewer from "./PdfViewer";
import EmailSection from "./EmailSection";

export default function SecondView(props) {
  const { pdf } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={8}>
          <Paper>
            <PdfViewer pdf={pdf} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <EmailSection pdf={pdf} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
