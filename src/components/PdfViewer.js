import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import RemoveIcon from "@mui/icons-material/Remove";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PdfViewer(props) {
  const { pdf } = props;
  /* En este componente estaremos utilizando react-pdf-viewer para visualizar el prop con base64
renderToolbar lo utilizaremos para customizar el toolbar que viene por defecto en esta libreria */
  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {/* Aca estamos llamando las funciones que utilizaremos para interactuar con el pdf como hacer zoom,minimizar pdf,cambiar pagina */}
      {(slots) => {
        const {
          CurrentPageInput,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ZoomIn,
          ZoomOut,
        } = slots;

        return (
          <div class="containerTool">
            <div class="textPdfViewer">{pdf[0].docname.split(".pdf")}</div>
            <div class="itemsPdfViewer">
              <ZoomOut>
                {(props) => (
                  <button class="buttonPdfZoomOut" onClick={props.onClick}>
                    <RemoveIcon />
                  </button>
                )}
              </ZoomOut>
            </div>
            <div class="itemsPdfViewer">
              <ZoomIn>
                {(props) => (
                  <button class="buttonPdfZoomIn" onClick={props.onClick}>
                    <AddIcon />
                  </button>
                )}
              </ZoomIn>
            </div>
            <div class="currentPageInput">
              <CurrentPageInput />
            </div>
            <div class="itemsPdfViewer">
              {" "}
              de <NumberOfPages />
            </div>
            <div class="goToPreviousPage">
              <GoToPreviousPage>
                {(props) => (
                  <button
                    class="buttonLeftRight"
                    style={{
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                    }}
                    disabled={props.isDisabled}
                    onClick={props.onClick}
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
              </GoToPreviousPage>
            </div>
            <div class="itemsPdfViewer">
              <GoToNextPage>
                {(props) => (
                  <button
                    class="buttonLeftRight"
                    style={{
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                    }}
                    disabled={props.isDisabled}
                    onClick={props.onClick}
                  >
                    <ChevronRightIcon />
                  </button>
                )}
              </GoToNextPage>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  return (
    <div className="pdf-container">
      {pdf && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={pdf[0].documento}
            plugins={[defaultLayoutPluginInstance]}
          ></Viewer>
        </Worker>
      )}
    </div>
  );
}
