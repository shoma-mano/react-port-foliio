---
title: 'OSSでよく見かけるDict型について'
excerpt: 'OSSのソースなどを読んでるとこんな感じでDict型を指定してる事があります。
これはjavascriptだとエラー起きないのですがtypescriptだとエラーが起きるので、...にする必要があります。ここでRecordを使うとより簡潔に'
coverImage: '/blog/typescript.png'
icon: '/blog/tsicon.png'
date: '2022-01-08'

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

ogImage:
url: '/assets/blog/hello-world/cover.jpg'
---


# Dict型
```typescript
export type Dict<T = any> = Record<string, T>;
```
OSSのソースなどを読んでるとこんな感じでDict型を指定してる事があります。
# Dict型の目的

```javascript
let obj={}
obj.name="Alex" //Property 'name' does not exist on type '{}'
```
これはjavascriptだとエラー起きないのですが、typescriptだとエラーが起きるので、



```typescript
let obj:{[key:string]:string}={}
obj.name="Alex"
```


にする必要があります。ここでRecordを使うとより簡潔に


```typescript
let obj:Record<string,string>={}
obj.name="Alex"
```
とする事ができます。それを更に簡潔にしたのがDict型という感じですね。

参考:[TypeScript Dictionary](https://www.carlrippon.com/typescript-dictionary/)


