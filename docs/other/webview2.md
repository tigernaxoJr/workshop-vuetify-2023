# WebView2
好處：  
 - 讓 javascript 和 c# 程式碼互操作
 - 讓 windowform `漸進式`遷移到三層(tier)式架構的策略
需要 .NET Framework 4.7.2 以上 
## 原理
### WebView2
### 互操作原理
### 非同步下的UI線程
### 單檔佈署
#### 使用內嵌 dll
#### 隱藏 runtime
#### 隱藏暫存檔
## 實作懶人包
### 建立專案
 1. 取得專案範本  
	```
	git clone https://github.com/tigernaxoJr/WebView2.git
	```
 3. 修改 `MainForm.cs` 裡面的 url 變數
 4. 修改 `MainForm.cs` 裡面的 title 變數
 5. 調整 MainForm 大小

### 增加互操作函式
#### c# 
#### javascript 