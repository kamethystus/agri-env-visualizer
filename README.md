## agri-env-visualizer（センサーデータ可視化システム）

環境センサーデータをRaspberry Piで取得してGoogleスプレッドシートに記録し、
Spring BootのAPI経由でFirebaseに転送、
React + TypeScriptで構築したダッシュボードでグラフ表示するIoTアプリです。

---

### 構成要素

- **データ取得**：Raspberry Pi上のPythonスクリプトでセンサーデータを取得し、Googleスプレッドシートに一時保存
- **データ転送API (sync-api)**：Spring Bootで構築したREST APIにより、GoogleスプレッドシートからFirebaseへデータを転送
- **可視化ダッシュボード (dashboard)**：Firebase上のデータをReact + TypeScript + MUIで構築したUIで表示

---

### 特徴

- ダッシュボードは温度・湿度・照度・水位のセンサーデータを1時間単位でグラフ表示
- 単一責任の原則を意識したAPI設計
- Firebaseによるスケーラブルなバックエンド
- Raspberry Piを省エネ運用するために、データ取得と転送を分離

---

### 使用技術

| 分類         | 技術構成                                        |
|--------------|-------------------------------------------------|
| デバイス制御 | Python / I2C通信 / Raspberry Pi                  |
| バックエンド | Spring Boot / REST API / Firebase                |
| フロント     | React / TypeScript / MUI / Recharts             |
| データ連携   | Google Sheets API / gspread                     |
| その他       | dayjs / schedule                               |

---

### 実行について

本アプリはセンサーやクラウド認証が必要なため、**完全な環境再現はできません**。

#### 再現が困難な理由

- センサーやRaspberry Piなどの物理デバイスが必要です。
- セキュリティのため、FirebaseやGoogle SheetsのAPIキー・認証ファイルを非公開にしています。
