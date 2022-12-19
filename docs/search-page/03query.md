文件閱讀
資料表
Dialog
Form

props/event/attribute
provide/inject
default/named slot
component reference
async component
wrapper component ( redefine props/event )
父子組件溝通
常見錯誤：v-model 綁定到 props 上

component global/business relevant 
```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
```mermaid 
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
```