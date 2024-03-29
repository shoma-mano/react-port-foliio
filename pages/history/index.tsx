import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import {
    Box,
    Link,
    Text,
    Image,
    useColorModeValue,
    Input,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../_app';
import { LeftSideHistory } from '../../components/history/LeftSideHistory';
import { RightSideHistory } from '../../components/history/RightSideHistory';
import { HistorySm } from '../../components/history/HistorySm';
import * as React from 'react';

export const Index = () => {
    const { selectedLanguage } = useContext(AppContext);
    const bg = useColorModeValue('#fafafa', '#18191A');
    const cardBg = useColorModeValue('white', '#242526');

    const content = useBreakpointValue({
        base: (
            <>
                <Box
                    minHeight={'100vh'}
                    width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                    marginTop={{ base: '60px', sm: '0px', md: '0px' }}
                >
                    <Box
                        mt={'20px'}
                        fontFamily={'theme'}
                        border={'solid 1px'}
                        boxShadow={'md'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        width={'260px'}
                        height={'140px'}
                        borderRadius={'10px'}
                        px={'10px'}
                        bg={cardBg}
                        mx={'auto'}
                    >
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
                    </Box>
                    <HistorySm></HistorySm>
                </Box>
            </>
        ),
        sm: (
            <>
                <Box
                    minHeight={'100vh'}
                    width={{ base: '100vw', sm: 'calc(100vw - 100px)', md: 'calc(100vw - 390px)' }}
                    display={'flex'}
                    justifyContent={'start'}
                    marginLeft={{ base: '0px', sm: '0px', md: '290px' }}
                    marginTop={{ base: '60px', sm: '0px', md: '0px' }}
                >
                    <Box width={'100%'} pb={'15px'} bg={bg} overflow={'hidden'}>
                        <Text
                            fontFamily={"'Rubik', sans-serif;"}
                            textAlign={'center'}
                            fontSize={'38px'}
                            fontWeight={'700'}
                            mt={'15px'}
                        >
                            HISTORY
                        </Text>
                        <Box
                            mt={'20px'}
                            fontFamily={'theme'}
                            border={'solid 1px'}
                            boxShadow={'md'}
                            borderColor={'rgba(0, 0, 0, 0.15)'}
                            width={'260px'}
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
                                marginTop={'10px'}
                                fontFamily={"'Rubik', sans-serif;"}
                                mt={'5px'}
                                fontSize={'14px'}
                            >
                                {selectedLanguage === 'ja'
                                    ? '1996年、東京都板橋区に生まれるが物心がついた時には何故か茨城の僻地にいて、高校時代までを過ごす事になる。'
                                    : 'Born in tokyo in 1996, but I was already in a remote village when I understood what was going on around myself.'}
                            </Text>
                        </Box>
                        <Box
                            width={'100%'}
                            marginTop={'10px'}
                            justifyContent={'center'}
                            display={'flex'}
                        >
                            <LeftSideHistory />
                            <Box
                                border={'solid #9e9e9e 3px'}
                                borderRadius={'10px'}
                                height={'2850px'}
                            />
                            <RightSideHistory />
                        </Box>
                    </Box>
                </Box>
            </>
        ),
    });

    return <>{content}</>;
};

export default Index;
