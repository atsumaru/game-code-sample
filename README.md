# game-code-sample

RPGアツマールに投稿可能な、ゲーム制作ツールに依存しないコードのサンプルです。

## プロジェクトの構成

`src`ディレクトリ以下にHTMLファイル等が存在します。
javascriptの記述にはtypescriptを使用し、parcelで`src/index.html`を起点としてjavascriptへの変換とファイル結合を同時に実行します。
各アプリケーションの詳細については以下を参照してください。

- typescript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- parcel: [https://parceljs.org/](https://parceljs.org/)

また、RPGアツマールAPIの提供するグローバルオブジェクト`RPGAtsumaru`の型を参照するためにリポジトリ[atsumaru/api-types](https://github.com/atsumaru/api-types)に依存しています。

## コンパイルと出力

git, node, npm を使用したコマンドライン上での操作を説明します。
各アプリケーションのダウンロードについては以下を参照してください。
Windows環境ではWSLを使用してください。

- git: [https://git-scm.com/](https://git-scm.com/)
- node: [https://nodejs.org/ja/](https://nodejs.org/ja/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

### 依存パッケージのインストール

後の操作を行う前に以下を実行する必要があります。

```bash
git clone https://github.com/atsumaru/game-code-sample
cd game-code-sample
npm install
```

### distディレクトリの出力

`src`以下のコードをブラウザから表示可能なファイル群に変換し、`dist`以下に配置します。

```bash
npm run compile
```

### zipファイルの出力

RPGアツマールに投稿可能なzipファイルを`dist.zip`として作成します。

```bash
npm run zip
```
