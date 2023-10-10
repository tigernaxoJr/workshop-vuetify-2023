# 大小與空白

## Sizing
| 高 class | css 效果         | 寬 class | css 效果      |
| -------- | ---------------- | -------- | ------------- |
| h-auto   | `height: auto`   | w-auto   | `width: auto` |
| h-screen | `height: 100dvh` | -        | -             |
| h-0      | `height: 0`      | w-0      | `width: 0`    |
| h-25     | `height: 25%`    | w-25     | `width: 25%`  |
| h-50     | `height: 50%`    | w-50     | `width: 50%`  |
| h-75     | `height: 75%`    | w-75     | `width: 75%`  |
| h-100    | `height: 100%`   | w-100    | `width: 100%` |

::: info 練習  
  - 設定長寬是 flex 容器的 50%。 [練習](https://play.vuetifyjs.com/#eNqFj88OgjAMxl+l9uxA45+DThOfwYMH8YBbFeIcZJuIEt7dAZJoYuKlbdLf9/XrvkJrRLjJ86C4ES6QO7rmKna0jjQAl2kBQsXWriJMmBWGSINkJ0VlhC3ioQFjX6DItCPt4M5mI0h88eg2fab6DCHsUukSoDL2Z4iHXrdmrHf64fJH26Z8Tzz8CM+te6jui6APVHVnjrG4nE1205KJTGVmAYbkstnVjUkvxHqIk2ASTLHr4zkeXngNYrY=)
:::

## 邊距(margin)/填充(padding)
### 方向 
| code |        | 影響方向                      |
| ---- | ------ | ----------------------------- |
| t    | top    | 上                            |
| b    | bottom | 下                            |
| l    | left   | 左                            |
| r    | right  | 右                            |
| s    | start  | 開始的方向(LTR: 左；RTL: 右)  |
| e    | end    | 結束的方向(LTR: 右；RTL: 左 ) |
| x    | x      | x 軸方向(上下)                |
| y    | y      | y 軸方向(左右)                |
| a    | all    | 所有方向(上下左右)            |

[試試看](https://play.vuetifyjs.com/#eNrlVt+LGjEQ/leG5UCl7lrvDgviCQd9LRTaPp2CcTeugWwSkuhpxf+9k/2dVe/6cn3pSzSZyffNZL5k9uUUGB2PnpWK9jsaTIOZpZnixNL5QgDM9mEshSVMUO3mADEnxjwtAqNIzEQaou8x1XInElAknCyCwm3Ddyxxf3OYHEjL13JS4vJq1qAm4YbTAxDOUhHGVFikLRFzN8md1/i+vWgyXKqJa8aSxlBOY9ssAezDTCaU4yZFkgRz+Mo0ujAp2qgAU4ZHkQdV2Y3vUAWtaOgFBMDJOif4XhC0ja3oML7qsDEow6WdKk0VFYnnhG7GainSmtDSgw2VZhnRR1DHcLwI5mo2Krx8glGrnG8yE+WIQ7nDI+/SJ2zfJFvQ+R4AYWfLCPfcjqRZrArkhfd3ZfvBftMbFWt5mMhwFtP+eHC9RF2UuRdTEyZKrxXj2/r9QMliyVMmPk6x33L8fyHY7P8RbFG0N/TaOHQK9jEqXaeh1ESkNMR3dmupCB/c4/35Hd12VLql1Mt3WsG/xDJTWJakENPSTwmD3hOnTfR89E15G6F527imPayQX7RLxvLB7VB6mecph6mmmHadvu9/RU5d+bQAX7dYRsglXnQsp/DW5W704HycIuuW+RMXuo5Y2ksp+it58d3xX6l9Nau6bWEpWziudC7YzMSaqQKIHpTUFhK6ITtu4VSAJcQS6A+qqVOGMBZc/6fawBM8a02O0UbLrH8CTkVqt1MYf4HzEPp7wofABvA0h9XdiZ1XAx9FvAczuYARiAOfYHyBVcbtsF56ZGdlbwhRFJUMy+ZaaGp3WjQJYY71eznFvRY39tZu4G7QbjBuoG44uOHoBtJbDhuMzss8dfYLs7vHaLm/bnHsGHGVSB5+dUJtqu53S5er1f7QNLlhQraaqeXgiRO3/zIo7i11h4zPNTdA1nKPSxIsPub4/ObWhG02VKP8c2EgA2wpVxh31LCfiz9nXCi/JctbO22Ly7vInvDqyq3U3clumYm6B3EOfYNL87yq+etI/AfqBklWYnUKW3M0dbukKH4xYWxyxQULzsPgIXqIHoPidzwJln8AQdNOrQ==)

::: info 練習  
  - 加入 breakpoint，使用 `{property}{direction}-{breakpoint}-{size}`。 [練習](https://play.vuetifyjs.com/#eNp9js2OwjAMhF/F6/O6LWK1BwhIPAMHDpRDSAytCGmVhH/x7iQKSIgDF9uS55uZ5Q29U+Ws74vjgXGEIvC+NzLwtLYA4odI6PYIykjvJzU25JVjtqBpY/gMvaRBlabfU1XjlChzX5ioSpIPkepsYBvgFP0qaNKMwnl7be0WSli0OjTAZxnLsSgjmXOelyjfagsfLib3L162txy5lmq3dd3BalKd6dwIHOtx+t2TyQvE+y8Oi2Hxh3kP/nH1ACRZX0c=)
  - 對 `d-flex` 的子元素試試看 `my-auto`、`mx-auto`。[練習](https://play.vuetifyjs.com/#eNp1jkEOgjAQRa8yztqhUdSFqSSeQ1zUMggJIGlLxRjvbq2a4MLN/Fn89/MOd7RGi33fJ35g3KJ03PaNcpzlHYAsag+6UdbucqzIasPcQUFlwyOczmQHUyrN5JWpVedyjFTgZkTSk62Y3YRfruH6Ou2N1OAu0I4xAybFp50RfTf+8j/9qCmCZ/ikmNjjY45pkiYrfOdig8cnmRNK1Q==)
:::

## Reference
- [vuetify-spacing](https://v2.vuetifyjs.com/en/styles/spacing/)