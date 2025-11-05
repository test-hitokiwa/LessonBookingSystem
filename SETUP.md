# セットアップガイド

## 📦 クイックスタート

### 必要な環境
- モダンなWebブラウザ（Chrome 80+, Firefox 75+, Safari 13+, Edge 80+）
- インターネット接続（初回アクセス時）

### インストール不要
このシステムは純粋なHTML/CSS/JavaScriptで構築されており、サーバーサイドのセットアップは不要です。

## 🚀 ローカルでの実行

### 方法1: ブラウザで直接開く
1. `index.html` をダウンロード
2. ファイルをダブルクリック
3. ブラウザで自動的に開きます

### 方法2: ローカルサーバーで実行（推奨）

#### Python 3を使用
```bash
# リポジトリをクローン
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# ローカルサーバーを起動
python -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

#### Node.jsを使用
```bash
# リポジトリをクローン
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# http-serverをインストール（初回のみ）
npm install -g http-server

# ローカルサーバーを起動
http-server

# ブラウザで開く
open http://localhost:8080
```

#### VS Code Live Serverを使用
1. VS Codeで `index.html` を開く
2. 右クリック → 「Open with Live Server」を選択
3. 自動的にブラウザで開きます

## 🌐 GitHub Pagesでの公開

### ステップ1: リポジトリの作成
1. GitHubで新しいリポジトリを作成
2. ローカルでリポジトリを初期化:
```bash
git init
git add .
git commit -m "Initial commit: hitokiwa lesson reservation system"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### ステップ2: GitHub Pagesの有効化
1. GitHubリポジトリページにアクセス
2. 「Settings」タブをクリック
3. 左サイドバーの「Pages」をクリック
4. 「Source」セクションで:
   - Branch: `main`
   - Folder: `/ (root)`
5. 「Save」ボタンをクリック
6. 数分後に `https://your-username.github.io/your-repo-name/` でアクセス可能

### ステップ3: README.mdの更新
デプロイ後、README.md内のデモURLを実際のURLに更新してください:
```markdown
> 🌐 **デモサイト**: [GitHub Pagesでデモを見る](https://your-username.github.io/your-repo-name/)
```

## 🔧 カスタマイズ

### 初期データの変更
`index.html` 内の `initializeSampleData()` 関数を編集して、初期データをカスタマイズできます。

### スタイルの変更
`<style>` タグ内のCSSを編集して、デザインをカスタマイズできます。

### 機能の追加
JavaScriptセクションを編集して、新しい機能を追加できます。

## 📊 データ管理

### データの保存
すべてのデータはブラウザの LocalStorage に保存されます。

### データのバックアップ
ブラウザの開発者ツールを使用してデータをエクスポートできます:
```javascript
// コンソールで実行
localStorage.getItem('lessons')
localStorage.getItem('students')
localStorage.getItem('instructors')
```

### データのリセット
ブラウザの開発者ツールを使用してデータをクリアできます:
```javascript
// コンソールで実行
localStorage.clear()
// ページをリロード
location.reload()
```

## 🐛 トラブルシューティング

### データが表示されない
- ブラウザのLocalStorageが有効か確認
- プライベートブラウジングモードを使用していないか確認
- ブラウザのキャッシュをクリアして再読み込み

### レイアウトが崩れる
- ブラウザが最新版か確認
- キャッシュをクリアして再読み込み

### 予約が反映されない
- ブラウザのコンソールでエラーを確認
- データ整合性チェックを実行（管理者画面）

## 📞 サポート

問題が解決しない場合は、[Issues](https://github.com/your-username/your-repo-name/issues) で報告してください。
