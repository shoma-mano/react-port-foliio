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
                alignItems={'center'}
                justifyContent={'start'}
                marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                marginTop={{ base: '50px', sm: '0px', md: '0px' }}
                py={'10px'}
                flexDirection={'column'}
            >
                <Text
                    fontFamily={"'Rubik', sans-serif;"}
                    textAlign={'center'}
                    fontSize={'30px'}
                    fontWeight={'700'}
                    mt={'20px'}
                    width={'100%'}
                >
                    WORKS
                </Text>
                <Box mt={'30px'} display={'flex'} width={'80%'} justifyContent={'space-evenly'}>
                    <Box
                        p={'10px'}
                        bg={'white'}
                        width={'150px'}
                        fontFamily={"'Rubik', sans-serif;"}
                        borderRadius={'5px'}
                        border={'#00000059 1px solid'}
                        fontWeight={'bold'}
                        boxShadow={'md'}
                    >
                        <Text>Company Project</Text>
                    </Box>
                    <Box
                        justifyContent={'center'}
                        boxShadow={'md'}
                        p={'10px'}
                        width={'150px'}
                        fontFamily={"'Rubik', sans-serif;"}
                        borderRadius={'5px'}
                        border={'1px solid'}
                    >
                        <Text textAlign={'center'}>Private Project</Text>
                    </Box>
                </Box>
                <Box
                    mt={'25px'}
                    bg={bg}
                    ml={{ base: '0px', sm: '0px' }}
                    width={'100%'}
                    py={'20px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    {selectedLanguage === 'ja' ? (
                        <Box width={'92%'} maxWidth={'830px'}>
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
