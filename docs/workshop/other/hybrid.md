# Hybrid App
混合式應用程式是一種使用 Web 技術 (例如 HTML、CSS 和 JavaScript) 和原生技術 (例如 Swift、Kotlin 和 C#) 開發的應用程式。混合式應用程式可以跨平台運行。
可做到讓前端程式碼呼叫原生程式。

| 功能                     | Webview2                                | Tauri            |
| ------------------------ | --------------------------------------- | ---------------- |
| 發行檔是否包裹前端程式碼 | 否                                      | 是               |
| 運行時是否需要網路連結   | 是                                      | <mark>否 </mark> |
| 運行時是否需要 runtime   | 是                                      | <mark>否</mark>  |
| 前端有更新需重新佈署     | <mark>否</mark>                         | 是               |
| 性能                     | 中等                                    | <mark>高 </mark> |
| 開發難度                 | <mark>低</mark>                         | 中等             |
| 維護成本                 | 低(不考慮前端維護)<br> 高(考慮前端維護) | 中等             |

## WebView2
Webview2是由Microsoft開發的技術，它是一個嵌入式Web瀏覽器控件，可用於在應用程式中顯示Web內容。
它使用Microsoft的Edge瀏覽器作為其渲染引擎，因此可以提供與Edge瀏覽器相同的Web兼容性和功能。
Webview2通常與.NET和C++應用程式一起使用，可在Windows平台上嵌入Web視圖。
它適用於開發使用Windows API或.NET框架的應用程式，並具有完整的Windows集成能力。  

需求：
- Visual Studio 2017 (開發)
- .Net Framework 4.7.2 以上

好處：  
 - 讓 javascript 和 c# 程式碼互操作
 - 讓 windowform `漸進式`遷移到三層(tier)式架構的策略

![](https://learn.microsoft.com/en-us/microsoft-edge/webview2/index-images/what-webview.png)

### 單檔佈署
### 互操作性
#### c# 
#### javascript 
### 非同步下的UI線程
#### 使用內嵌 dll
#### 隱藏 runtime
#### 隱藏暫存檔
單檔包裹體驗：
```bash
git clone https://github.com/tigernaxoJr/WebView2.git
# 修改 `MainForm.cs` 裡面的網址、調整 MainForm 大小，執行專案。
```

## Tauri
Tauri是一個用於構建桌面應用程式的工具集，它結合了Rust和Web技術。
它使用Web技術（如HTML、CSS和JavaScript）來構建用戶界面，並使用Rust來構建桌面應用程式的外殼。
Tauri允許您使用Web技術來構建應用程式的前端，同時在桌面應用程式外殼中使用Rust來處理本機功能和系統調用。
Tauri提供了跨平台支援，可在Windows、macOS和Linux等多個平台上運行。

需求：
- Rust (開發)
- Microsoft C++ build tools (開發)
- Visual Studio Desktop development with C++ (開發)
- Windows 10 SDK (開發)
- WebView2 (Windows 10 (1803)/ Windows 11 以後不需要)

## Reference
- [MSDN - WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/)
- [MSDN - Get started with WebView2 in WinForms apps](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/winforms)
- [Github - tiernaxoJr/webview2](https://github.com/tigernaxoJr/WebView2)
- [Tauri](https://tauri.app/)
- [Tauri - Quick Start/Vite](https://tauri.app/v1/guides/getting-started/setup/vite)