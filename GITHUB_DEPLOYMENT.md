# GitHub Pagesでのテスト運用ガイド

少人数でのテスト運用を想定した、GitHub Pagesでの公開手順を説明します。

## 📋 目次
1. [事前準備](#事前準備)
2. [GitHubへのアップロード](#githubへのアップロード)
3. [GitHub Pagesの有効化](#github-pagesの有効化)
4. [テスト運用の開始](#テスト運用の開始)
5. [トラブルシューティング](#トラブルシューティング)

---

## 事前準備

### 1. GitHubアカウントの作成
まだアカウントがない場合：
1. [GitHub](https://github.com/) にアクセス
2. 「Sign up」をクリック
3. メールアドレス、パスワード、ユーザー名を入力
4. メール認証を完了

### 2. 必要なファイルの確認
以下のファイルがあることを確認：
```
✅ index.html          （メインファイル）
✅ README.md           （説明書）
✅ LICENSE             （ライセンス）
✅ .gitignore          （Git除外設定）
```

---

## GitHubへのアップロード

### 方法1: GitHubのWebインターフェース（初心者向け・推奨）

#### ステップ1: 新しいリポジトリの作成
1. GitHubにログイン
2. 右上の「+」→「New repository」をクリック
3. 以下を入力：
   - **Repository name**: `hitokiwa-lesson-system`（任意の名前）
   - **Description**: `hitokiwaレッスン予約システム`
   - **Public**: テストメンバーとのみ共有する場合は **Private** を選択
   - **Add a README file**: チェックを **外す**（既にREADME.mdがあるため）
4. 「Create repository」をクリック

#### ステップ2: ファイルのアップロード
1. 「uploading an existing file」のリンクをクリック
2. すべてのファイルをドラッグ&ドロップ：
   - `index.html`
   - `README.md`
   - `LICENSE`
   - `.gitignore`
   - その他の `.md` ファイル
3. コミットメッセージ: `Initial commit: hitokiwa lesson system`
4. 「Commit changes」をクリック

✅ **完了！** ファイルがGitHubにアップロードされました。

---

### 方法2: Git コマンドライン（経験者向け）

#### ステップ1: Gitのインストール
```bash
# macOS（Homebrewを使用）
brew install git

# Windows
# https://git-scm.com/download/win からダウンロード

# Linux (Ubuntu/Debian)
sudo apt-get install git
```

#### ステップ2: リポジトリの作成と初期化
```bash
# プロジェクトディレクトリに移動
cd path/to/your/project

# Gitリポジトリを初期化
git init

# すべてのファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit: hitokiwa lesson system"

# メインブランチ名を設定
git branch -M main
```

#### ステップ3: GitHubと連携
```bash
# リモートリポジトリを追加（your-usernameを自分のユーザー名に変更）
git remote add origin https://github.com/your-username/hitokiwa-lesson-system.git

# プッシュ
git push -u origin main
```

初回プッシュ時、GitHubのユーザー名とパスワード（またはPersonal Access Token）を入力します。

---

## GitHub Pagesの有効化

### ステップ1: Settings にアクセス
1. GitHubのリポジトリページを開く
2. 「Settings」タブをクリック

### ステップ2: Pagesの設定
1. 左サイドバーの「Pages」をクリック
2. 「Source」セクションで：
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
3. 「Save」ボタンをクリック

### ステップ3: 公開URLの確認
1. 数分待つ（通常1-5分）
2. ページをリロード
3. 緑色のボックスに表示されるURL:
   ```
   https://your-username.github.io/hitokiwa-lesson-system/
   ```
4. このURLをクリックして動作確認

✅ **完了！** システムがWeb上で公開されました。

---

## テスト運用の開始

### 1. URLの共有
公開URLをテストメンバーに共有：
```
https://your-username.github.io/hitokiwa-lesson-system/
```

**📱 スマホでアクセス:**
- QRコードを生成して共有すると便利
- [QR Code Generator](https://www.qr-code-generator.com/) でURLからQRコードを作成

### 2. テストアカウント情報の共有
メンバーに以下の情報を共有：

#### 受講生用（スマホ推奨）
```
役割: 受講生
ID: 任意のID（例: STU001, STU002など）
パスワード: student123
```

#### 講師用（PC推奨）
```
役割: 講師
ID: admin
パスワード: admin123
```

#### 受講生担当用（PC推奨）
```
役割: 受講生担当
ID: coord
パスワード: coord123
```

### 3. 初期設定
初回アクセス時、サンプルデータが自動生成されます：
- サンプル講師: 3名
- サンプル受講生: 4名
- サンプルレッスン: 3件

**サンプルデータをクリアして開始する場合:**
1. ブラウザの開発者ツールを開く（F12キー）
2. コンソールタブで以下を実行：
```javascript
localStorage.clear()
location.reload()
```

### 4. テスト運用のポイント

#### ✅ 受講生向け（スマホ）
- [ ] レッスン一覧の表示確認
- [ ] レッスン予約機能
- [ ] 講師評価機能
- [ ] 同席依頼機能
- [ ] スマホでの操作感

#### ✅ 講師向け（PC）
- [ ] レッスン作成（単一・バッチ）
- [ ] カレンダー表示
- [ ] 受講生評価機能
- [ ] Google Calendar連携

#### ✅ 受講生担当向け（PC）
- [ ] 統計情報の確認
- [ ] 受講生管理
- [ ] 全レッスン一覧
- [ ] カレンダー同席機能

---

## データ管理の注意点

### ⚠️ 重要な注意事項

1. **データの保存場所**
   - すべてのデータはブラウザのLocalStorageに保存
   - ブラウザのキャッシュをクリアするとデータが消失
   - デバイスごとに独立したデータ

2. **データの共有**
   - 現在のシステムは各ユーザーのブラウザにデータを保存
   - ユーザー間でデータは共有されません
   - 本格運用にはバックエンドサーバーが必要

3. **バックアップ**
   定期的にデータをバックアップ：
   ```javascript
   // ブラウザコンソールで実行
   const backup = {
       lessons: localStorage.getItem('lessons'),
       students: localStorage.getItem('students'),
       instructors: localStorage.getItem('instructors'),
       bookings: localStorage.getItem('bookings'),
       ratings: localStorage.getItem('ratings'),
       instructorRatings: localStorage.getItem('instructorRatings')
   };
   console.log(JSON.stringify(backup));
   // 出力されたJSONをコピーして保存
   ```

---

## 更新とメンテナンス

### ファイルの更新方法

#### Webインターフェースで更新
1. GitHubリポジトリページで更新したいファイルをクリック
2. 鉛筆アイコン（Edit）をクリック
3. 変更を加える
4. 「Commit changes」をクリック
5. 数分後、GitHub Pagesに反映

#### Git コマンドで更新
```bash
# ファイルを編集後
git add .
git commit -m "Update: 変更内容の説明"
git push origin main
```

### キャッシュのクリア
更新が反映されない場合、ブラウザでキャッシュをクリア：
- **Chrome/Edge**: Ctrl+Shift+Delete → キャッシュをクリア
- **Safari**: Cmd+Option+E
- **Firefox**: Ctrl+Shift+Delete → キャッシュをクリア

---

## トラブルシューティング

### 問題1: GitHub Pagesが404エラー
**原因**: Pagesの設定が未完了またはファイル名が間違っている

**解決方法:**
1. Settings → Pages で設定を確認
2. `index.html` がルートディレクトリにあることを確認
3. 数分待ってから再度アクセス

### 問題2: データが共有されない
**原因**: LocalStorageは各ブラウザ/デバイスで独立

**解決方法:**
これは仕様です。データ共有には以下が必要：
- バックエンドサーバー（Firebase, Supabaseなど）
- データベース統合
- API開発

### 問題3: スマホで表示が崩れる
**原因**: キャッシュ、またはブラウザの互換性

**解決方法:**
1. ブラウザのキャッシュをクリア
2. ページをリロード
3. 最新版のブラウザを使用

### 問題4: プライベートリポジトリでPagesが使えない
**原因**: GitHub Free プランではプライベートリポジトリでのPagesは制限あり

**解決方法:**
- リポジトリをPublicに変更
- または、GitHub Pro にアップグレード
- または、限定共有用のパスワード保護を別途実装

---

## セキュリティとプライバシー

### テスト運用時の推奨事項

1. **パスワードの変更**
   - `index.html` 内の初期パスワードを変更
   - 配布時に新しいパスワードを共有

2. **アクセス制限**
   - Publicリポジトリの場合、URLを知っている人なら誰でもアクセス可能
   - 機密情報は入力しない
   - テスト用データのみ使用

3. **データの取り扱い**
   - 個人情報は入力しない
   - 本名の代わりにニックネームを使用
   - テスト終了後はデータを削除

---

## 次のステップ

テスト運用で問題なければ、以下を検討：

1. **本格運用への移行**
   - バックエンドサーバーの導入
   - データベース統合
   - 認証システムの強化

2. **機能拡張**
   - メール通知機能
   - リマインダー機能
   - レポート機能

3. **カスタマイズ**
   - 組織のブランディング
   - 独自ドメインの設定
   - 追加機能の開発

---

## 📞 サポート

質問や問題が発生した場合：
- [GitHub Issues](https://github.com/your-username/hitokiwa-lesson-system/issues)
- プロジェクトのREADME.mdを参照

---

**🎉 テスト運用、頑張ってください！**
