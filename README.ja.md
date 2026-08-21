# Cognis 英語

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · **日本語**

Cognis 英語は、Cognis Study ゲートウェイ向けのインストール可能な英語学習拡張機能です。従来の組み込み Study 言語モジュールが持つ恒久的なモジュール UUID と同梱の英語ライブラリデータを維持しながら、Cognis 外部モジュール契約に準拠しています。

## 機能

- 英語アルファベットのデータと、認証が必要な `/study/alphabet` のアルファベットページ。
- 管理者専用の `/study/en-library` のライブラリ概要。
- `/study/en-classroom` のクラスルームエントリーポイント。
- `/api/v1/modules/study-language-en/library` で提供される、認証が必要な読み取り専用ライブラリ API。
- Cognis の内部実装をインポートせずに Study と連携するための `study:language:en` ケイパビリティ。
- 英語、ドイツ語、インドネシア語、日本語にローカライズされたナビゲーション、ページ、マーケットプレイスメタデータ。
- モジュールのライフサイクルに対応するアンインストール時のクリーンアップフック。

## インストール

この Git リポジトリを Cognis モジュールマーケットプレイスのモジュールソースとして追加し、宣言された Study ゲートウェイ依存関係と認証ケイパビリティを確認してから、インストールして有効化します。必要な Study ゲートウェイの UUID は `338b9237-a2c8-5bcf-9437-bccc9abd9a27` です。

## アーキテクチャ

`bootstrap.js` はホストとの唯一の統合ポイントです。`ctx` を通じてモジュール所有の UI と API を登録し、英語の言語記述子を公開ケイパビリティとして提供して、プラットフォームの bootstrap フローを拡張します。ランタイムコードはリポジトリ相対のインポートを使い、Cognis の内部実装をインポートしません。

manifest は `ui.stringsBaseUrl` を公開するため、Cognis はブラウザー UI の起動前にモジュール所有の翻訳を読み込めます。UI と API の登録はスコープ内に保たれ、無効化またはアンインストール後にモジュール所有の動作を残しません。

## コントリビューター向け品質チェック

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

配布対象ファイルを変更した後は、検証またはコミットの前に `npm run manifest:hashes` を実行してください。完全な統合契約は [`docs/standard.ja.md`](docs/standard.ja.md) を参照してください。同等のドイツ語、英語、インドネシア語版も同じ場所にあります。
