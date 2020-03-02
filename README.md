## Sequelize Association

| Association   | relation | Source  | Target  |
| ------------- | -------- | ------- | ------- |
| BelongsTo     | 1:1      | member  | project |
| HasOne        | 1:1      | user    | task    |
| HasMany       | 1:n      | player  | game    |
| BelongsToMany | 1:n      | employy | company |

Association は 4 種類定義出来ます。それぞれのデータを作成するまでのサンプルコードです。

`Source`と`Target`はサンプルプログラムで定義したテーブル名です。Sequelize は関係の定義で最初に書くのを`Source`次に書くのを`Target`と呼ぶようです。

## Sequelize インストール

```
npm install --save sequelize
npm install --save pg pg-hstore
```

`npm install --save pg pg-hstore`は Postgres をデータベースに利用する場合です。他のデータベースを利用する場合は[ドキュメント](https://sequelize.org/v5/manual/getting-started.html)に従ってください。

## sequelize-cli の利用

sequelize-cli を利用することでテーブル定義のソースを出力してくれます。せっかくなので使います。

**`npx sequelize-cli init`はデータベース接続の config.json や model 定義のディレクトリなど生成されます。ソースをダウンロードして利用する場合、`config/config.json`はソースに含まれていないで該当のファイルを環境に合わせて編集したものを利用してください。**

```
npx sequelize-cli init
npx sequelize-cli model:generate --name user --attributes name:string
npx sequelize-cli model:generate --name task --attributes name:string
npx sequelize-cli model:generate --name member --attributes name:string
npx sequelize-cli model:generate --name project --attributes name:string
npx sequelize-cli model:generate --name player --attributes name:string
npx sequelize-cli model:generate --name game --attributes name:string
npx sequelize-cli model:generate --name employee --attributes name:string
npx sequelize-cli model:generate --name company --attributes name:string
```

`npx sequelize-cli db:migrate`は本来実行することでテータベースにテーブルを作成しますが、今回あえて実行しません。プログラムで`sequelize.sync()`を実行して`foreign key`を自動で作成するようにしました。

ソースをダウンロードして利用する場合、上記のコマンドは実施する必要ありません。

## VSCode でデバッグ

`.vscode`に構成ファイルの定義があります。VSCode で実行する場合、F5 キーでプログラムが起動します。
