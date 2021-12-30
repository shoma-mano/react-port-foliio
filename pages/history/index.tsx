import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Box, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { languageContext } from '../_app';
import { LeftSideHistory } from '../../components/history/LeftSideHistory';
import { RightSideHistory } from '../../components/history/RightSideHistory';

export const Index = () => {
    const { selectedLanguage } = useContext(languageContext);

    return (
        <>
            <main className={styles.main}>
                <Box width={'100%'}>
                    <Box
                        mt={'20px'}
                        fontFamily={'theme'}
                        border={'solid 1px'}
                        boxShadow={'md'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        width={'260px'}
                        height={'100px'}
                        borderRadius={'10px'}
                        position={'relative'}
                        px={'10px'}
                        bg={'white'}
                        ml={'20px'}
                        mx={'auto'}
                    >
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            color={'#000000d4'}
                            fontSize={'23px'}
                            marginTop={'5px'}
                        >
                            経歴
                        </Text>
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            color={'#000000a8'}
                            marginTop={'10px'}
                            fontFamily={
                                selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"
                            }
                            mt={'5px'}
                        >
                            {selectedLanguage === 'ja'
                                ? '1996年、東京都板橋区に生まれるが物心がついた時には何故か茨城の僻地に。'
                                : 'I have experience in Frontend,Backend, and Infrastructure'}
                        </Text>
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
                            height={'1700px'}
                        ></Box>
                        <RightSideHistory></RightSideHistory>
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Index;
