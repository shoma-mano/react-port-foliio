真野 笑馬（マノ　ショウマ)のポートフォリオです。
https://shoma-mano.com

# 使用技術

## JSフレームワーク(ライブラリ) - React
Reactを使うのは初めてだったのですが、AngularとVueの経験があり、リアクティブな値は値が変わると新旧の仮想DOMを比較し、変更があった場合は再レンダリングする
という概念は理解していた為、学習に殆ど時間はかかりませんでした。
特にVue3のCompositionAPIでは、関数によってリアクティブな値を生成する為、ref=>useStateのように、置き換えて考えることが出来たのが大きかったです。
Vue3でもuse〇〇〇〇といった名前のついたライブラリの関数の返り値はリアクティブな値の為、hooksの考えにもすぐに馴染むことができました。
また、どのような条件でuseStateは再レンダリングするのかという疑問から、JSのイミュータビリティについての理解も以前より若干は深まったと思います。

## Reactフレームワーク - Next.js(create-next-app)
プロジェクト作成にはcreate-next-appを使用しました。ルーティング、getStaticPaths、getStaticPropsなど、NextJS特有の知識に関しては、
公式のドキュメントやリポジトリを参考に学習しました。

## UIフレームワーク - ChakraUI
Tailwind CSSでのスタイリングに慣れていた為、UIフレームワークにはChakraUIを使用しました。

## 状態管理 - Context API
状態管理にはライブラリを使用せず、Context APIを使用したものの、ReactではJotai、VueではPiniaなどの状態管理ライブラリの使用経験があります。

## マークダウンパーサー - zenn-markdown-html
Blogページの実装にはzenn-markdown-htmlを使用しました。

## その他 - TypeScript,ESLint,Prettier


