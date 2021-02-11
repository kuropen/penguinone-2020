---
title: ActivityPubアカウントについて
---
<img src="/siteImages/ActivityPub-logo.svg" alt="ActivityPub">

Kuropenは以下のサーバにActivityPubアカウントを開設しています。

[@krpn@kuropen.me](https://kuropen.me/@krpn)

## ActivityPubとは
「分散型SNS」を実現するための通信規格であり、主に以下のシステムを採用したSNSが採用しています。

※以下以外の分散型SNSにも対応しているものがあります。詳細はお使いのSNSの運営者にご確認ください。

- Mastodon
- Pleroma
- Misskey

## ActivityPubアカウントの利用方法
ActivityPub対応SNSから、上記のアカウントIDに対して「リモートフォロー」操作を行ってください。

（詳細は各SNSシステムのマニュアルを参照してください。）

## Kuropen管理サーバの詳細について
### サーバ環境
プライベートインスタンスであるためインフラは最小限です。

- クラウド環境: AWS 東京リージョン
- アプリケーションサーバ: EC2 t3.micro
- DBサーバ: RDS db.t2.micro
- Redisサーバ: EC2 t3.nano
- ストレージ: S3 （参照用にCloudFront使用）
- DNS: Google Domains （同ドメインで使用しているメール転送サービスの関係）

### システム
Kuropen管理サーバでは、Misskeyをベースにプライベートインスタンスの運営に特化した [Dolphin](https://github.com/syuilo/dolphin) （バージョン 1.4.0）を採用しています。

2021年2月11日現在、ベースからの変更点はございません。なお、GNU AGPL 3.0ライセンスに則り、今後開示すべき変更点が発生した場合は速やかに開示致します。
