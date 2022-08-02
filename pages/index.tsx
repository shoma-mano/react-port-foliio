import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
    Box,
    Button,
    Link,
    Text,
    Image,
    Input,
    useColorModeValue,
    Badge,
    Icon,
    useColorMode,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './_app';
import { JapaneseIntroduceCard } from '../components/home/JapaneseIntroduceCard';
import { RoundIcon } from '../components/ui_parts/RoundIcon';
import { EnglishIntroduceCard } from '../components/home/EnglishIntroduceCard';
import * as React from 'react';
import { Border } from '../components/ui_parts/Border';
import { GitHubIcon } from '../components/ui_parts/icon/GitHubIcon';
import { SkillHeading } from '../components/home/SkillHeading';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('#fafafa', '#18191A');
    const cardBg = useColorModeValue('white', '#242526');
    const router = useRouter();

    const reactContent = () =>
        selectedLanguage === 'ja' ? (
            <>
                <Text width={'180px'} mt={'15px'} mx={'auto'} fontWeight={'600'} fontSize={'14px'}>
                    ポートフォリオのソースコードはこちらです。
                </Text>
                <Button
                    width={'fit-content'}
                    d={'flex'}
                    mx={'auto'}
                    mt={'10px'}
                    py={'0px'}
                    justifyContent={'center'}
                    onClick={() => {
                        window.location.href = 'https://github.com/shoma-mano/reactPortFolio';
                    }}
                >
                    <GitHubIcon />
                    <Text ml={'3px'} fontFamily={"'Rubik', sans-serif;"}>
                        GitHub
                    </Text>
                </Button>
            </>
        ) : (
            <Text
                width={'180px'}
                mt={'15px'}
                mx={'auto'}
                fontWeight={'600'}
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
                    ? 'TypeScript,CompositionAPI,Piniaを用いての実務経験があります。'
                    : 'I used Vue3 with TypeScript, CompositionAPI, and Pinia.',
        },
        {
            title: 'Angular',
            imgSrc: '/skill/angular.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '個人開発を通してJSフレームワークの基礎をAngularで学びました。'
                    : 'I learned basic of JS framework by Angular.',
        },
        {
            title: 'NestJS',
            imgSrc: '/skill/nest.svg',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '実務でPrismaを用いてREST API,GraphQLを実装した経験があります。'
                    : 'I have used TypeORM and GraphQL in NestJS.',
        },
        {
            title: 'Rails',
            imgSrc: 'skill/rails.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja' ? 'Rails6の実務経験があります。' : 'I have used Rails6.',
        },
        {
            title: 'Terraform',
            imgSrc: 'skill/Terraform.png',
            padding: 15,
            sentence:
                selectedLanguage === 'ja'
                    ? '実務でのAWSのコード化経験があります。'
                    : 'I have deployed ECS using Terraform.',
        },
        {
            title: 'AWS',
            imgSrc: '/skill/aws.png',
            padding: 5,
            sentence:
                selectedLanguage === 'ja'
                    ? 'SAAを保有しています。(ECS,EC2,Lambda,Route53,CodeBuild,CloudFront,S3等の実務経験があります。)'
                    : 'I am AWS Certified Solutions Architect',
        },
    ];

    const otherPages = [
        {
            title: 'BLOG',
            sentence: 'フロントエンドからインフラまで全般的に取り扱った技術記事です。',
            link: '/blog',
        },
        {
            title: 'HISTORY',
            sentence: '自分の半生を振り返ったページです。',
            link: '/history',
        },
        {
            title: 'WORKS',
            sentence: '今まで制作してきたプロダクト集です。',
            link: '/works',
        },
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>shoma-mano-portfolio</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />

            </Head>
            <Box
                minHeight={'100vh'}
                width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                display={'flex'}
                justifyContent={'start'}
                marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                marginTop={{ base: '50px', sm: '0px', md: '0px' }}
            >
                <Box
                    bg={bg}
                    ml={{ base: '0px', sm: '0px' }}
                    width={'100%'}
                    py={'20px'}
                    pb={'70px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    {selectedLanguage === 'ja' ? (
                        <JapaneseIntroduceCard
                            position={'Webエンジニア'}
                            name={'真野 笑馬'}
                            englishName={'Shoma Mano'}
                        />
                    ) : (
                        <EnglishIntroduceCard />
                    )}
                    <SkillHeading />
                    <Box
                        width={'70%'}
                        gridGap={'30px'}
                        display={'grid'}
                        margin={'auto'}
                        mt={'35px'}
                        gridTemplateColumns={'repeat(auto-fit,minmax(200px,1fr))'}
                    >
                        {Icons.map((v) => (
                            <Box
                                key={v.imgSrc}
                                display={'flex'}
                                flexDirection={'column'}
                                border={'solid 1px #0000001f'}
                                borderRadius={'8px'}
                                bg={cardBg}
                                alignItems={'center'}
                                py={'13px'}
                                px={'10px'}
                            >
                                <Text
                                    wordBreak={selectedLanguage === 'ja' ? 'break-all' : 'normal'}
                                    fontWeight={'700'}
                                    mb={'7px'}
                                    textAlign={'center'}
                                >
                                    {v.title}
                                </Text>
                                <RoundIcon imgSrc={v.imgSrc} padding={v.padding} />
                                <Box m={'auto'} width={'100%'}>
                                    <Text
                                        width={selectedLanguage === 'ja' ? '180px' : '200px'}
                                        textAlign={'center'}
                                        mt={'15px'}
                                        mx={'auto'}
                                        fontWeight={'600'}
                                        fontSize={'14px'}
                                        wordBreak={
                                            selectedLanguage === 'ja' ? 'break-all' : 'normal'
                                        }
                                    >
                                        {v.sentence}
                                    </Text>
                                    {v.content}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Border mt={'60px'} width={'80%'} />
                    <Text
                        mt={'30px'}
                        textAlign={'center'}
                        fontWeight={'600'}
                        fontSize={'30px'}
                        fontFamily={"'Rubik', sans-serif;"}
                    >
                        Other Pages
                    </Text>
                    <Box
                        px={'10px'}
                        mt={'30px'}
                        display={'grid'}
                        width={'80%'}
                        justifyContent={'space-evenly'}
                        gridTemplateColumns={'repeat(auto-fit,minmax(200px,1fr))'}
                        gridGap={'20px'}
                    >
                        {otherPages.map((page, i) => (
                            <Box
                                p={'20px'}
                                alignSelf={'center'}
                                borderRadius={'10px'}
                                key={i}
                                boxShadow={'md'}
                                bg={'white'}
                                width={'100%'}
                                minHeight={'160px'}
                                cursor={'pointer'}
                                onClick={() => {
                                    router.push(page.link);
                                }}
                            >
                                <Text
                                    mb={'10px'}
                                    color={'black'}
                                    fontSize={'25px'}
                                    fontWeight={'bold'}
                                >
                                    {page.title}
                                </Text>
                                <Text>{page.sentence}</Text>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
