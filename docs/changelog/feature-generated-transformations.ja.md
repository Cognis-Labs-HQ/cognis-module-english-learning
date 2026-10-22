# 動的に生成する学習形

**機能ブランチ:** feature-generated-transformations

## 基本カードから活用形を生成

英語の文法セットは、明示的なフラグを持つ基本カードから複数形、動詞・形容詞の活用、様態副詞、副詞の比較形を生成します。確認済みの不規則表記とIPAは規則の例外指定として保持します。文の参照は基本IDと活用経路を保持し、「running」「ran」「want to run」「wanted to run」にも対応します。独立して保存していた活用形は削除します。

## 録音と書字練習を保持

同梱録音は指定された声と文の各構成要素の正確な音声を保持します。新しい連鎖活用と副詞には録音を追加しました。網羅性テストでは有効な各規則と選択経路に対応する音声を必須とします。生成した表記はホストの筆順解決処理に対応します。

## すべての品詞を表示

語彙の品詞フィルターを任意とし、既定の名詞指定をなくしました。文で使う動詞、代名詞、形容詞なども見つけられます。カード編集時の品詞入力は引き続き必須です。

## コミット

- [58369ddb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/58369ddb55a1b12162a37567e3027f4b1cf6b83c)
- [8aecdc0a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8aecdc0a5c0f0d2315b2947a5315fb3545a8c20b)
