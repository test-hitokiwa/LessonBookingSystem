# 🚀 GitHub公開手順 - 完全ガイド

**所要時間: 15分**

このガイドでは、hitokiwaレッスン予約システムをGitHubで公開する手順を、初心者にも分かりやすく説明します。

---

## 📋 事前準備

### 必要なもの
- ✅ GitHubアカウント（無料）
- ✅ プロジェクトファイル一式
- ✅ ブラウザ（Chrome、Firefox、Safari、Edge）

### 公開するファイル
```
✅ index.html                    # メインシステム
✅ README.md                     # プロジェクト説明
✅ LICENSE                       # ライセンス
✅ .gitignore                    # Git除外設定
✅ QUICKSTART.md                 # クイックスタート
✅ GITHUB_DEPLOYMENT.md          # 詳細デプロイガイド
✅ GOOGLE_SHEETS_SETUP.md        # Sheets連携ガイド
✅ CHANGELOG_v1.4.1.md           # 変更履歴
✅ google-apps-script.js         # Apps Scriptコード
```

---

## 🎯 公開方法（3つの選択肢）

### 方法1: ブラウザで簡単アップロード（推奨 - 初心者向け）
⏱️ **所要時間: 10分**  
💡 **特徴**: コマンド不要、ドラッグ&ドロップだけ

### 方法2: GitHub Desktopを使う（中級者向け）
⏱️ **所要時間: 15分**  
💡 **特徴**: GUI操作、バージョン管理が簡単

### 方法3: Git CLIを使う（上級者向け）
⏱️ **所要時間: 5分**  
💡 **特徴**: コマンド操作、最も高速

---

# 📌 方法1: ブラウザで簡単アップロード（推奨）

## ステップ1: GitHubアカウントを準備（3分）

### 1-1. GitHubにアクセス
👉 https://github.com にアクセス

### 1-2. ログイン
- 既にアカウントがある → 「Sign in」でログイン
- アカウントがない → 「Sign up」で新規登録（無料）

✅ **完了！** ログインできました。

---

## ステップ2: リポジトリを作成（2分）

### 2-1. 新しいリポジトリを作成
1. 右上の **「+」ボタン** → **「New repository」** をクリック

### 2-2. リポジトリ情報を入力
```
Repository name: hitokiwa-lesson-system
（または任意の名前。英数字とハイフンのみ）

Description: hitokiwaレッスン予約・管理システム
（任意。日本語OK）

公開設定:
○ Public  ← 誰でもアクセス可能（推奨）
○ Private ← 自分と招待した人だけアクセス可能

初期化設定:
☐ Add a README file （チェックを外す）
☐ Add .gitignore: None
☐ Choose a license: None
```

### 2-3. リポジトリを作成
**「Create repository」** ボタンをクリック

✅ **完了！** リポジトリが作成されました。

---

## ステップ3: ファイルをアップロード（3分）

### 3-1. アップロード画面を開く
リポジトリ作成直後の画面で：
- **「uploading an existing file」** のリンクをクリック

または、リポジトリページで：
- **「Add file」** → **「Upload files」** をクリック

### 3-2. ファイルをアップロード

#### 方法A: ドラッグ&ドロップ
1. プロジェクトフォルダから以下のファイルを選択
2. ブラウザの画面にドラッグ&ドロップ

#### 方法B: ファイル選択
1. **「choose your files」** をクリック
2. ファイルを選択して **「開く」**

#### アップロードするファイル一覧
```
✅ index.html
✅ README.md
✅ LICENSE
✅ .gitignore
✅ QUICKSTART.md
✅ GITHUB_DEPLOYMENT.md
✅ GOOGLE_SHEETS_SETUP.md
✅ CHANGELOG_v1.4.1.md
✅ google-apps-script.js
✅ その他の .md ファイル
```

### 3-3. コミット
1. 下部の **「Commit changes」** ボタンをクリック
2. アップロード完了まで待つ（数秒〜数十秒）

✅ **完了！** ファイルがGitHubにアップロードされました。

---

## ステップ4: GitHub Pagesを有効化（2分）

### 4-1. Settings を開く
1. リポジトリページ上部の **「Settings」** タブをクリック
2. 左サイドバーの **「Pages」** をクリック

### 4-2. 公開設定
**Branch** セクション：
1. **「None」** のドロップダウンをクリック
2. **「main」** を選択
3. フォルダは **「/ (root)」** を選択
4. **「Save」** ボタンをクリック

### 4-3. 公開URLを確認
1. **1〜5分待つ** ☕（初回は時間がかかります）
2. ページをリロード（F5キー）
3. 上部に緑色のボックスが表示されます：

```
✅ Your site is live at https://あなたのユーザー名.github.io/hitokiwa-lesson-system/
```

4. URLをコピー

✅ **完了！** システムが公開されました。

---

## ステップ5: 動作確認（3分）

### 5-1. PCでアクセス
1. 公開URLにアクセス
2. **「講師」** ボタンをクリック
3. ログイン情報を入力：
   - ID: `admin`
   - パスワード: `admin123`
4. 「ログイン」をクリック
5. レッスン一覧やカレンダーが表示されることを確認

### 5-2. スマホでアクセス
1. 同じURLにスマホでアクセス
2. **「受講生」** ボタンをタップ
3. ログイン情報を入力：
   - ID: `STU001`（任意のID）
   - パスワード: `student123`
4. 「ログイン」をタップ
5. レッスン一覧が表示されることを確認

✅ **完了！** システムが正常に動作しています。

---

# 📌 方法2: GitHub Desktopを使う

## ステップ1: GitHub Desktopをインストール（5分）

### 1-1. ダウンロード
👉 https://desktop.github.com にアクセス

### 1-2. インストール
1. ダウンロードしたファイルを実行
2. インストール完了まで待つ

### 1-3. ログイン
1. GitHub Desktopを起動
2. 「Sign in to GitHub.com」をクリック
3. ブラウザでログイン
4. 「Authorize desktop」をクリック

✅ **完了！** GitHub Desktopが使えるようになりました。

---

## ステップ2: リポジトリを作成（3分）

### 2-1. 新しいリポジトリを作成
1. **「File」** → **「New repository」**

### 2-2. リポジトリ情報を入力
```
Name: hitokiwa-lesson-system
Description: hitokiwaレッスン予約・管理システム
Local path: プロジェクトフォルダを選択
☐ Initialize this repository with a README （チェックを外す）
Git ignore: None
License: MIT License
```

### 2-3. リポジトリを作成
**「Create repository」** ボタンをクリック

✅ **完了！** リポジトリが作成されました。

---

## ステップ3: ファイルをコミット（2分）

### 3-1. ファイルを確認
左側に以下のファイルが表示されます：
```
✅ index.html
✅ README.md
✅ LICENSE
... その他すべてのファイル
```

### 3-2. コミットメッセージを入力
左下の入力欄：
```
Summary: Initial commit - hitokiwa lesson system
Description: （任意）
```

### 3-3. コミット
**「Commit to main」** ボタンをクリック

✅ **完了！** ファイルがコミットされました。

---

## ステップ4: GitHubにプッシュ（2分）

### 4-1. リポジトリを公開
上部の **「Publish repository」** ボタンをクリック

### 4-2. 公開設定
```
Name: hitokiwa-lesson-system
Description: hitokiwaレッスン予約・管理システム
☐ Keep this code private （公開する場合はチェックを外す）
```

### 4-3. 公開
**「Publish repository」** ボタンをクリック

✅ **完了！** GitHubにアップロードされました。

---

## ステップ5: GitHub Pagesを有効化（2分）

（方法1のステップ4と同じ手順）

---

# 📌 方法3: Git CLIを使う（上級者向け）

## ステップ1: Gitをインストール

### Windowsの場合
👉 https://git-scm.com/download/win

### Macの場合
```bash
# Homebrewでインストール
brew install git
```

### Linuxの場合
```bash
# Ubuntuの場合
sudo apt-get install git

# CentOSの場合
sudo yum install git
```

---

## ステップ2: リポジトリを初期化してプッシュ

### 2-1. プロジェクトフォルダに移動
```bash
cd /path/to/hitokiwa-lesson-system
```

### 2-2. Gitリポジトリを初期化
```bash
git init
```

### 2-3. GitHubでリポジトリを作成
1. https://github.com/new にアクセス
2. リポジトリ名: `hitokiwa-lesson-system`
3. 「Create repository」をクリック

### 2-4. ファイルをコミット
```bash
git add .
git commit -m "Initial commit: hitokiwa lesson reservation system"
```

### 2-5. リモートリポジトリを追加
```bash
git remote add origin https://github.com/あなたのユーザー名/hitokiwa-lesson-system.git
```

### 2-6. プッシュ
```bash
git branch -M main
git push -u origin main
```

✅ **完了！** GitHubにプッシュされました。

---

## ステップ3: GitHub Pagesを有効化

（方法1のステップ4と同じ手順）

---

# 🎉 公開完了後の確認

## ✅ 公開URLの確認
```
https://あなたのユーザー名.github.io/hitokiwa-lesson-system/
```

## ✅ 動作テスト

### 1. 講師としてログイン
- ID: `admin`
- パスワード: `admin123`
- レッスン作成が可能か確認

### 2. 受講生としてログイン
- ID: 任意（例: `STU001`）
- パスワード: `student123`
- レッスン予約が可能か確認

### 3. 担当者としてログイン
- ID: `coord`
- パスワード: `coord123`
- 担当受講生の統計が表示されるか確認

### 4. 管理者としてログイン
- ID: `admin`
- パスワード: `admin123`
- システム概要が表示されるか確認

---

# 📱 メンバーへの共有

## 共有テンプレート

```
📱 hitokiwaレッスン予約システム

アクセスURL:
https://あなたのユーザー名.github.io/hitokiwa-lesson-system/

【受講生用】
役割: 受講生
ID: 任意のID（例: STU001, あなたの名前など）
パスワード: student123
※スマホでのアクセスを推奨

【講師用】
役割: 講師
ID: admin
パスワード: admin123
※PCでのアクセスを推奨

【受講生担当用】
役割: 受講生担当
ID: coord
パスワード: coord123
※PCでのアクセスを推奨

【管理者用】
役割: 管理者
ID: admin
パスワード: admin123
※PCでのアクセスを推奨

初回アクセス時、サンプルデータが自動生成されます。
```

---

# 🔧 更新方法

## ファイルを修正した場合

### 方法1: ブラウザで更新
1. GitHubのリポジトリページを開く
2. 修正したいファイルをクリック
3. 右上の「✏️ 編集」アイコンをクリック
4. ファイルを修正
5. 「Commit changes」をクリック
6. 1〜5分後に反映

### 方法2: GitHub Desktopで更新
1. ファイルを修正
2. GitHub Desktopに変更が表示される
3. コミットメッセージを入力
4. 「Commit to main」をクリック
5. 「Push origin」をクリック
6. 1〜5分後に反映

### 方法3: Git CLIで更新
```bash
git add .
git commit -m "Update: 修正内容"
git push
```

---

# 🐛 トラブルシューティング

## URLにアクセスできない

### 原因1: 公開処理中
- ⏰ 初回は最大5分かかります
- 🔄 ページをリロードして確認

### 原因2: GitHub Pagesが有効になっていない
- Settings → Pages で設定を確認
- Branch が「main」になっているか確認

### 原因3: ファイル名が間違っている
- ✅ `index.html` が正しくアップロードされているか確認
- ✅ ファイル名が大文字・小文字で一致しているか確認

---

## 404エラーが表示される

### 原因: URLが間違っている
正しいURL形式：
```
https://あなたのユーザー名.github.io/リポジトリ名/
```

例：
```
✅ https://tanaka-taro.github.io/hitokiwa-lesson-system/
❌ https://github.com/tanaka-taro/hitokiwa-lesson-system/
```

---

## 表示が崩れる

### 解決策
1. ブラウザのキャッシュをクリア
2. スーパーリロード（Ctrl+Shift+R / Cmd+Shift+R）
3. シークレットモードで開く

---

## データが消えた

### 原因: ブラウザのデータがクリアされた
- LocalStorage は各ブラウザに保存されます
- キャッシュクリアで消えます

### 解決策
- サンプルデータは自動で再生成されます
- 重要なデータは定期的にバックアップを推奨

---

# 📞 サポート

## ドキュメント
- **クイックスタート**: `QUICKSTART.md`
- **詳細ガイド**: `GITHUB_DEPLOYMENT.md`
- **Google Sheets連携**: `GOOGLE_SHEETS_SETUP.md`
- **変更履歴**: `CHANGELOG_v1.4.1.md`

## 質問・問題報告
GitHubのIssuesで報告してください：
```
https://github.com/あなたのユーザー名/hitokiwa-lesson-system/issues
```

---

# 🎯 次のステップ

## 1. Google Sheets連携を設定
👉 `GOOGLE_SHEETS_SETUP.md` を参照

## 2. カスタマイズ
- レッスン内容の変更
- デザインの調整
- 機能の追加

## 3. フィードバック収集
- テストユーザーから意見を集める
- 改善点を洗い出す

## 4. 本格運用の計画
- バックエンドサーバーの検討
- データベースの導入
- セキュリティ強化

---

**🎉 公開成功を祈ります！**

質問があれば、お気軽にお問い合わせください。
