# メディフットケア

高齢者向け訪問フットケアサービス「メディフットケア」のホームページです。

## URL

https://xiaosenai8.github.io/medifootcare.web/

## フォルダ構成

```
medifootcare/
├── index.html              # トップページ
├── html/
│   ├── faq.html            # よくある質問
│   ├── contact.html        # お問い合わせ
│   ├── privacy.html        # プライバシーポリシー
│   ├── thank-you.html      # フォーム送信完了
│   ├── personal/           # 個人向けページ
│   │   ├── services.html   # サービス紹介
│   │   ├── flow.html       # ご利用の流れ
│   │   ├── pricing.html    # 料金案内
│   │   ├── cases.html      # よくある症例・お悩み
│   │   ├── family.html     # ご家族向け説明
│   │   └── apply.html      # 依頼フォーム
│   └── facility/           # 施設向けページ
│       ├── services.html   # サービス紹介
│       ├── flow.html       # 導入の流れ
│       ├── trial.html      # 体験会について
│       └── apply.html      # 依頼・体験会申込みフォーム
├── css/
│   └── style.css           # スタイルシート
├── js/
│   └── main.js             # JavaScript
└── images/                 # 画像素材
```

## 素材・クレジット

| ファイル | 説明 | 取得元 |
|---|---|---|
| `images/logo.png` | サービスロゴ | - |
| `images/nurse-illustration.png` | フットケアスタッフイラスト | [看護師イラスト素材](https://kango.mynavi.jp/contents/nurseplus/illustration/) |
| `images/area-map.png` | 千葉県マップ | [千葉県マップ for PowerPoint](https://power-point-design.com/ppt-design/chiba-for-powerpoint/) |

## 使用技術

- HTML
- CSS
- JavaScript

## レスポンシブ運用

スマホ向けの調整は、端末名ではなく幅ベースで次の3段階に統一します。

- `mobile`: `412px` 以下
- `mobile-narrow`: `344px` 以下
- `mobile-mini`: `320px` 以下

### Tailwindの使い方

- 通常のスマホ調整は `mobile:` を使う
- 狭いスマホだけの文字サイズや改行調整は `mobile-narrow:` を使う
- 最小幅の救済だけ `mobile-mini:` を使う
- `max-[344px]` のような都度書きは増やさず、上記の名前付きスクリーンを優先する
- タブレットは `md:`、PCは `xl:` を使い、既存の基準は変更しない

## 開発補助

🤖 Built with [Claude Code](https://claude.com/claude-code)
