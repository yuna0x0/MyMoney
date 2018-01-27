/**
 * MyMoney - index.js (Electron) v.1.0
 * Copyright (c) 2018 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const electron = require('electron')
const { app, BrowserWindow } = require('electron')
const Menu = electron.Menu
const path = require('path')
const url = require('url')
let win
let template = [{
    label: 'Window',
    role: 'window',
    submenu: [{
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
    }, {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
    }, {
        type: 'separator'
    }, {
        label: 'Toggle Developer Tools',
        role: 'toggledevtools'
    }]
}]
if (process.platform === 'darwin') {
    const name = "MyMoney"
    template.unshift({
        label: name,
        submenu: [{
            label: `About ${name}`,
            role: 'about'
        }, {
            type: 'separator'
        }, {
            label: 'Services',
            role: 'services',
            submenu: []
        }, {
            type: 'separator'
        }, {
            label: `Hide ${name}`,
            accelerator: 'Command+H',
            role: 'hide'
        }, {
            label: 'Hide Others',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
        }, {
            label: 'Show All',
            role: 'unhide'
        }, {
            type: 'separator'
        }, {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function () {
                app.quit()
            }
        }]
    })
    template[1].submenu.push({
        type: 'separator'
    }, {
            label: 'Bring All to Front',
            role: 'front'
        })
}
if (process.platform === 'win32') {
    const helpMenu = template[template.length - 1].submenu
}
function createWindow() {
    win = new BrowserWindow({ width: 1024, height: 768 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.on('closed', () => {
        win = null
    })
}
app.on('ready', function () {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    createWindow()
})
app.on('window-all-closed', () => {
    app.quit()
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
