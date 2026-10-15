# 英語学習

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Cognis Study 向けの英語学習内容とプロバイダー統合です。

## 機能

- 独自の JSON 書字ガイドを備えた文字 52 枚と組み合わせ 17 枚、初級語彙 123、文法・句読点 21、参照付きの文 45 を収録します。
- 不規則形と IPA を含む動詞・コピュラ・形容詞の活用群 37 個を用意し、非表示の補助カードで文のグラフを保持します。
- 検索可能な無料辞書、定義・読みの上限、非表示の出典情報、ホスト管理のキャッシュを利用します。
- 七つの翻訳済み初期デッキは Cognis のフラッシュカード、お気に入り、共有を利用します。

## インストール

Cognis モジュール市場からこのリポジトリをインストールして有効にします。Study ゲートウェイと `study:library:provider` が必要です。

## 構成

初期化は ctx でプロバイダーを登録し、保護されたパッケージを取り込み、英語記述子と解除可能なフローフックを公開します。無効化はプロバイダーを解除し、アンインストールは Cognis 経由で内容を保持または連鎖削除します。ホスト画面、キャッシュ方針、内部実装は複製しません。

[`docs/index.ja.md`](docs/index.ja.md) · [`docs/dictionary.ja.md`](docs/dictionary.ja.md)

## 貢献時の検証

```sh
npm install
npm run manifest:hashes
npm test
npm run lint
npm run check:manifest
git diff --check
```
