# ガイド付きチュートリアル

**Feature Branch:** feature-guided-tutorials

Study の共通ナビゲーションと言語コンテンツのガイドを分離しました。登録済み言語のガイドは汎用 Explore を置き換え、条件付き分岐とスコープ付き寿命を使って実際のカード詳細、描画、カード作成を案内します。

## 技術仕様

Explore と Flashcards の経路は Study の公開機能 `study:tutorialTargets` が解決します。言語モジュールは言語データと手順だけを提供し、経路、受講登録、キャッシュ、学習 UI は Cognis が担当します。英語と日本語のプロバイダー実装は同一です。キャッシュ済みコンテンツはオフラインでも説明できます。移動後に対象がない場合はホストの対象欠落ポリシーに従います。

モジュールは ctx 経由で手順と翻訳済みテキストを登録します。ホストが一覧、説明、矢印、強調表示、キーとポインターの制御、アクセス確認付き SPA ナビゲーション、アクセシビリティを担当します。閉じる操作、手順外への移動、権限の喪失、モジュールの無効化でセッションを終了します。プロバイダーのマウント失敗時は登録を取り消します。

プロバイダーテストでは公開契約、4 言語の翻訳、利用条件、失敗時の後処理、未対応ホストバージョンの拒否を確認します。

## ページ連動の初回ガイド

ホストは説明、矢印、強調表示、アクセシビリティ、共通のフローティング操作メニューを担当します。初回は常に「次へ」を表示し、中止とスキップは表示しません。再生時の中止には `btn-cancel` を使います。完了はブラウザー内でアカウント別に保存します。移動、アクセス喪失、プロバイダー解除でセッションを終了し、マウント失敗では登録を取り消します。

## モジュールの翻訳キー

チュートリアルの翻訳キーは、ハイフンを含むマニフェストのモジュールID全体を名前空間の単一の要素として使います。

## 操作に役立つ説明

各ステップではページの操作項目と作業を説明し、権限やガイドが実行しない操作についての不要な説明を省きます。

## ステップごとに次へ進む強調を指定

各ステップで `highlightNext` を明示します。「次へ」や「完了」が必要な説明では有効にし、操作や待機条件で進む練習では無効にします。動きを減らす設定では静的な枠を表示します。

すべての UI コンポーネントにチュートリアルを用意します。開発ガイドラインでは、利用者の目的に沿う操作説明と、機能や UI 動作の変更に伴う既存チュートリアルの見直しを求めます。

## 表示されるチュートリアル対象

強調する領域と「次へ」の強調を明示します。

## 共通のフローティングメニュー待ち行列

メニューはホスト共通の待ち行列とコンポーネントの寿命に従います。

## 復旧操作の説明

対象がない画面では「次へ」と最初からやり直す操作を提供し、再実行では中止も選べます。

## 目的の明確なガイド

表示順に沿って異なる可視操作を説明します。共通指針は画面状態の検出、安定した例、空の状態、条件付き分岐、ライフサイクルの後処理を扱います。再実行操作と動きを減らす設定の文書をホストと一致させます。

## 操作に沿ったガイド

言語ガイドは学習設定で明示的に登録した後だけに表示します。登録済みであることを前提に、探索から練習ツールへ進みます。

## コミット

- [e1d021b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e1d021bff42813deefaf1996c9254fa4c1989197)
- [2634251](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/26342513e70ae51ab235ab276c73515857836e54)
- [69ea9e2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/69ea9e2bad4a19dd701fd3de40ea037b3222822b)
- [ba6400e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ba6400eec803d69d53b7099dd34161ca98738b0a)
- [6e6f062](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6e6f0625fa5598da1c6c6237c75f6ecd197b7609)
- [b696b59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b696b59c123632458fe2f16e0e2b1e538fd3b44a)
- [32bcc67e7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/32bcc67e7fe737b105b6d0c4ab57e2f1112b432e)
- [8d9b332c8](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d9b332c89fb831abbcd5ccd422b80c4e840cb28)
- [ea8ce9a75](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ea8ce9a75f71f2d84b97e8e353201f0af903cc13)
