---
title: '【TypeScript基礎】既存のオブジェクトの値を利用して別の型のオブジェクトを生成する方法'
excerpt: '-問題-この状況でHuman型のオブジェクトを利用して、ProfileCard型のオブジェクトを生成したいときはどうするべきか？'
coverImage: 'blog/typescript.png'
icon: '/blog/tsicon.png'
date: '2021-12-15'
---
# 問題
この状況でHuman型のオブジェクトを利用して、ProfileCard型のオブジェクトを生成したいときはどうするべきか？

```typescript:
interface Human {
    name: string;
    age: number;
}

interface ProfileCard {
    nickname: string;
    sentence: string;
    name: string;
    age: number;
}

const alexander: Human={
    name:"Alexander",
    age:27
}

const alexProfileCard:ProfileCard={}
```

## 答.　スプレッド演算子を利用する

```typescript
const profileCard: ProfileCard={
    ...alexander,
    nickname:"alex",
    sentence:"Nice to meet you!"
}
```