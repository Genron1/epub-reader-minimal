# EPUB Reader Minimal

epubリーダーのミニマム実装です。


## セットアップ

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

## 使い方

このプロジェクトでは2種類のEPUBリーダーを提供しています：

| コンポーネント | 利用技術 | 指定方法（例） | 補足 | ドキュメント |
|--------------|---------|--------------|------|------------|
| React Reader | React | `?data=<base64エンコーディングしたepubのURL>` | | [GitHub](https://github.com/gerhardsletten/react-reader) |
| Bibi | JavaScript | `?book=/books/sample.epub` | デフォルトではCORSの制限があり、ファイルも同じサーバにおいている。Shopifyだったらcdnも同じオリジンだからURLでもいけるかも | [GitHub](https://github.com/satorumurmur/bibi) |

### React Readerの使い方

Base64エンコードされたURLをdataパラメータで渡します：

```
http://localhost:3000/read?data=<base64-encoded-url>&direction=ltr
```

### Bibiの使い方

EPUBファイルのパスをbookパラメータで渡します：

```
http://localhost:3000/bibi.html?book=/books/sample.epub
```

## プロジェクト構造

```
epub-reader-minimal/
├── src/
│   ├── components/
│   │   └── EpubReader.tsx    # React Reader コンポーネント
│   └── pages/
│       ├── index.tsx          # ランディングページ（リーダー選択画面）
│       └── read.tsx           # React Reader ページ
├── public/
│   ├── bibi/                  # Bibi リーダー
│   ├── bibi.html              # Bibi エントリーポイント
│   └── books/                 # EPUBファイル格納用
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc.json
└── next.config.js
```


