# 文書構成とホストの契約

**機能ブランチ:** feature-documentation-core-alignment

## 構造化した文書

Info、使用例、技術情報を、マニフェストで宣言する完全な多言語の文書一式にします。利用者向けの紹介、具体的な手順、現在の API と設定の契約を分けて説明します。構成、参照先、ファイル名の厳密な検証を独立したテストと CI で実行します。ソースファイルへのリンクは既定ブランチを参照し、変更履歴のコミットラベルは短い形式を使います。

## ゲートウェイの診断

実行時の診断はホストのログゲートウェイと出力方針に従います。コマンドの報告は端末出力を使い、モジュールの JavaScript では別名や動的な参照も含めてネイティブコンソールへのアクセスを検証します。プロバイダーの所有範囲、権限確認、ガイド完了の識別子を維持します。

## 役割が分かるバインディング名

構文木による名前検証は、既存違反やファイル別の除外を設けず、JavaScript と TypeScript のソース、ツール、テスト、フィクスチャを走査します。実行時バインディング、シグネチャの引数名、非公開メンバー、所有する複合型名とメソッド名を検証します。`db`、`this.db`、`args`、LDAP の `dn` など、一般的な短縮形は独立した名前に使用できます。上流から引き継いだ名前も含め、複合名の測定単位以外の省略語は `DatabaseExecutor`、`KeyringDatabaseExecutor`、`createDatabaseExecutor`、`baseDistinguishedName`、`registerStaticDirectory` のように展開します。不明瞭な省略名、番号付きの仮名、無視するバインディングの値の使用は検証に失敗します。未使用かつ非公開の `_`、`id`、算術カウンター `i`・`j`・`k` は定義された役割を維持します。ジェネリック型パラメーター、依存ライブラリーやプラットフォームの正規名、公開ペイロードのキーは契約を維持します。所有する API の宣言、インポート、エクスポート、呼び出し元は同じ名前を使用し、型を含めて名前を変えるだけの別名は検証に失敗します。回帰フィクスチャで独立名と複合名の区別、およびプラットフォーム API の正規名を保護します。各言語の技術文書、貢献指針、モジュールのバージョン、ロックファイル、パッケージのハッシュを同期します。`ms`、`sec`、`px`、`rad`、`deg` などの測定単位は複合名でも短縮形を維持し、時間とピクセルの名前を `INVITE_EXPIRY_MS`、`timeoutMs`、`widthPx` などの形式に戻します。回帰フィクスチャで単位の例外を検証し、隣接する不明瞭な省略語は引き続き拒否します。

## コミット

- [8cf705a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8cf705a517b08306ab14c312a18810db52fa6293)
- [d775450](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d775450e8570dd9246f87075309ff357de16bef7)
- [a1a8bd1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a1a8bd1504f8f035d6c1d7620c353bf231c4e86a)
- [7604293](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/76042930779787849a91b697dcc2de869e89232c)
- [51c8df2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/51c8df2722df4156cc68dfe3d00fb0214cebd099)
