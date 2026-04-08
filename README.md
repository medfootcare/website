# メディフットケア

高齢者向け訪問フットケアサービス「メディフットケア」のホームページです。

## URL

https://medifootcare.jp/

## フォルダ構成

```
medifootcare.web/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 共通レイアウト（メタデータ・JSON-LD）
│   ├── page.tsx                  # トップページ
│   ├── globals.css               # グローバルスタイル
│   ├── about/page.tsx            # メディフットケアとは？
│   ├── cases/page.tsx            # 症例・お悩み
│   ├── commercial-transaction/page.tsx  # 特定商取引法に基づく表記
│   ├── facility/page.tsx         # 施設スタッフ様へ
│   ├── faq/
│   │   ├── page.tsx              # よくある質問（準備中表示）
│   │   ├── FaqSwitch.tsx         # プレビュー切替
│   │   └── FaqContent.tsx        # FAQ本体コンテンツ
│   ├── personal/page.tsx         # ご利用者様・ご家族様へ
│   ├── privacy/page.tsx          # プライバシーポリシー
│   └── service/page.tsx          # 料金
├── components/                   # 共通コンポーネント
│   ├── ContactButtons.tsx        # お問い合わせボタン
│   ├── ContactCtaCard.tsx        # CTAカード
│   ├── Footer.tsx                # フッター
│   ├── Header.tsx                # ヘッダー
│   ├── InlineIconLink.tsx        # アイコン付きリンク
│   ├── PageHeroTitle.tsx         # ページタイトル
│   ├── PricingTable.tsx          # 料金テーブル
│   └── StaticFaqList.tsx         # FAQ一覧
├── constants/
│   └── links.ts                  # 外部リンク定数
├── data/
│   ├── faqs.ts                   # FAQ データ
│   └── pricing.tsx               # 料金データ
├── lib/
│   └── textStyles.ts             # テキストスタイル定義
├── public/
│   ├── images/                   # 画像素材
│   │   ├── logo.png              # サービスロゴ
│   │   └── ogp.png               # OGP画像
│   ├── robots.txt                # クローラー設定
│   └── sitemap.xml               # サイトマップ
├── CNAME                         # カスタムドメイン設定
├── next.config.ts                # Next.js設定
├── tailwind.config.ts            # Tailwind CSS設定
├── tsconfig.json                 # TypeScript設定
└── package.json
```

## 素材・クレジット

| ファイル | 説明 | 取得元 |
|---|---|---|
| `images/logo.png` | サービスロゴ | - |
| `images/nurse-illustration.png` | フットケアスタッフイラスト | [看護師イラスト素材](https://kango.mynavi.jp/contents/nurseplus/illustration/) |
| `images/area-map.png` | 千葉県マップ | [千葉県マップ for PowerPoint](https://power-point-design.com/ppt-design/chiba-for-powerpoint/) |

## 開発の始め方

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（http://localhost:3000）
npm run dev

# ビルド（静的HTML出力 → out/ ディレクトリ）
npm run build

# Lint
npm run lint
```

## カスタムドメイン

- 本番URL: https://medifootcare.jp/
- GitHub Pages のカスタムドメイン機能で配信
- `basePath` は未設定（ルート `/` で配信）
- 画像等のアセットパスはすべて `/images/...` のように絶対パスで指定

## デプロイ

GitHub Pages を使用しています。`main` ブランチにpushすると、GitHub Actions が自動でビルド・デプロイします。

1. `main` にpush
2. `.github/workflows/deploy.yml` が実行される
3. `npm run build` で静的HTMLを生成（`out/`）
4. GitHub Pages にデプロイ（カスタムドメイン medifootcare.jp で配信）

## 使用技術

- [Next.js](https://nextjs.org/) 15 (App Router / Static Export)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## レスポンシブ運用

スマホ向けの調整は、端末名ではなく幅ベースで次の4段階に統一します。

| スクリーン名 | 最大幅 | 用途 |
|---|---|---|
| `mobile-wide` | `460px` | やや狭い画面向けの調整 |
| `mobile` | `412px` | 通常のスマホ調整 |
| `mobile-small` | `360px` | 小型スマホの改行調整 |
| `mobile-narrow` | `344px` | 狭いスマホの文字サイズ・改行調整 |
| `mobile-mini` | `320px` | 最小幅の救済 |

### Tailwindの使い方

- `max-[XXXpx]` のような都度書きは増やさず、上記の名前付きスクリーンを優先する
- タブレットは `md:`、PCは `xl:` を使い、既存の基準は変更しない

## SEO対応

- **メタデータ**: 全ページにtitle・description・canonical URLを設定
- **OGP / Twitter Card**: SNS共有時のサムネイル画像・タイトル・説明文を設定
- **構造化データ（JSON-LD）**: LocalBusiness（全ページ）、FAQPage（よくある質問）
- **sitemap.xml / robots.txt**: 検索エンジン向けのクロール設定

## 開発補助

🤖 Built with [Claude Code](https://claude.com/claude-code) and [Codex](https://openai.com/index/codex/)
