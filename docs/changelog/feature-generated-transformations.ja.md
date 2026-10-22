# 動的に生成する学習形

**機能ブランチ:** feature-generated-transformations

## 基本カードから活用形を生成

英語の文法セットは、明示的なフラグを持つ基本カードから複数形、動詞・形容詞の活用、様態副詞、副詞の比較形を生成します。確認済みの不規則表記とIPAは規則の例外指定として保持します。文の参照は基本IDと活用経路を保持し、「running」「ran」「want to run」「wanted to run」にも対応します。独立して保存していた活用形は削除します。

## 録音と書字練習を保持

同梱録音は指定された声と文の各構成要素の正確な音声を保持します。新しい連鎖活用と副詞には録音を追加しました。網羅性テストでは有効な各規則と選択経路に対応する音声を必須とします。生成した表記はホストの筆順解決処理に対応します。

## すべての品詞を表示

語彙の品詞フィルターを任意とし、既定の名詞指定をなくしました。文で使う動詞、代名詞、形容詞なども見つけられます。カード編集時の品詞入力は引き続き必須です。

## 文で使う語彙を見つけやすくする

文構造カルーセルは `excludeFromBrowse: false` を明示し、その語彙を「語彙」にも表示します。句読点専用カルーセルは除外したままです。テストでは全文の語彙参照、非表示の発音別名、任意フィルターの対象範囲を確認します。

## 学習者向けタグの整理

英語カードのピルは、内部の変形・語形タグではなく、意味のある翻訳済みメタデータを表示します。品詞の選択肢とフィルターは翻訳した名前とプロバイダーの定義順を使います。任意のフィルターは値が一つでも未選択から始まり、保存タグと生成変形は保持します。

## 汎用の難易度プロファイル

両方の Study モジュールは共通の `difficulty_level` フィールドを使います。同一の正規化処理と契約テストが `data/library/difficulty.json` を読み、表示名、選択肢の順序、出典タグの対応、基本レイヤーの既定値、変形の難易度をデータとして扱います。日本語は JLPT N5～N1、英語は既存の初級・中級・上級を表示します。不明な値は未分類のままです。ホストは言語固有の規則や別名フィールドを使わず、宣言されたフィールドを順位付けします。

## コミット

- [58369ddb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/58369ddb55a1b12162a37567e3027f4b1cf6b83c)
- [8aecdc0a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8aecdc0a5c0f0d2315b2947a5315fb3545a8c20b)
- [d26a0f0c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d26a0f0cdbdbf56720cc244bdf2f44cfeb7452bc)
- [a4f284f7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a4f284f71438edf5c3e6b67fc1018cdcdf4782d1)
- [ae9407b6](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ae9407b684ff6ca0083f7a8b502243f600487c88)
