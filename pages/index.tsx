import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Box, Button, Link, Text, Image, Input } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { languageContext } from './_app';
import { JapaneseIntroduceCard } from '../components/home/JapaneseIntroduceCard';
import { RoundIcon } from '../components/ui_parts/RoundIcon';
import { EnglishIntroduceCard } from '../components/home/EnglishIntroduceCard';
import { WaveText } from '../components/animation/WaveText';
import { CherryBlossom } from '../components/animation/CherryBlossom';

const Home: NextPage = () => {
    const { selectedLanguage } = useContext(languageContext);

    const reactContent = () =>
        selectedLanguage === 'ja' ? (
            <Text
                width={'150px'}
                mt={'15px'}
                fontWeight={'600'}
                color={'#121212b8'}
                fontSize={'14px'}
            >
                ポートフォリオのソースコードは
                <Link fontWeight={'900'} color={'black'}>
                    こちら。
                </Link>
            </Text>
        ) : (
            <Text
                width={'200px'}
                mt={'15px'}
                fontWeight={'600'}
                color={'#121212b8'}
                fontSize={'14px'}
                wordBreak={'normal'}
                textAlign={'center'}
            >
                Portforio`&aposs source code is
                <Link fontWeight={'900'} color={'black'}>
                    &nbsp;here.
                </Link>
            </Text>
        );

    const Icons = [
        {
            title: 'React',
            imgSrc: '/skill/react.png',
            padding: 15,
            content: reactContent(),
        },
        {
            title: 'Vue3',
            imgSrc: '/skill/vue.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? 'TypeScript,CompositionAPI,Piniaを用いての実務経験あり。'
                    : 'I used Vue3 with TypeScript, CompositionAPI, and Pinia.',
        },
        {
            title: 'Angular',
            imgSrc: '/skill/angular.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '実務経験あり。JSフレームワークの基礎はAngularで学びました。'
                    : 'I learned basic of JS framework by Angular.',
        },
        {
            title: 'NestJS',
            imgSrc: '/skill/nest.svg',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '個人開発でのTypeORM,GraphQL実装経験あり。'
                    : 'I have used TypeORM and GraphQL in NestJS.',
        },
        {
            title: 'Rails',
            imgSrc: 'skill/rails.png',
            padding: 15,
            sentence: selectedLanguage === 'ja' ? 'Rails6の実務経験あり。' : 'I have used Rails6.',
        },
        {
            title: 'Terraform',
            imgSrc: 'skill/Terraform.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '実務でのECSコード化経験あり'
                    : 'I have deployed ECS using Terraform.',
        },
        {
            title: 'AWS',
            imgSrc: '/skill/aws.png',
            padding: 5,
            sentence:
                selectedLanguage === 'ja'
                    ? 'AWSソリューションアーキテクト保有(ECS,EC2,Lambda,Route53,CodeBuild,CloudFront,S3等の経験あり)'
                    : 'I am AWS Certified Solutions Architect',
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                {selectedLanguage === 'ja' ? (
                    <Box mt={'20px'}>
                        <JapaneseIntroduceCard
                            position={'Webエンジニア'}
                            name={'真野 笑馬'}
                            englishName={'Shoma Mano'}
                        ></JapaneseIntroduceCard>
                    </Box>
                ) : (
                    <EnglishIntroduceCard></EnglishIntroduceCard>
                )}
                <Text
                    fontFamily={"'Rubik', sans-serif;"}
                    mt={'40px'}
                    fontSize={'30px'}
                    fontWeight={'700'}
                >
                    {selectedLanguage === 'ja' ? 'スキル' : 'Skill'}
                </Text>
                <Text
                    fontSize={selectedLanguage === 'ja' ? '15px' : ''}
                    fontFamily={selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"}
                    mt={'10px'}
                >
                    {selectedLanguage === 'ja'
                        ? 'フロント、バックエンド、インフラの経験あり'
                        : 'I have experience in Frontend,Backend, and Infrastructure'}
                </Text>
                <Box
                    mt={'20px'}
                    justifyItems={'center'}
                    width={'70%'}
                    gridGap={'30px'}
                    display={'grid'}
                    gridTemplateColumns={'repeat(auto-fit,minmax(150px,1fr))'}
                >
                    {Icons.map((v) => (
                        <Box
                            key={v.imgSrc}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                        >
                            <Text
                                wordBreak={selectedLanguage === 'ja' ? 'break-all' : 'normal'}
                                fontWeight={'700'}
                                mb={'7px'}
                                textAlign={'center'}
                            >
                                {v.title}
                            </Text>
                            <RoundIcon imgSrc={v.imgSrc} padding={v.padding}></RoundIcon>
                            <Box width={'100%'}>
                                <Text
                                    width={selectedLanguage === 'ja' ? '150px' : '200px'}
                                    textAlign={'center'}
                                    mt={'15px'}
                                    fontWeight={'600'}
                                    color={'#121212b8'}
                                    fontSize={'14px'}
                                    wordBreak={selectedLanguage === 'ja' ? 'break-all' : 'normal'}
                                >
                                    {v.sentence}
                                </Text>
                                {v.content}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </main>
        </div>
    );
};

export default Home;
