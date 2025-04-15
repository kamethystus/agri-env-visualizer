## agri-env-visualizer（センサーデータ可視化システム）

環境センサーデータをRaspberry Piで取得してGoogleスプレッドシートに記録し、
Spring BootのAPI経由でFirebaseに転送、
React + TypeScriptで構築したダッシュボードでグラフ表示するIoTアプリです。

---

### 構成要素

- **データ取得**（Raspberry Pi / Python）  
  Raspberry Pi上で動作するPythonスクリプトにより、センサーデータを取得し、Googleスプレッドシートに一時保存します。

- **データ転送API（sync-api / Spring Boot）**  
  スプレッドシート上のデータをFirebaseに転送するAPIをSpring Bootで構築しています。

- **可視化ダッシュボード（dashboard / React + TypeScript）**  
  Firebaseに保存されたデータをもとに、React + TypeScript + MUIで構築したWeb UIでグラフ表示します。(画面キャプチャ参照)


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

---

### 画面キャプチャ

#### ダッシュボード全体
![Image](https://github.com/user-attachments/assets/573fe833-7235-46d3-a2f5-99f0dd3f9f00)

#### グラフのドットにカーソルを当てると値が表示されます（Rechartsの機能）。
<img width="1676" alt="Image" src="https://github.com/user-attachments/assets/552d7391-ed6c-4608-819d-966358d6bff2" />
