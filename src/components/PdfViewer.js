import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RemoveIcon from "@mui/icons-material/Remove";

export default function PdfViewer(props) {
  const { pdf } = props;
  const [file, setFile] = useState();

  const renderToolbar = (Toolbar) => (
    <Toolbar>
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
          <div style={{ alignItems: "center", display: "flex" }}>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                    }}
                    onClick={props.onClick}
                  >
                    <RemoveIcon />
                  </button>
                )}
              </ZoomOut>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                    }}
                    onClick={props.onClick}
                  >
                    <AddIcon />
                  </button>
                )}
              </ZoomIn>
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                      padding: "8px",
                    }}
                    disabled={props.isDisabled}
                    onClick={props.onClick}
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
              </GoToPreviousPage>
            </div>
            <div style={{ padding: "0px 2px", width: "4rem" }}>
              <CurrentPageInput />
            </div>
            <div style={{ padding: "0px 2px" }}>
              {" "}
              de <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage>
                {(props) => (
                  <button
                    style={{
                      backgroundColor: props.isDisabled ? "#96ccff" : "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: props.isDisabled ? "not-allowed" : "pointer",
                      padding: "8px",
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

      {!pdf && <>No file is selected yet</>}
    </div>
  );
}
