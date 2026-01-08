# EPUB Reader Minimal

genron-frontendのコーディング規約に準拠した、epubリーダーのミニマム実装です。

## 特徴

- Next.js + TypeScript + React
- genron-frontendのESLint/Prettier設定を使用
- react-readerライブラリを使用したシンプルなEPUBリーダー

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

### 方法1: read.tsx（元のgenron-frontendと同じ方式）

Base64エンコードされたURLをdataパラメータで渡します：

```
http://localhost:3000/read?data=<base64-encoded-url>&direction=ltr
```

### 方法2: index.tsx（シンプルな方式）

URLをそのまま渡します：

```
http://localhost:3000/?url=https://example.com/book.epub&direction=ltr
```

## パラメータ

- `url` (index.tsxの場合): EPUBファイルのURL
- `data` (read.tsxの場合): Base64エンコードされたEPUBファイルのURL
- `direction`: ページめくりの方向 (`ltr`: 左から右, `rtl`: 右から左)

## プロジェクト構造

```
epub-reader-minimal/
├── src/
│   ├── components/
│   │   └── EpubReader.tsx    # EPUBリーダーコンポーネント
│   └── pages/
│       ├── index.tsx          # シンプルな使用方法のページ
│       └── read.tsx           # genron-frontendと同じ方式のページ
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc.json
└── next.config.js
```

## コーディング規約

このプロジェクトはgenron-frontendのコーディング規約に従っています：

- Airbnb ESLint設定
- TypeScriptの厳密な型チェック
- Prettierによるコードフォーマット
- importの順序とグループ化
- 命名規則（camelCase, PascalCase）
