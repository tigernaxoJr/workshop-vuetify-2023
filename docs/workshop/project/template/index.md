# 專案模板
可以自己存一個模板，快速製造前端專案，這一次練習用的模板：`https://gitlab.ktgh.com.tw/f734/vuetify3`，
因為院內的 gitlab 無法在 fork 的時候直接對 repo 重新命名，因此需要先拉取再推上去：
```bash
// 拉取模板
git clone https://gitlab.ktgh.com.tw/f734/vuetify3
// 更換目錄名稱
mv vuetify3 v3app
// 重新開始專案 
cd v3app
rm -rf .git
git init
git add .
git commit -m 'initial commit'
// 新增 remote、推送到 gitlab 並設置 origin master 為上游
git remote add origin https://gitlab.ktgh.com.tw/f734/v3app.git
git push -u origin master
```

或直接[下載](https://gitlab.ktgh.com.tw/f734/vuetify3/-/archive/master/vuetify3-master.zip)