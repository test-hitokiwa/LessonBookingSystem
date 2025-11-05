# コントリビューションガイド

hitokiwaレッスン予約システムへの貢献に興味を持っていただきありがとうございます！このガイドでは、プロジェクトへの貢献方法を説明します。

## 🤝 貢献の方法

### バグ報告
バグを見つけた場合は、以下の情報を含めて [Issues](https://github.com/your-username/your-repo-name/issues) で報告してください:
- **バグの説明**: 何が起こったか
- **再現手順**: バグを再現する手順
- **期待される動作**: 本来どうなるべきか
- **スクリーンショット**: 可能であれば画像を添付
- **環境情報**: ブラウザ、OS、バージョンなど

### 機能提案
新しい機能のアイデアがある場合は、[Issues](https://github.com/your-username/your-repo-name/issues) で提案してください:
- **機能の説明**: どんな機能か
- **ユースケース**: なぜ必要か、どう使うか
- **代替案**: 他の実装方法があれば

### プルリクエスト

#### 準備
1. リポジトリをフォーク
2. フォークしたリポジトリをクローン
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

3. 開発用ブランチを作成
```bash
git checkout -b feature/your-feature-name
# または
git checkout -b fix/your-bug-fix
```

#### 開発
1. コードを変更
2. ローカルでテスト
3. コミット
```bash
git add .
git commit -m "feat: add new feature description"
# または
git commit -m "fix: fix bug description"
```

#### コミットメッセージの規約
以下の形式を推奨します:
- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメントのみの変更
- `style:` コードの意味に影響しない変更（空白、フォーマットなど）
- `refactor:` リファクタリング
- `test:` テストの追加や修正
- `chore:` ビルドプロセスやツールの変更

#### プルリクエストの作成
1. 変更をプッシュ
```bash
git push origin feature/your-feature-name
```

2. GitHubでプルリクエストを作成
3. プルリクエストの説明を記入:
   - **変更内容**: 何を変更したか
   - **理由**: なぜ変更したか
   - **テスト**: どうテストしたか
   - **関連Issue**: 関連するIssue番号（あれば）

## 📝 コーディング規約

### HTML
- セマンティックなタグを使用
- 適切なインデント（2スペース）
- 属性値にはダブルクォートを使用

### CSS
- クラス名はケバブケース（例: `.lesson-card`）
- グローバルスタイルとコンポーネント固有スタイルを分離
- レスポンシブデザインを考慮

### JavaScript
- ES6+の構文を使用
- 適切な変数名（分かりやすく、意味のある名前）
- コメントで複雑なロジックを説明
- 関数は単一責任の原則に従う

### コードの例
```javascript
// ✅ 良い例
function calculateAverageRating(ratings) {
    const validRatings = ratings.filter(r => r.rating > 0);
    if (validRatings.length === 0) return 0;
    
    const sum = validRatings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / validRatings.length).toFixed(2);
}

// ❌ 避けるべき例
function calc(r) {
    var v = r.filter(x => x.rating > 0);
    return v.length > 0 ? (v.reduce((a, x) => a + x.rating, 0) / v.length).toFixed(2) : 0;
}
```

## 🧪 テスト

プルリクエストを作成する前に、以下を確認してください:
- [ ] すべての機能が正常に動作する
- [ ] 既存の機能が壊れていない
- [ ] ブラウザの開発者ツールでエラーがない
- [ ] 異なるブラウザで動作確認（Chrome, Firefox, Safari, Edge）
- [ ] レスポンシブデザインが適切に機能する

## 📚 ドキュメント

コードの変更に伴い、以下のドキュメントも更新してください:
- README.md（新機能や変更点）
- SETUP.md（セットアップ手順の変更）
- コード内のコメント

## ⚖️ ライセンス

このプロジェクトに貢献することで、あなたのコードが [MIT License](LICENSE) の下で公開されることに同意したものとみなされます。

## 💬 コミュニケーション

質問や議論は以下で行えます:
- [Issues](https://github.com/your-username/your-repo-name/issues) - バグ報告、機能提案
- [Discussions](https://github.com/your-username/your-repo-name/discussions) - 一般的な質問や議論

## 🙏 謝辞

プロジェクトへの貢献、ありがとうございます！あなたの貢献がhitokiwaレッスン予約システムをより良いものにします。
