import { app } from "electron";
import { Workspace } from "./Workspace";

(async () => {
  await app.whenReady();
  new Workspace();
})();