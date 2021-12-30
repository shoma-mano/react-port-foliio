import { Box, Stack, Text, VStack, Image } from '@chakra-ui/react';
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { languageContext } from '../../pages/_app';
import { ScrollTransition } from "./ScrollTransition";

export const LeftSideHistory = () => {
    const {selectedLanguage} = useContext(languageContext);
    const histories = [
        {
            time: '2003-2009',
            title: '小学校時代',
            sentence: '全校生徒60人という学校で自然の中に囲まれてのびのびと育つ。',
            height: 310,
            imgSrc: "gozenyama.png",
            ref: "elementary_school"
        },
        {
            time: '2012-2015',
            title: '高校時代',
            sentence: '第一志望に落ちてしまい、私立の進学校に進学。校内での携帯の使用が禁止されているにも関わらず、携帯の電源を切り忘れてお婆ちゃんから電話がかかってきてしまい反省文を書く事になる。',
            height: 320,
            imgSrc: "grand_mother.png"
        },
    ];

    // const historyRefs = useRef<HTMLDivElement[]>([]);
    //
    // useEffect(() => {
    //     setTimeout(() => historyRefs.current![0].style.opacity = "1", 0)
    // })

    return (
        <Box mt={'100px'}>
            <Stack spacing='420px'>
                {histories.map((v, i) => {
                    return (
                        <ScrollTransition
                            key={v.time}
                            isVisible={i===0}
                        >
                            <Box
                                key={v.time}
                                fontFamily={'theme'}
                                border={'solid 1px'}
                                boxShadow={'md'}
                                borderColor={'rgba(0, 0, 0, 0.15)'}
                                width={'300px'}
                                height={v.height ? v.height : '90px'}
                                borderRadius={'10px'}
                                position={'relative'}
                                bg={'white'}
                                mr={'30px'}
                                px={'15px'}
                                // ref={el => historyRefs.current![i] = el!}
                            >
                                {/*dot on center line*/}
                                <Box
                                    right={'-39px'}
                                    position={'absolute'}
                                    bg={'#9e9e9e'}
                                    mt={v.height ? v.height / 2 - 6 : '39px'}
                                    borderRadius={'50px'}
                                    height={'12px'}
                                    width={'12px'}
                                ></Box>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    color={'#525252'}
                                    fontSize={'45px'}
                                    position={'absolute'}
                                    left={'350px'}
                                    width={'270px'}
                                    fontStyle={'italic'}
                                    top={v.height ? v.height / 2 - 28 + 'px' : '30px'}
                                >
                                    {v.time}
                                </Text>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    color={'#000000d4'}
                                    fontSize={'18px'}
                                    marginTop={'10px'}

                                >
                                    {v.title}
                                </Text>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    color={'#000000a8'}
                                    marginTop={'10px'}
                                    fontFamily={
                                        selectedLanguage === 'ja' ? "'Rubik', sans-serif;" : "'Rubik', sans-serif;"
                                    }
                                    mt={'5px'}
                                    fontSize={"14px"}
                                >
                                    {v.sentence}
                                </Text>
                                <Image
                                    src={v.imgSrc}
                                    mt={"10px"}
                                    borderRadius={"10px"}
                                ></Image>
                            </Box>
                        </ScrollTransition>
                )
                    ;
                })}
                    </Stack>
                    </Box>
                    );
                };
