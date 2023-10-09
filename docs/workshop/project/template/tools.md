# 常用工具
## 日期 dayx
```js
// 可搭配標準格式解析民國年(YYY)
const d = dayx("0330315 123338", "YYYMMDD HHmmss")
// 可搭配標準格式格式化民國年(YYY)
d.format("民國YYY年MM月DD日 HH:mm:ss")
// 民國033年03月15日 12:33:38

// 可取得常用的民國年(YYYMMDD)、日期(HHmmss)、年齡
d.age // 79
d.dte // 0330315
d.tme // 123338

// 其他使用方式同 dayjs
```
## JWT 
jwt
```js
import { parseJwt } from './utils/jwt'

// 將 jwt 的 payload 轉換為物件
const payload = parseJwt(token)
```
## 網址
UrlHelper
```js
// 取得網址列特定參數，預設大小寫不敏感
const key = UrlHelper.GetParam(url, 'key')

let url = new URL(window.location.href)
// 移除特定的網址列參數，預設大小寫不敏感
url = UrlHelper.RemoveKey(url, 'key')
// 取得網址列參數作為 key-value 的物件
const query = UrlHelper.GetQueryObj(url)
```