主要是設置提供  index.html、反向代理
### 提供 index.html 
當路由符合規則時，依序嘗試回傳設置的內容。
### 反向代理
![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Reverse_proxy_h2g2bob.svg/800px-Reverse_proxy_h2g2bob.svg.png)
## IIS 部屬
0. IIS 必須有安裝 `URL Rewrite Module`、`Application Request Routing`，反向代理好像要從 server 端手動設置？
1. 轉為應用程式
2. web.config 設定：
  ```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
				<rule name="Handle History Mode and custom 404/500" stopProcessing="true">
				  <match url="(.*)" />
				  <conditions logicalGrouping="MatchAll">
					<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
					<add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
				  </conditions>
				  <action type="Rewrite" url="index.html" />
				</rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```
## Nginx 部屬
重點是 `try_files`，try_files 只能運行於 server, location
```nginx
# Typically I use this file as a boilerplate to configure an nginx docker container
#
# This goes in /etc/nginx/conf.d/default.conf
# If you are reverse proxying an API
# 通常我使用這個文件作為配置Nginx Docker容器的範本
#
# 這個配置應放在/etc/nginx/conf.d/default.conf中
# 如果您正在反向代理一個API
upstream api {
	# 這裡設置 api
    server someapi.ktgh.com.tw:443;
}
server {
    listen 80; 
	# server_name yoursite.org;
	root /usr/share/nginx/html;
    location / {
		try_files $uri /index.html;
    }

    # 開啟 gzip 加速傳輸
	gzip on;
	gzip_types text/html application/javascript application/json text/css;

	# 反向代理
    location / {
        proxy_pass https://api/; # Backend server address
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Real-IP $remote_addr;

        # Optional: Additional proxy settings
        # proxy_connect_timeout 5s;
        # proxy_read_timeout 60s;
        # proxy_send_timeout 60s;

        # Optional: Enable WebSocket support
        # proxy_http_version 1.1;
        # proxy_set_header Upgrade $http_upgrade;
        # proxy_set_header Connection "upgrade";
    }
}
```
## Refernece
- [MSDN-反向 Proxy - 規則範本](https://learn.microsoft.com/zh-tw/iis/extensions/url-rewrite-module/reverse-proxy-rule-template)
- [MSDN-URL Rewrite Module Configuration Reference](https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference)
- [NGINX Docs-NGINX Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)