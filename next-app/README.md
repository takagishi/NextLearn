This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Getting Started](#getting-started)
- [開発環境のセットアップ](#開発環境のセットアップ)
  - [create-next-app](#create-next-app)
  - [yarn](#yarn)
  - [storybook](#storybook)
  - [emotion](#emotion)
    - [.babelrcの追加](#babelrcの追加)
    - [.storybook/main.js の編集](#storybookmainjs-の編集)
  - [TESTモジュール追加](#testモジュール追加)
  - [eslintの追加](#eslintの追加)
  - [prettier](#prettier)
  - [tsconfig追記](#tsconfig追記)
  - [vscodeの設定ファイルsettings.jsonの上書き](#vscodeの設定ファイルsettingsjsonの上書き)
- [Learn More](#learn-more)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 開発環境のセットアップ

### create-next-app
create-next-appを更新し、アプリケーションを作成
```
npm install --global create-next-app
npx create-next-app next-app --typescript
```

### yarn
```
npm install -g yarn
```

### storybook
※eslint の質問はYESを入力
```
npx sb@latest init
```

### emotion
```
yarn add @emotion/react
yarn add --dev @emotion/babel-plugin
yarn add --dev @emotion/babel-preset-css-prop
```

#### .babelrcの追加
```
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```
#### .storybook/main.js の編集
.storybook/main.jsへの追記
cf. https://qiita.com/xrxoxcxox/items/fc79d6c833b0900ed736
```
babel: async (options) => ({
  ...options,
  presets: [...options.presets, "@emotion/babel-preset-css-prop"],
})
```

### TESTモジュール追加
- jest  
  JavaScriptアプリケーションのための最も人気があるテストフレームワーク。  
	テストランナー（テスト用スクリプトをpackage.jsonに設定したらnpm testで実行可能）であり、  
	アサーション等の機能も提供
- ts-jest
  ts-jestはJest用のソースマップをサポートするTypeScriptプリプロセッサ  
- @types/jest
  テストコードの型付け
- @testing-library/react  
  実際に対象のコンポーンエントをユーザーが操作してるようなテストを書くためのテストユーティリティ
- @testing-library/jest-dom  
	テスト時のコンポーネント状態を確認するための便利なメソッド(カスタムマッチャー)が使えるようになる  
  どのようなカスタムマッチャーがあるかは次の README を読むとイメージできる  
  https://github.com/testing-library/jest-dom  
- jest-environment-jsdom  
  ファイルごとにテスト環境を変えることが可能
```
yarn add --dev jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom  jest-environment-jsdom
```

### eslintの追加
※YARN使っていいかの質問はYES
```
npx install-peerdeps --dev eslint-config-airbnb
npx install-peerdeps --dev eslint-config-airbnb-typescript
yarn add eslint-plugin-storybook --dev

#default export check
yarn add --dev eslint-plugin-consistent-default-export-name
#testing系のeslint
yarn add --dev eslint-plugin-jest
yarn add --dev eslint-plugin-jest-dom
yarn add --dev eslint-plugin-testing-library

```
eslintの設定ファイル(.eslintrc.json)を上書き  
.eslintignoreを他からコピー

### prettier
```
yarn add --dev eslint-config-prettier
yarn add --dev prettier
```
prettier設定ファイルの上書き


### tsconfig追記
```
"jsxImportSource": "@emotion/react",  //emotionのtypescriptエラー対応(型が存在しない)  
"types": ["@emotion/react/types/css-prop"],
"baseUrl": "./",
"paths": {
  "@/*": ["./src/*"]
}
```
### vscodeの設定ファイルsettings.jsonの上書き
```
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode" // フォーマッタをprettierに指定
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode" // フォーマッタをprettierに指定
  },
  "editor.formatOnSave": true, // ファイル保存時にPrettierでフォーマット
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.codeActionsOnSave": [
    "source.organizeImports",
    "source.fixAll.eslint"
  ],
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



