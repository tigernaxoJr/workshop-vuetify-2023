- [安裝 Extension](#安裝-extension)
- [設置 settings.json](#設置-settingsjson)

## 安裝 Extension
搜尋 volar 安裝下面這兩個 Extension
- Vue Volar extension Pack
- TypeScript Vue Plugin (Volar)

![extension](./vscode/extension.jpg)

## 設置 settings.json
1. `Ctrl-Shift-P` 輸入 json 搜尋，選擇 `Preference: Open User Settings (JSON)`
2. 加入 lint 設置
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