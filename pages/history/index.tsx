import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Box, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { languageContext } from '../_app';
import { LeftSideHistory } from "../../components/history/LeftSideHistory";
import { RightSideHistory } from "../../components/history/RightSideHistory";

export const Index = () => {
    const {selectedLanguage} = useContext(languageContext);

    return (
        <>
            <main className={styles.main}>
                <Box width={'100%'}>
                    {/*title*/}
                    {/*<Text*/}
                    {/*    textAlign={'center'}*/}
                    {/*    fontWeight={'700'}*/}
                    {/*    fontFamily={"'Rubik', sans-serif;"}*/}
                    {/*    mt={'20px'}*/}
                    {/*    fontSize={'30px'}*/}
                    {/*>*/}
                    {/*    {selectedLanguage === 'ja' ? '経歴' : 'History'}*/}
                    {/*</Text>*/}

                        <Box
                            mt={"20px"}
                            fontFamily={'theme'}
                            border={'solid 1px'}
                            boxShadow={'md'}
                            borderColor={'rgba(0, 0, 0, 0.15)'}
                            width={'240px'}
                            height={'60px'}
                            borderRadius={'10px'}
                            position={'relative'}
                            bg={'white'}
                            ml={'20px'}
                            mx={"auto"}
                        >
                            <Text
                                textAlign={'center'}
                                fontWeight={'600'}
                                color={'#000000d4'}
                                fontSize={'20px'}
                                marginTop={"10px"}
                            >
                                経歴
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
                            border={'solid #9e9e9e 2px'}
                            borderRadius={'10px'}
                            height={'500px'}
                        ></Box>
                        <RightSideHistory></RightSideHistory>
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Index;
