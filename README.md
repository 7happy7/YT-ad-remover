# YT-ad-remover
YouTubeの広告の除去、mp3のダウンロードなどを行うChrome拡張です。

# インストール
1. zipファイルをダウンロード（右上の緑色の"↓Code"ボタンをクリック）し、ローカル環境で解凍。
2. フォルダ内の`/js/inject.js`を「プログラムから開く->メモ帳」などで開き、指定されたコードを貼り付けて上書き保存。
3. Chrome拡張に移動。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `(config)` > `その他のツール` > `拡張機能`
4. `デベロッパー モード`を有効化(ページ右上のトグルをクリック)。
5. `パッケージ化されていない拡張機能を読み込む`をクリックし、以下のファイルを選択。

```
YT-ad-remover-master
└── YT-ad-remover-master <-これ!
    ├── assets
    │   ├── y_128.png
    │   ├── y_48.png
    │   └── y_16.png
    ├── js
    │   ├── loader.js
    │   └── remover.js
    ├── .gitignore
    ├── README.md
    └── manifest.json
```
