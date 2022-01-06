import { Box, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { languageContext } from '../../pages/_app';
import { ScrollTransition } from '../animation/ScrollTransition';
import { ScrollLeftSlideIn } from '../animation/ScrollLeftSlideIn';

export const RightSideHistory = () => {
    const { selectedLanguage } = useContext(languageContext);
    const cardBg = useColorModeValue('white', '#242526');

    const japaneseHistories = [
        {
            time: '2009-2012',
            title: '中学校時代',
            sentence:
                '地元の進学校に入学。クラスの平均点以下を取ることが普通になり、自分が井の中の蛙だった事に気づく。',
            height: 310,
            imgSrc: 'kawazu.png',
        },
        {
            time: '2015-2019',
            title: '大学時代',
            sentence:
                'センター国語で平均点以下を叩き出すが、なんとか千葉大学電気電子工学部に入学。軽音サークルに入り、ギターを弾くという長年の念願を叶える。',
            height: 330,
            imgSrc: 'metallica.png',
        },
        {
            time: '2020-2022',
            title: '現在',
            sentence:
                '新しい技術に触れるのが好きな自分にはITエンジニアが向いていると感じ、転職する。今では、ITエンジニアが自分にとって天職であると考えるほど、楽しく仕事をしている。',
            height: 360,
            imgSrc: 'programmer.png',
        },
    ];

    const englishHistories = [
        {
            time: '2009-2012',
            title: 'Junior high school days',
            sentence:
                'I entered local preparatory school.I met smart people I had never met before, and got stimulated by them.',
            height: 310,
            imgSrc: 'study.png',
        },
        {
            time: '2015-2019',
            title: 'College days',
            sentence:
                'I passed test to enter college I wanted to go.I started playing the guitar, but I realized I liked listening than playing later.',
            height: 330,
            imgSrc: 'metallica.png',
        },
        {
            time: '2020-2022',
            title: 'Now',
            sentence:
                'I felt I was suited to software engineer because I liked to try new tech, and I became software engineer. I enjoy so much that I feel software engineer is an ideal job for me now.',
            height: 360,
            imgSrc: 'programmer.png',
        },
    ];

    const [histories, setHistories] = useState<Array<any>>([]);

    useEffect(() => {
        console.log('effect');
        if (selectedLanguage === 'ja') setHistories(japaneseHistories);
        else setHistories(englishHistories);
    }, [selectedLanguage]);

    return (
        <Box mt={'580px'}>
            <Stack spacing='600px'>
                {histories.map((v) => {
                    return (
                        <Box key={v.time}>
                            <ScrollTransition key={v.time}>
                                <Box
                                    fontFamily={'theme'}
                                    border={'solid 1px'}
                                    boxShadow={'md'}
                                    borderColor={'rgba(0, 0, 0, 0.15)'}
                                    width={'300px'}
                                    height={v.height ? v.height : '90px'}
                                    borderRadius={'10px'}
                                    position={'relative'}
                                    bg={cardBg}
                                    ml={'30px !important'}
                                    px={'15px'}
                                >
                                    {/*dot on center line*/}
                                    <Box
                                        left={'-43px'}
                                        position={'absolute'}
                                        bg={'#9e9e9e'}
                                        borderRadius={'50px'}
                                        height={'18px'}
                                        width={'18px'}
                                        mt={v.height ? v.height / 2 - 6 : '39px'}
                                    ></Box>
                                    <Text
                                        textAlign={'center'}
                                        fontWeight={'600'}
                                        // color={'#000000d4'}
                                        fontSize={'18px'}
                                        marginTop={'10px'}
                                    >
                                        {v.title}
                                    </Text>
                                    <Text
                                        textAlign={'center'}
                                        fontWeight={'600'}
                                        // color={'#000000a8'}
                                        marginTop={'10px'}
                                        fontSize={'15px'}
                                        fontFamily={
                                            selectedLanguage === 'ja'
                                                ? "'Rubik', sans-serif;"
                                                : "'Rubik', sans-serif;"
                                        }
                                        mt={'5px'}
                                        wordBreak={
                                            selectedLanguage === 'ja' ? 'break-all' : 'normal'
                                        }
                                    >
                                        {v.sentence}
                                    </Text>
                                    <Image src={v.imgSrc} mt={'10px'} borderRadius={'10px'}></Image>
                                </Box>
                            </ScrollTransition>
                            <ScrollLeftSlideIn height={v.height}>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    // color={'#525252'}
                                    fontSize={'39px'}
                                    position={'absolute'}
                                    fontStyle={'italic'}
                                    width={'300px'}
                                    fontFamily={"'Rubik', sans-serif;"}
                                >
                                    {v.time}
                                </Text>
                            </ScrollLeftSlideIn>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};
