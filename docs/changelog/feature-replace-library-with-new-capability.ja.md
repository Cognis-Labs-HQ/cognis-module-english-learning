# 英語プロバイダーの更新

**機能ブランチ:** feature-replace-library-with-new-capability

## 初期カードの発音音声を同梱

発音対象の初期カードに、重複を除いたオフライン生成 MP3 と帰属表示を含めました。文は引き続き構成要素を順番に再生します。

## 解除可能な音声取得を登録

両方の Study モジュールが同じ解除可能な音声プロバイダー契約を使い、制限付きのローカル読み込みで同梱録音を取得します。認可、キャッシュ方針、合成再生はホストが所有します。

## パッケージの参照先と開発者向けガイド

リリース 1.3.8 — パッケージ検証では、エントリーポイント、アイコン、バナー、スクリーンショットが、解決済みのパスを含めチェックアウト内の通常ファイルであることを確認します。ドキュメントは公開契約を説明し、リリースのメタデータにはマニフェストを参照します。変更履歴にはリリースの来歴を保持します。

## 学習グラフの拡張

検証済みの全 635 レコードには、表示語彙 123、文 45、書字ガイド、正確な活用群 37、初期デッキ四つがあります。名前空間と出典 ID を保持し、非表示の活用形と大文字文頭で文の依存関係を明示します。

## 現行 Cognis 提供契約

限定された提供契約を要求し、失敗・無効化時に登録を解除し、アンインストールの削除要求はホストへ委譲します。フロー、キャッシュ、権限、フラッシュカード、共有はホストの責任です。

## 検索と書字の補完

無料辞書から上限付きの意味と IPA を取得し、出典と文字参照を保持します。独自の JSON ガイドは文字 52 と組み合わせ 17 をカバーし、バイナリアセットは追加しません。不正な同梱 TTS URL を削除し、音声を任意にします。

## 検証と文書

独立した振る舞いテストでライフサイクル、辞書の失敗・上限、グラフ、活用、デッキを検証します。読みやすさの検査で空行を維持します。仕様、辞書ガイド、README、翻訳を四言語で同期します。モジュール 1.3.0 はパッケージ 15.0.0／スキーマ 15 を配布します。

## 初期デッキの拡充

英語は七つの初期デッキを提供します。既存の四つに、大文字、綴りの組み合わせ、日常形容詞を追加します。固定キー、各言語の名称、完全なアルファベット順を検証します。

## 内容と契約の訂正

スキーマ改訂16は重複した形容詞フィルターを削除します。モジュール1.3.1とパッケージ16.0.0は既存のデータ ID を保持します。指示は ctx を基盤とし、操作フロー、利用者データ、辞書キャッシュは Cognis が所有します。

## 共通の言語ページ

内容プロバイダーに子ページがなくても、言語選択は Cognis の探索ページを開きます。言語を切り替えると同じ書字・語彙・文の役割を保ち、フラッシュカード・ライブラリ・申請では共通のページを維持します。英語はアルファベット・文字の組み合わせ・語彙・文を独自のパス名で宣言します。中断したお気に入り読み込みはマウントを終了し、誤解を招く失敗通知を表示しません。

## アルファベット・文法・名詞の数

スキーマ 17 とコンテンツパック 17.0.0 は文字名と任意の IPA 音声情報 `letter_sounds` を分離し、アルファベットの空白埋め合わせセルを除きます。句読点には専用カルーセルを設けます。節・談話の構造を 22 件追加し、翻訳された意味と発音を提供します。確認済みの可算名詞 33 系列は `optInTag: plural` で Cognis の複数形変換を有効にし、綴りと読みの変化も定義します。不可算名詞は対象外です。語形は重複カードを配布せず基本カードから導出します。モジュール版は 1.3.3 です。

## テンプレートの開発指針

ドメイン固有の規則を保持して AGENTS.md を外部モジュールテンプレートに同期します。リリース文書を標準の配置に移し、過去の内容と永久的なモジュール識別情報を保持します。

## 標準構成と所有範囲を守る統合

テンプレートの指針、ドメイン別ルート、翻訳された統合文書、実行可能な構成チェック、最終パッケージハッシュを同期します。公開URLとモジュール識別子は維持します。ブラウザーの提供機能は担当ホストのライフサイクル契約に従います。

## 学習ブランドと画像

モジュールを「英語学習」へ改名し、対応する PNG アイコンとバナーを用意します。重要な画像は Marketplace の中央の安全領域に収めます。表示名と統合ドキュメントを翻訳・更新し、モジュール UUID、言語コード、パッケージ名、コンテンツ識別情報を維持します。

## Marketplace の説明を統一する

Marketplace のメタデータに短い操作概要と具体的な機能説明を使用し、翻訳の意味を揃えます。

## 文を複数の単語で構成

文カードは Library スキーマを通じて最低2つの単語参照を必要とします。初級のあいさつを「Hello, my friend!」に変更し、対応する構成リンクと各言語の定義を用意します。正確な IPA を発音形式として維持し、ホストの Library が読みやすい書体で記号を表示します。

## 文字列の直接指定を禁止し翻訳キーを必須にする

AI向け指示では、すべての経路で英語のユーザー向け文字列の直接指定を禁止します。選択言語に値がない場合は英語のXMLリソースの同じキーを使用できます。英語の代替値も未定義または空の場合は、英語の直接指定、キー名、空の文字列を表示せず、明示的に失敗させます。翻訳の欠落によるエラーを握りつぶしてはいけません。

## 辞書の意味と表記を正しく表現

Free Dictionaryは品詞ごとに候補を分け、対応する定義、タグ、監修済み活用だけを含めます。現在のアルファベットグラフで表現できないため、アポストロフィーやハイフンを含む検索語は受け付けません。

## 辞書応答をストリーム中に制限

応答はストリーム読み込み中に百万バイトへ制限し、超過時は即座に中止します。

## 公開済み起動ステージを保持

公開済みフロー識別子`study-language-en:bootstrap-registration`は維持します。

## 名詞の複数形変換を修正

複数形への変換は単数形`book`だけに適用し、すでに複数の`books`には適用しません。

## 七つの初期デッキを文書化

`houses`は`/haʊzɪz/`を使います。

## Studyモジュールの構成

コンテンツパックは`data/library/`に配置し、マニフェスト、スキーマ、コンテンツファイルを一つの取り込み・削除境界として扱います。初期デッキは`data/starter-decks.json`に残します。実行時プロバイダーは`api/dictionary/`と`api/strokes/`、決定的なファイル読み込みとバイト数を制限した応答デコードは`api/reuse/`に配置します。横断的なコンテンツ・ライフサイクルテストは`tests/`、プロバイダー・通信・APIテストは`api/tests/`に置きます。マニフェストは`api/routes/config/index.js`を`disabledApi`として宣言し、この入口では管理者限定の設定DELETEルートだけを登録します。コンテンツの取り込みやプロバイダーの起動は行いません。公開済みフロー識別子は維持します。

## 辞書音声とホストのキャッシュ

要求された発音が同梱されていない場合、English Study は English Dictionary API で単語を検索し、その発音メディアエンドポイントから一致する MP3 を取得します。優先 IPA の読みが指定されている場合は一致が必須で、異なる発音で代用しません。`api.dictionaryapi.dev` の HTTPS メディアだけを許可し、リダイレクトを拒否します。検索とダウンロードは一つの制限時間を共有し、両方の応答をストリーミング時のバイト数で制限します。録音がない場合は明示的なエラーを返します。Google の音声サービスは使用しません。

録音キャッシュはモジュールではなく Cognis が管理します。認可後、非公開の Files キャッシュで取得済み録音をカード間および再起動後も再利用します。同時再生要求は取得と保存を共有します。キーには提供元の識別子、リビジョン、言語、役割、ラベル、読みを含め、読みや提供元リビジョンが変われば別途解決します。要求や保存の失敗は再試行できます。モジュールが辞書に接続するのは、再生要求時にキャッシュがない場合だけです。

## 間を付けた合成と手動置換

初期録音は多言語ニューラルモデル Kokoro をオフラインで使用し、英語に `bf_emma`、日本語に `jf_alpha` を使用します。クリップは 128 kbps、開始前の無音 200 ms、終了後の無音 180 ms、上限付きピーク正規化、遅めの発話速度で生成します。モデルの帰属表示と Apache ライセンスは `data/audio/VOICE-LICENSE.txt`、声と処理設定は録音一覧に記録します。

文カードには任意の音声フィールドがあります。初回再生時に Cognis は全構成要素へのアクセスを認可し、最初の発音グループだけを選び、指定の変形を適用して、開始前の無音と単語・読点・文末の間を持つ一つの連続 WAV を生成します。録音は非公開でキャッシュし、構成音声のバイト列、読み、変形、間の変更で識別子が変わります。新規カードと既存カードの両方で必要時に生成します。通常の作成画面で音声をアップロードすると生成音声を即座に置き換え、明示ファイルを削除すると自動合成に戻ります。提供元は語の録音を提供し、Cognis が合成とキャッシュ方針を管理します。

## 参照データの収録範囲

日本語の参照カタログは同梱する公式 KANJIDIC2 データの全 13,108 字、英語のカタログは Open English WordNet の全 135,969 語彙項目（正規化キー 127,311 件）を収録します。別の遅延読込辞書プロバイダーであり、149,077 件のカードを起動時に一括取り込みするものではありません。Study 検索で参照辞書を選び、対応項目を通常のグラフ検証経由で取り込みます。意味や使用可能な読みがない項目は不明のままとし、発音・翻訳・筆順を捏造しません。全 Unicode 漢字や存在し得る全英単語の網羅を意味しません。

漢字の読みは JMdict の一般的な用例と利用可能な頻度情報に基づき、送り仮名形も含めて並べます。グループ参照と初期音声は同じ順序に従い、漢字再生は常に最初の読みを使います。既存英単語カードには一つの IPA を収録し、参照項目は優先する英国発音内の原資料の順序を他の方言より先に維持します。発音頻度は文脈に依存し、原資料は全ての読みの普遍的順位を提供しません。

## 参照項目の完全な読みの録音

日本語はさらに `data/audio/reference/` の容量制限付きバンクに、完全な読みのニューラル音声 2,913 件を同梱します。初期録音と合わせて、原資料で読みが分かる全 12,356 字の優先読みに対応します。残る 752 字には読みが記録されておらず、音声を捏造しません。索引は最初の読みを選び、ファイル範囲と中断を確認します。`python3 scripts/reference-audio.py plan --work <directory>` で計画を作り、合成スクリプトで一覧を処理し、`pack` で容量制限付きバンクを生成します。

日本語の並べ替えツールは `--dictionary <JMdict.gz> --kanji-dictionary <KANJIDIC2.xml.gz> --output <priorities.json>` と任意の `--content-root data/library/content` に対応します。一般的な独立語の読みを優先し、他の読みは実在語の対応付けを頻度で重み付けして並べ、`data/audio/primary-readings.json` の確認済み単字カード用の指定を維持します。連濁と促音化は原資料の標準読みに戻して集計します。訓・音・名乗りの読みを保持し、選択された最初の読みだけが再生とキャッシュ識別を決めます。頻度情報は順序付けの手掛かりであり、全発音に通用する普遍的な頻度測定ではありません。

## 任意の音声連携

ElevenLabsを任意のモジュール依存関係として宣言します。インストール時に音声合成用として選択できますが、未導入でもStudyの有効化と録音・結合音声を使用できます。

## 特権なしで音声機能を公開

モジュール自身の名前空間で `elevenlabs-tts:synthesis` を公開し、特権フラグを削除します。英語・日本語Studyは既存の任意依存関係を利用し、ctx経由で機能を解決します。Studyの橋渡し処理は呼び出し側から現在の機能を取得する関数を受け取り、無効化・再有効化と設定済み音声に対応します。

## 音声機能を任意に維持

公開機能は `configured` で現在の準備状態を通知します。StudyはAPIキーと既定の声が保存された後にのみ自動音声を有効にします。ElevenLabsが未導入・無効・未設定でも言語登録は成功し、アップロード音声と既存音声の結合を利用できます。合成は要求しません。

## メディアを同梱しないインストールを修正

データ専用コンテンツパックから未使用のアセットディレクトリ宣言を削除し、パックのバージョンを更新します。パッケージ対象のファイルだけで一時インストールを作成し、宣言されたパスを検証することで、空のローカルディレクトリに依存する有効化を防ぎます。

## 一貫した指定音声を同梱

発音を持つすべての厳選カードと、到達可能な複数形・動詞や副詞の派生形に言語ごとの指定音声を同梱します。文のWAVには、選択した活用形を含む構成音声のPCMを順番にそのまま使用します。音声・モデル・要求の出所、チェックサム、無音検証を記録し、認証情報は含めません。

## 保存される学習設定

同梱の参照資料名は Open English WordNet です。同梱の名詞32語の複数形には専用音声があります。選択した形の表記と優先発音で録音を解決し、録音がない形を基本形の音声で置き換えません。

## 参考画像

任意の画像リストフィールド、非公開の画像アップロード、詳細ギャラリーを追加します。両言語モジュールにライセンス表記付きの参考写真を同梱し、すべてのレイヤーで同じフィールドを提供します。

## コミット

- [c92c6123](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212babe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce057](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a72](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095fe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385bb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e0171127](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
- [0284e55f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c98](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
- [67870fc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/67870fcd764378f0ee8d27a29dcc51a493bd877f)
- [1c31c7c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1c31c7cb63c6d377a1059e1206b928cc4716068c)
- [3dfd7f1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3dfd7f1e52402dbc876c5011c75c066cb0f1c1d9)
- [1ae45ef](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1ae45efa393bd95002a2622e9d871a66fa1eab12)
