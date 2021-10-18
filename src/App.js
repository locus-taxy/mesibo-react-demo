import React, { useEffect } from "react";
import { initializeMesibo } from "./mesibo/ChatWorker";
import LoadingButton from "@mui/lab/LoadingButton";
import { store } from "./store";
import { Provider, useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import { isMesiboinitializedSelector } from "./mesibo/state/selectors";

function App() {
  useEffect(() => {
    initializeMesibo();
  }, []);

  const isMesiboInitialized = useSelector(isMesiboinitializedSelector);

  return (
    <div className="App">
      <LoadingButton loading={!isMesiboInitialized}>
        <ChatIcon />
      </LoadingButton>
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
