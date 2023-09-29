# 開發環境
## 必要軟體
- [Git](https://git-scm.com/)，請勾選安裝 git bash。
- [VSCode](https://code.visualstudio.com/)
- [NodeJS、NPM](https://nodejs.org/en/download/)

選用：
- yarn：`npm install --global yarn`

## VSCode Extension
### 安裝套件的方式：
- 在 VSCode 裡面 `ctrl-shift-x` 搜尋安裝。
- 從 [Marketplace](https://marketplace.visualstudio.com/) 搜尋安裝。

### 工作坊懶人包
| 套件名稱                      | 說明                       | 安裝連結                                                  |
| :---------------------------- | :------------------------- | :-------------------------------------------------------- |
| Vue Volar extension Pack      | 必要套件                   | [點我](vscode:extension/MisterJ.vue-volar-extention-pack) |
| Vue 3 Support - All In One    | 必要套件                   | [點我](vscode:extension/Wscats.vue)                       |
| Vue VSCode Snippets           | 必要套件                   | [點我](vscode:extension/sdras.vue-vscode-snippets)        |
| Prettier                      | 必要套件                   | [點我](vscode:extension/esbenp.prettier-vscode)           |
| TypeScript Vue Plugin (Volar) | Typescript 開發 Vue 專案用 | [點我](vscode:extension/Vue.vscode-typescript-vue-plugin) |
| vscode-icons                  | 讓檔案有漂亮的 icon        | [點我](vscode:extension/vscode-icons-team.vscode-icons)   |
| indent-rainbow                | 為縮排上色                 | [點我](vscode:extension/oderwat.indent-rainbow)           |

- [Vue Volar extension Pack](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack)
	- [Vue Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
	- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Visual Studio Code plugin that auto completes filenames
	- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text
	- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Auto rename paired HTML/XML tag
	- [ESLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
	- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - Indented Sass syntax Highlighting, Autocomplete & Formatter
	- [SCSS](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter) Formatter - A Visual Studio Code Extension to format SCSS
	- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter - Code formatter using prettier
	- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Language support for Vue 3

## VSCode settings.json
1. `Ctrl-Shift-P` 輸入 json 搜尋，選擇 `Preference: Open User Settings (JSON)`
2. 在第一層加入 lint 設置
	```js
	"files.autoSave": "onWindowChange", // 切換視窗自動存檔
	"editor.formatOnSave": true, // 存檔時自動 format
	"vetur.validation.template": false, // 關閉 vetur 驗證 (或直接解除安裝 vetur)
	"editor.defaultFormatter": "esbenp.prettier-vscode" // 預設 format 使用 prettier
	```
3. 設置 vscode 排除追蹤檔案
	```js
	/* 
	    node_module、.git 等等資料夾底下有非常多不需要追蹤的檔案，
	    如果不排除於追蹤清單外，vscode會因為追蹤(watch)的檔案數量檔案達到飽和，
	    無法對正在編輯的檔案進行追蹤、執行hot reload。
	*/
	"files.watcherExclude": {
	    "**/.git/objects/**": true,
	    "**/.git/subtree-cache/**": true,
	    "**/node_modules/*/**": true
	},
	```

### 注意事項
請務必解除安裝 Vetur

### 同步帳號的擴充功能與設置
點左下角 (Sign In to Sync Settings)，登入後開啟同步設置 。  
目前接受 GitHub、Microsoft 帳號。  
在新的電腦登入帳號後就直接可以使用環境，有點像手機 App Store 的概念.  

## Vue DevTools
Vue DevTools 是 Browser Extension
| 瀏覽器  | 安裝連結                                                                                                  |
| ------- | --------------------------------------------------------------------------------------------------------- |
| chrome  | [安裝](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)         |
| edge    | [安裝](https://microsoftedge.microsoft.com/addons/detail/vuejs-devtools/olofadcdnkkjdfgjcmjaadnlehnnihnl) |
| firefox | [安裝](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)                                   |

## NVM
NVM 是用於 Node.js 版本控制的工具。它允許使用者安裝、切換和卸載不同版本的 Node.js。如果要維護舊專案，可以使用 NVM 切換回較舊版本的 Node.js。
### 安裝方式
打開 git bash 執行：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
安裝其他 node 版本
```bash
nvm install node # "node" is an alias for the latest version
nvm install 18.14.0 # or 16.3.0, 12.22.1, etc
```
查看 node.js 安裝清單，並列出當前環境版本：
```bash
nvm list

  * 18.14.0 (Currently using 64-bit executable)
    16.19.1
```
切換 node.js 版本：
```bash
nvm use
```
## Reference
 - [Vue Devtools](https://devtools.vuejs.org/guide/installation.html)
 - [GitHub - nvm-sh/nvm](https://github.com/nvm-sh/nvm)