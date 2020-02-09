const { app, BrowserWindow } = require('electron');

let win;

app.once('ready', () => {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
  });

  win.loadFile('dist/index.html');

  win.once('closed', () => {
    win = null;
  });
});

app.once('window-all-closed', () => app.quit());
