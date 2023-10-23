# 常用工具
## 日期 dayx
1. 在 dayjs 基礎上擴增了 dte, tme, age 屬性。 
	```ts
	import dayjs from 'dayjs';

	declare module 'dayjs' {
	interface Dayjs {
		dte: string;
		tme: string;
		age: string;
		parseKt: (dte: string, tme?: string) => Dayjs;
	}
	}

	export = dayjs;
	export as namespace dayjs;
	```
2. 在 dayjs 的標準格式基礎上，擴增了可解析民國年的格式 `YYY`
	::: details
	```js
	import day from 'dayjs';
	const prototype = Object.getPrototypeOf(day());
	const yyy = (dt) => (dt.getFullYear() - 1911).toString().padStart(3, '0');
	const handler = {
	get: function (target, prop, receiver) {
		if (prop === 'parseKt') {
		return function (dte, tme) {
			!!dte && (receiver.dte = dte);
			!!tme && (receiver.tme = tme);
			return receiver;
		};
		}
		if (prop === 'age') return day().diff(receiver, 'years', false);
		if (prop === 'dte') return receiver.format('YYYMMDD');
		if (prop === 'tme') return receiver.format('HHmmss');
		// format
		if (prop === 'format')
		return (format) => {
			const formattingTokens = /Y{4,}|Y{3}|[^Y{3}]+/g;
			const arr = format.match(formattingTokens);
			const format2 = arr
			.map((x) => (x === 'YYY' ? yyy(target.$d) : x))
			.join('');
			return new day(target.$d).format(format2);
		};

		// Return the original property value
		if (typeof target[prop] !== 'function') return target[prop];
		// Wrap the original function with custom behavior
		return function (...args) {
		const result = target[prop].apply(target, args);
		const isReturnDayjs = Object.getPrototypeOf(result) === prototype;
		return isReturnDayjs ? p(result, handler) : result;
		};
	},
	set(obj, prop, v, receiver) {
		if (prop === 'dte') {
		v = v.padStart(7, '0');
		const yyy = parseInt(v.substring(0, 3)) + 1911;
		obj.$d.setFullYear(yyy);
		obj.$d.setMonth(parseInt(v.substring(3, 5)) - 1);
		obj.$d.setDate(parseInt(v.substring(5, 7)));
		return receiver;
		}
		if (prop === 'tme') {
		v = v.padEnd(6, '0');
		obj.$d.setHours(parseInt(v.substring(0, 2)));
		obj.$d.setMinutes(parseInt(v.substring(2, 4)));
		obj.$d.setSeconds(parseInt(v.substring(4, 6)));
		return receiver;
		}
		return Reflect.set(...arguments);
	},
	};

	const p = (...args) => new Proxy(day(...args), handler);

	export default p;
	```
	:::


### 使用方式：
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
```