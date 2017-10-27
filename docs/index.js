/*!
 *    MyMoney - index.js (Electron) v.1.0
 *    Copyright (C) 2017 MING-CHIEN LEE
 * 
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as published
 *    by the Free Software Foundation, either version 3 of the License, or
 *    any later version.
 * 
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 * 
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 *    Copyright Contact Information
 *    MING-CHIEN LEE <edisonlee@edisonlee55.com> (https://www.edisonlee55.com/#contact)
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