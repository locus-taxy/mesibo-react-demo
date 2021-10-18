/* eslint-disable no-undef */
import { store } from "../store";
import {
  initializeMesibo as initializeMesiboInRedux,
  updateTimeStamp,
} from "./state/slice";

let api;
let isMesiboinitialized = false;
class MesiboListener {
  Mesibo_OnConnectionStatus(status, value) {
    if (status === MESIBO_STATUS_ONLINE) {
      store.dispatch(initializeMesiboInRedux());
      console.log("mesibo online", status);
    }
    console.log("Connection status", status, value);
  }
  Mesibo_OnMessageStatus(msg) {
    store.dispatch(updateTimeStamp());
    console.log("Message status", msg);
  }
  Mesibo_OnMessage(msg, data) {
    store.dispatch(updateTimeStamp());
    console.log("Msg received", msg, data);
  }
}
const afterScriptLoads = async () => {
  api = new window.Mesibo();
  api.setCredentials(process.env.REACT_APP_MESIBO_CREDENTIALS);
  api.setListener(new MesiboListener());
  api.setDatabase(process.env.REACT_APP_MESIBO_DATABASE);
  api.setAppName(process.env.REACT_APP_MESIBO_APP);
  api.start();
  window.api = api;
};

const initializeMesibo = () => {
  if (isMesiboinitialized) {
    return;
  } else {
    isMesiboinitialized = true;
  }
  let element = document.querySelector("#mesibo-script");
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "text/javascript");
    element.setAttribute("src", "https://api.mesibo.com/mesibo.js");
    element.setAttribute("id", "mesibo-script");
    document.body.append(element);
    element.addEventListener("load", afterScriptLoads);
  }
};

const getMesiboApi = () => {
  return api;
};

const getProfile = (userId: string) => {
  return api.getProfile(userId);
};

export { getMesiboApi, initializeMesibo, getProfile };
