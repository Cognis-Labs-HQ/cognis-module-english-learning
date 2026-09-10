# 共有 Study ライブラリの利用

**機能ブランチ:** work

## Capability ベースの学習データ

宣言型の英語コンテンツパックを、ホスト提供の `study:library` capability 経由でアトミックに導入します。重複していたライブラリ API、ストア、ページ、ナビゲーション項目は削除し、スキーマ駆動のホスト表示に統一しました。

## イングランド国旗のアートワーク

モジュールアイコンを、汎用の Cognis 文字マークから拡大縮小可能なイングランド国旗の SVG に変更しました。

## 選択言語の維持

言語 capability は、正規の Study 言語記述子として `languageCode: "en"` を提供します。Cognis PR #215 は生成した Study サブナビゲーションボタンにこのコードを保存し、選択状態をルーター state で渡すため、モジュール URL に言語クエリを付ける必要がなくなりました。

## バージョン付き言語パッケージ契約

英語パックが `en` 名前空間を所有し、ローカライズ済みスキーマメタデータとレイヤーの意味的役割を公開するようにしました。新しい不変のスキーマ・パッケージ版を使い、Cognis PR #214 に従って検証済みパッケージ識別情報を言語 capability から通知します。

## データ専用 Study パッケージ

モジュール固有のアルファベット、クラスルーム、ナビゲーション、CLI、API、スタイルを削除しました。Cognis は、公開された不変のパッケージ記述子、意味的スキーマ、ローカライズ済みメタデータから英語パッケージを汎用的に検出して表示します。静的に登録するのは言語リソースだけです。

## 解決可能な辞書定義

スキーマにライブラリの定義ローカライズ契約と、アルファベットから定義への明示的な必須関係を追加しました。すべての同梱文字は、各モジュール言語バンドルで解決できる文字列キーを持つ定義を参照し、コンテンツレコードにも一致するローカライズ済みテキストを格納します。

## 最新のライブラリスキーマ

このパックは最新の Study ライブラリスキーマに準拠します。アルファベットには発音一覧と外部音声を持たせ、語彙を順序付き綴りと多言語定義に関連付け、文の並びでは語彙語と文法的な助詞を区別します。バイナリメディアは同梱しません。

## 最新ホストとの互換性

スキーマとコンテンツパックをバージョン 12 に更新しました。`minimal: true` を設定するのはアルファベット文字レイヤーだけで、複合文字・定義・単語・助詞・文は意図的に標準カードを維持します。小文字グリッドは安定した数値表示 ID を解決し、大文字の代替項目は明示的な右側配置を維持し、単語・助詞・文レイヤーは必須の多言語表示定義を使用します。二重字の構成は定義と分離したままにし、必須メタデータの初期値と安定した識別子によって現在のホスト動作を維持します。

## 分離されたブラウザー領域

モジュールの静的名前空間ではロケールバンドルだけを配信し、グローバルなプラットフォームブートストラップフローへのフックを廃止しました。データ取り込みと公開言語ケイパビリティは維持し、データ専用パッケージがホストのナビゲーションやユーザーメニュー構成へ参加したり干渉したりしないようにします。

## 完全な文の構成

最新の Cognis コンテンツパック検証に合わせ、文ラベル全体を位置が連続する語彙単位と助詞の順序付き参照から解決するようにしました。末尾のピリオドは独自の多言語定義を持つ句読点助詞として格納し、同梱文に未参照の文字列が残らないようにしています。

## 読みやすいアルファベットと発音の拡充

アルファベットを、末尾に明示的な空欄を持つ 7 列 4 行の均整の取れた表として表示するようにしました。大文字・小文字の各レコードに文字名と一般的な IPA 音素を持たせ、既存の二重字に `ph`、`wh`、`ng`、`ck` を追加しました。異体関係では廃止された方向ヒントを使わず、ホストの最新の境界付き動的配置契約に従うため、古い表示データが報告されたライブラリ実行時エラーの一因になることを防ぎます。

## ドキュメントと契約

マニフェストは `study:library` を必須とし、現在のホスト所有のアトミック有効化契約に従い、モジュールバージョン 1.2.31 を公開します。

## コミット

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/cb62fd2)

- [Complete-sequence implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3b52255)

- [Locale-isolation implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/78c86f0)
- [Latest presentation-contract implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4ac2cd4)
- [Explicit-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/33ba470)
- [Capital-variant alignment](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5034aab)
- [Composition-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a42d840)
- [Directional-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4d4bd7e)
- [Latest host-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d0aad0d)
- [Latest schema implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bc26d0d)
- [実装の基点](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
