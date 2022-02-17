import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { EnglishIntroduceCard } from '../../components/home/EnglishIntroduceCard';
import { RoundIcon } from '../../components/ui_parts/RoundIcon';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../_app';
import { JapaneseWorkCard } from '../../components/works/JapaneseWorkCard';

export const Index = () => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('rgb(240 240 245)', '#18191A');
    const cardBg = useColorModeValue('white', '#242526');

    return (
        <>
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
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    {selectedLanguage === 'ja' ? (
                        <Box width={'90%'} maxWidth={'750px'}>
                            <JapaneseWorkCard
                                imgSrc={'works/wedding.png'}
                                position={'Webエンジニア'}
                                name={'真野 笑馬'}
                                englishName={'Shoma Mano'}
                            />
                        </Box>
                    ) : (
                        <EnglishIntroduceCard></EnglishIntroduceCard>
                    )}
                    <Box
                        mt={'50px'}
                        fontFamily={'theme'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        width={'320px'}
                        height={'100px'}
                        borderRadius={'10px'}
                        position={'relative'}
                        bg={cardBg}
                        ml={'20px'}
                        mx={'auto'}
                        px={'10px'}
                    >
                        <Text
                            fontFamily={"'Rubik', sans-serif;"}
                            textAlign={'center'}
                            fontWeight={'600'}
                            fontSize={'28px'}
                            marginTop={'2px'}
                        >
                            {selectedLanguage === 'ja' ? 'スキル' : 'Skill'}
                        </Text>
                        <Text
                            textAlign={'center'}
                            fontSize={selectedLanguage === 'ja' ? '14px' : ''}
                            fontFamily={
                                selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"
                            }
                            mt={'3px'}
                        >
                            {selectedLanguage === 'ja'
                                ? 'フロントからバックエンド、インフラまでの経験あり(現在はフロントが中心）'
                                : 'I have experience in Frontend,Backend, and Infrastructure'}
                        </Text>
                    </Box>
                    <Box
                        width={'70%'}
                        gridGap={'30px'}
                        display={'grid'}
                        margin={'auto'}
                        mt={'35px'}
                        gridTemplateColumns={'repeat(auto-fit,minmax(200px,1fr))'}
                    ></Box>
                </Box>
            </Box>
        </>
    );
};

export default Index;
