

let api;
let isMesiboinitialized = false;
class MesiboListener {
  Mesibo_OnConnectionStatus(status, value) {
    if (status === window.MESIBO_STATUS_ONLINE) {
      console.log("mesibo online", status);
    }
    console.log("Connection status", status, value);
  }
  Mesibo_OnMessageStatus(msg) {
    console.log("Message status", msg);
  }
  Mesibo_OnMessage(msg, data) {
    console.log("Msg received", msg, data);
  }
}
const afterScriptLoads = async () => {
  api = new window.Mesibo();
  api.setCredentials(
    "134315310f4da1a8fdf6a938b7e309d12ad005aca3d0b46e7e333bca1b"
  );
  api.setListener(new MesiboListener());
  api.setDatabase("mesibo");
  api.setAppName("test");
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
