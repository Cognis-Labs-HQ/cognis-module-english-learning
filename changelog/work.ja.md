# 共有 Study ライブラリの利用

**機能ブランチ:** work

## Capability ベースの学習データ

宣言型の英語コンテンツパックを、ホスト提供の `study:library` capability 経由でアトミックに導入し、共有 Study ライブラリ API からアルファベット項目を読み込むようにしました。重複していたライブラリ API、ストア、ページ、ナビゲーション項目は削除しました。

## ドキュメントと契約

マニフェストで `study:library` を必須とし、モジュールのバージョンを 1.2.15 に更新しました。各言語のドキュメントも共有 Study ライブラリを案内します。

## コミット

- [実装の基点](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/51c309d)
