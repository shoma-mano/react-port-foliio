import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { MyComponent } from '../mycomponent';
import { Box, Link,Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from "react";
import { languageContext } from "../_app";

export const Index = () => {
    const {selectedLanguage} = useContext(languageContext);

    return (
        <>
            <main className={styles.main}>
                <Box width={"100%"}>
                    <Text textAlign={"center"} fontWeight={'700'} fontFamily={"'Rubik', sans-serif;"} mt={"20px"} fontSize={"30px"}>{selectedLanguage==='ja'?'経歴':'History'}</Text>
                    <Box　width={"100%"} marginTop={"10px"} justifyContent={"center"} display={"flex"}>
                        <Box>
                            <Box border={"solid 1px"} boxShadow={"md"} borderColor={"rgba(0, 0, 0, 0.15)"} width={"240px"} height={"120px"} borderRadius={"10px"} position={"relative"} bg={"white"} mr={"20px"}>
                                <Text textAlign={"center"}  height={"50%"}>2012-2015</Text>
                                <Box right={"-27px"} position={"absolute"} bg={"black"} borderRadius={"50px"} height={"10px"} width={"10px"}></Box>
                                <Text height={"50%"}>水城高等</Text>
                            </Box>
                        </Box>
                        <Box border={"solid #00000094 1px"} height={"500px"}></Box>
                        <Box>
                            <Box boxShadow={"lg"} width={"240px"} height={"100px"} ml={'20px'} borderRadius={"10px"} position={"relative"} bg={"white"} mr={"20px"}>
                                <Text height={"50%"}>2012-2015</Text>
                                <Box right={"-26px"} position={"absolute"} bg={"black"} borderRadius={"50px"} height={"10px"} width={"10px"}></Box>
                                <Text height={"50%"}>水城高等</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Index;
