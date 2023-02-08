# 部屬
## 編譯
`npm run build`
要調整好 base
## IIS
設定 baseurl、丟上去機器就好，但每次都要自己丟上去
## Container
Todo: 準備好資源
.gitlab-ci.yaml
Dockerfile
.dockerignore
default.conf
- deployment.yaml(參閱 gitlab)，告訴容器管理平台(K8S)如何部屬
變數設定
反向代理 api 