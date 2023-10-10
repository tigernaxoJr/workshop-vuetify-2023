# 對齊


| 項目                                                                | 對象     | CSS 原理        | 說明                          | 試試看                                                    |
| ------------------------------------------------------------------- | -------- | --------------- | ----------------------------- | --------------------------------------------------------- |
| [Align](https://vuetifyjs.com/en/components/grids/#align)           | flexbox  | align-items     | 把 flexbox 內的元素垂直對齊   | <a :href="url_align" target="_blank">playground</a>       |
| [Align Self](https://vuetifyjs.com/en/styles/flex/#flex-align-self) | flexitem | align-self      | 指定 flexbox 內的元素垂直對齊 | <a :href="url_align_self" target="_blank">playground</a>  |
| [Justify](https://vuetifyjs.com/en/components/grids/#justify)       | flexbox  | justify-content | 水平對齊                      | <a :href="url_justify" target="_blank">playground</a>     |
| [Auto Margins](https://vuetifyjs.com/en/styles/flex/#auto-margins)  | flexitem | margin          | 自動留空                      | <a :href="url_auto_margin" target="_blank">playground</a> |
<script setup>
  const url_align = "https://play.vuetifyjs.com/#eNrNVNtOwzAM/RUrz6RjFJCoChLfQXnIOreNSNMqcQsT4t/x0o4VIU1TNaG+5OLYOSdHx3n5FN7lq+e2jfoORSJSwro1ivApswDpVvdhwcte5o0lpS06yI3y/jETm1L6zhUqR9krp5UlqDfyPhNjUShzzTsoo0vLBZ6Uo0yAbWTZEaHz4GlnkI8q1GVFCazvrtuPyQ0jtIFeFo3jRAvaQsyXJG+42+9/JYd0XyHSD8tWyRuoeeBEiAIVGYhAuhpzp2gcY7jjC3jPTzjIEE5HHTh2SXFytKzIEtQZmCxMHrTbJWjDNP5bmL+azFFhND6a4tiIMxqH68/qntP4B6/PJHCWQU8zCHaaCX8ZD+wjwwebribfrvi6EnEUR7dimNcP4vUbEJq3Yw=="
  const url_align_self = "https://play.vuetifyjs.com/#eNrtlcFugzAMhl8l8nmBdp16mBjSLnuJsYMJBiKFDCUGTZr27guldKNC03rooRKXxP5l/7K+g/36Cd6p+Llto74jeISEqWkNMqWZFSIpdH8IQthLXxPxmAmhDHr/lEEhS0MfosnlXuSV9J0rUZHs0Wm0nMFUX5Ouag4N281mUo/WP+Yn1wblvWjDk0H6MvjrMFcSH8v+0SfQ6MpKT6aUntGFSdJz6RK/v+b4nd88LLLFHFUQVlALoBRZJjdnNWorrgVcOYZPW5oDm9QV2QIy7Ph9jmtQVlSLK94Rq/p8yR/EawAbsvE2JvHpYsLXHeyiXfQA47/dw9s356hNsg=="
  const url_justify = "https://play.vuetifyjs.com/#eNrNlE1uwjAQha8ymnWdqE3FAqWVeo6mCyeZtCmJseyJIULcnYDJDysWsPDGHnuk994njeb7gNYU8ZfWkesI15gytbqRTJ+ZAkjL2l0KX0LRSGs/MixF1dAe/jvLddULy9IwtLlYQf4rbGcqWZBw0tRScYZXhUHDCftHxOMbwIlqawZBBbWCJMO5s95Qf24s/0b7Voo30MMxNycPuE01WcdX7xEn9mj34UiVwaENmR4HK0gxmeDYfKzH8aw+0+TEOyIV3nAu0z0LVpptF+C0LsM9C5UcqaYPFNWHu4c6V2k8bV08vmASJdE7+vt1hT8n8UaoAw=="
  const url_auto_margin = "https://play.vuetifyjs.com/#eNrlUkEKwkAM/ErI2bRopQdZBS9+wnpI21QL3bp0t4sg/t2tLeLBqyh4SWZgJmFg9le0XRFvjYl8L7hC5USbhp1sshZAlbV/gAA92ZOIg6Jha9cZllQ1cgGdUwr5kWzfVVwIee5qbl2Gk++NUzMtwIQRRLvhRh2eqniSfcn3yj+XGLQQ9+78f8l/NfHAxpar+Nl9vM0wiZJoieOep3i4A2WT/zA="
</script>

::: info [練習](https://play.vuetifyjs.com/#eNp1jkEOgjAQRa8yztqhUdSFqSSeQ1zUMggJIGlLxRjvbq2a4MLN/Fn89/MOd7RGi33fJ35g3KJ03PaNcpzlHYAsag+6UdbucqzIasPcQUFlwyOczmQHUyrN5JWpVedyjFTgZkTSk62Y3YRfruH6Ou2N1OAu0I4xAybFp50RfTf+8j/9qCmCZ/ikmNjjY45pkiYrfOdig8cnmRNK1Q==)
- 使用 margin auto 垂直/水平置中。
:::

## Summary
- 對齊設定是針對 flex 容器內的元素。
- 垂直對齊叫做 `align`，爽水平對齊稱為 `justfy`
- margin auto，填滿剩下的空間，可以做垂直/水平對齊。