---
title: '【祝公式化！🌸】PiniaがVue.js公式の推奨ライブラリとなりました！'
excerpt: 'Vuejsの推奨状態管理ライブラリがPiniaになりました。早速Piniaを試してみたいと思います。npm init vue@nextで作成されるフォイルを覗いてみましょう'
coverImage: '/blog/pinia.png'
icon: '/blog/piniaicon.png'
date: '2021-012-16'




english: '
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## This is English article

```javascript:test

console.log("test")

console.log("test")

```

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
'



author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

# Piniaが公式の仲間入りへ!

@[tweet](https://twitter.com/posva/status/1471381656351223811?s=20)

# Vuejsの推奨状態管理ライブラリがPiniaに！
@[tweet](https://twitter.com/VueDose/status/1463169464451706897?s=20)



# 早速Piniaを試してみる
npm init vue@nextで作成されるフォイルを覗いてみましょう
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/659469/afa9a283-ea42-10b9-0b0c-b48be2324b14.png)
Piniaを使用するか聞かれるのでYesにします。
フォルダ構成（一部抜粋）
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/659469/d5f9cf30-fd3c-0ce2-54f0-561199e6463f.png)



## main.ts

```typescript:main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

既にPiniaを使用する為のセットアップが完了しています。

## counter.ts

```typescript:counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
```
ここでStoreの定義、状態を取得する為のgettersと状態を操作する為のactionsが定義がされています。Storeはいくつでも作成できますが、idは一意である必要があります。


## App.vue（一部抜粋）

```vue:App.vue
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>

  <router-view />
</template>
```

\<script\>タグのデフォルトが\<script setup>となっています。
基本的にはCompositionAPIと変わらないのですが、\<script setup>を使うと、コンポーネントをimportするだけで使用できるようになるのと、refやreactiveで宣言したリアクティブな値をreturnせずにテンプレート内で使用することができ、コードの見通しが良くなります。只、親コンポーネントから子コンポーネントのインスタンスを参照する時に、子コンポーネント側でdefineExposeをする必要があったり、propsやemitの定義にはdefinePropsやdefineEmitsを使用する必要があります。詳しくは公式ドキュメントをどうぞ。

https://v3.vuejs.org/api/sfc-script-setup.html

# 本題

HelloWorld.vue を書き換えます。

```vue:HelloWorld.vue
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const {counter,doubleCount,increment}=useCounterStore()
</script>

<template>
    <h1 class="green">-doubleCount-{{counterStore.doubleCount}}</h1>
    <button @click="counterStore.increment">カウント増加</button>
</template>

```

## 結果
期待通り動いています！
![pinia.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/659469/08186229-df2e-30c2-be15-3610af2bf789.gif)

# まとめ
Piniaでの状態管理はとても簡単です。只、デフォルトのstoreの定義の仕方だと、TypeScriptの恩恵を受けるためにasを使って型アサーションしなければならなかったりするのですが、CompositiionAPIを使うことで、よりシンプルにstoreを定義でき、TypeScriptの恩恵も受けやすくなります。

```typescript:store.ts
export const useCartStore = defineStore('cart', () => {

    const cart = ref<Item[]>([])

    //getters
    const getCartItems = () => cart.value

    const getTotalFee = () => cart.value.reduce((sum, item) => sum + item.price, 0)

    //setters
    const addItemToCart = (item: Item) => cart.value.push(item)

    return {
        getCartItems,
        getTotalFee,
        addItemToCart
    }
})
```