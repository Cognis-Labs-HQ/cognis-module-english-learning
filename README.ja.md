# Cognis 英語

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · **日本語**

Cognis 英語は、Cognis Study ゲートウェイ向けのインストール可能な英語学習拡張機能です。従来の組み込み Study 言語モジュールが持つ恒久的なモジュール UUID と同梱の英語ライブラリデータを維持しながら、Cognis 外部モジュール契約に準拠しています。

## 機能

- `/study/library` の共有 Study ライブラリが表示する英語アルファベットデータ。
- ホスト提供の `study:library` capability を通じて取り込まれる宣言型英語コンテンツパック。
- Cognis の内部実装をインポートせずに Study と連携するための `study:language:en` ケイパビリティ。
- 英語、ドイツ語、インドネシア語、日本語にローカライズされたスキーマとマーケットプレイスメタデータ。
- モジュールアイコン用の拡大縮小可能なイングランド国旗 SVG。
- モジュールのライフサイクルに対応するアンインストール時のクリーンアップフック。

## インストール

この Git リポジトリを Cognis モジュールマーケットプレイスのモジュールソースとして追加し、宣言された Study ゲートウェイ依存関係と認証ケイパビリティを確認してから、インストールして有効化します。必要な Study ゲートウェイの UUID は `338b9237-a2c8-5bcf-9437-bccc9abd9a27` です。

## アーキテクチャ

`bootstrap.js` はホストとの唯一の統合ポイントです。`ctx` を通じて宣言型コンテンツパックを取り込み、英語の言語記述子を公開ケイパビリティとして提供して、プラットフォームの bootstrap フローを拡張します。ランタイムコードはリポジトリ相対のインポートを使い、Cognis の内部実装をインポートしません。

正規の言語記述子は Study サブナビゲーションボタン用に `languageCode: "en"` を提供し、Cognis は URL クエリではなくルーター state でこの選択を渡します。

manifest は `ui.stringsBaseUrl` を公開するため、Cognis はStudy がパッケージを表示する前にモジュール所有の翻訳を読み込めます。唯一の静的登録はこれらの言語リソースを提供し、無効化またはアンインストール後にモジュール所有の実行可能 UI を残しません。

## コントリビューター向け品質チェック

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

配布対象ファイルを変更した後は、検証またはコミットの前に `npm run manifest:hashes` を実行してください。完全な統合契約は [`docs/standard.ja.md`](docs/standard.ja.md) を参照してください。同等のドイツ語、英語、インドネシア語版も同じ場所にあります。
