import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Box, Link, Text, Image, useColorModeValue, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../_app';
import { LeftSideHistory } from '../../components/history/LeftSideHistory';
import { RightSideHistory } from '../../components/history/RightSideHistory';

export const Index = () => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('white', '#18191A');
    const cardBg = useColorModeValue('white', '#242526');

    return (
        <>
            <Box
                minHeight={'100vh'}
                width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                display={'flex'}
                justifyContent={'start'}
                marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                marginTop={{ base: '100px', sm: '0px', md: '0px' }}
            >
                <Box width={'100%'} pb={'15px'} bg={bg} overflow={'hidden'}>
                    <Box
                        mt={'20px'}
                        fontFamily={'theme'}
                        border={'solid 1px'}
                        boxShadow={'md'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        width={'260px'}
                        height={'140px'}
                        borderRadius={'10px'}
                        position={'relative'}
                        px={'10px'}
                        bg={cardBg}
                        ml={'20px'}
                        mx={'auto'}
                    >
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            // color={'#000000d4'}
                            fontSize={'23px'}
                            marginTop={'5px'}
                        >
                            {selectedLanguage === 'ja' ? '経歴' : 'History'}
                        </Text>
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            // color={'#000000a8'}
                            marginTop={'10px'}
                            fontFamily={"'Rubik', sans-serif;"}
                            mt={'5px'}
                            fontSize={'14px'}
                        >
                            {selectedLanguage === 'ja'
                                ? '1996年、東京都板橋区に生まれるが物心がついた時には何故か茨城の僻地にいて、高校時代までを過ごす事になる。'
                                : 'Born in tokyo in 1996, but I was already in a remote village when I understood what was going on around myself.'}
                        </Text>
                        <Image></Image>
                    </Box>
                    {/*history_content*/}
                    <Box
                        width={'100%'}
                        marginTop={'10px'}
                        justifyContent={'center'}
                        display={'flex'}
                    >
                        <LeftSideHistory></LeftSideHistory>
                        <Box
                            border={'solid #9e9e9e 3px'}
                            borderRadius={'10px'}
                            height={'2850px'}
                        ></Box>
                        <RightSideHistory></RightSideHistory>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Index;
