import { BrowserWindow, globalShortcut } from "electron";
import * as path from "path";

class Workspace extends BrowserWindow {
  constructor() {
    const options = {
      show: false,
      frame: true,
      width: 1280,
      height: 720,
      icon: path.join(__dirname, "logo.png"),
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false,
        contextIsolation: false,
      },
    };

    super(options);

    this.once("ready-to-show", async () => {
      this.show();

      if (process.env.NODE_ENV == "development") {
        this.webContents.openDevTools();
      }
    });

    this.on("destroy", () => {});

    this.setMenuBarVisibility(false);
    this.loadFile(path.join(__dirname, "index.html"));
  }
}

export { Workspace };
