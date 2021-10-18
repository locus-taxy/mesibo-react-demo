import React, { useEffect } from "react";
import { initializeMesibo } from "./mesibo/ChatWorker";
import LoadingButton from "@mui/lab/LoadingButton";
import { MesiboProvider } from "./mesibo/state";

function App() {
  useEffect(() => {
    initializeMesibo();
  }, []);
  return (
    <div className="App">
      <LoadingButton />
    </div>
  );
}

function AppWrapper() {
  return (
    <MesiboProvider>
      <App />
    </MesiboProvider>
  );
}

export default AppWrapper;
