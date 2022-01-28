---
title: 'FARGATEのコンテナにdocker execする【既にECSを使用している方向け】'
excerpt: '既にECSを使用していてdocker execしたいコンテナがある方向けの記事です。まず、AWSCLIのバージョンが１の方は更新が必要です。'
coverImage: '/blog/aws.png'
icon: '/blog/awsicon.png'
date: '2021-03-16'
refresh: '2021-03-16'
author:
  name: Joe Haddad
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

#　1.AWSCLIの更新(AWSCLIのバージョンが１の場合)

```shell:macOS
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```
macOS以外の更新方法は

https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html

# 2.SSM(SessionManagerPlugin)をインストール

```shell:macOS
curl "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac/session-manager-plugin.pkg" -o "session-manager-plugin.pkg" &&
sudo installer -pkg session-manager-plugin.pkg -target /
ln -s /usr/local/sessionmanagerplugin/bin/session-manager-plugin /usr/local/bin/session-manager-plugin
```

macOS以外のインストール方法は

https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html#install-plugin-macos-signed

# 3.既存のECSサービスのenable-excute-commandを有効にする
2021/8/2現在、AWSコンソール上からは有効にできないため、AWSCLIを使用します。

```shell:
aws ecs update-service \
    --cluster example-cluster \
    --service example-service \
    --enable-execute-command
```

ちなみに、terraformを使用している方は、リソース「aws_ecs_service」のenable_execute_commandをtrueにするだけです。

# 4.AWSCLIからFARGATEのコンテナにアクセスする
以下のコマンドでコンテナにアクセスします。

```shell
aws ecs execute-command  \
    --region $AWS_REGION \
    --cluster ecs-exec-example-cluster \
    --task ef6260ed8aab49cf926667ab0c52c313 \
    --container example-container \
    --command "/bin/bash" \
    --interactive
```
region名、cluster名などは、適宜修正が必要です。

## 【補足】　An error occurred (TargetNotConnectedException) when calling the ExecuteCommand operation: The execute command failed due to an internal error. Try again later.

時間を置いて試してもエラーが解決するわけもなく、ECSのタスクロールにSSM関連の権限を与えて、タスクを再起動することで解決しました。同じエラーが出た方の助けになると幸いです。