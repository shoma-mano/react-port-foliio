import { Box, Stack, Text, VStack, Image, useColorModeValue } from '@chakra-ui/react';
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../pages/_app';
import { ScrollTransition } from '../animation/ScrollTransition';
import { ScrollRightSlideIn } from '../animation/ScrollRightSlideIn';

export const LeftSideHistory = () => {
    const { selectedLanguage } = useContext(AppContext);
    const cardBg = useColorModeValue('white', '#242526');

    const japaneseHistories = [
        {
            time: '2003-2009',
            title: '小学校時代',
            sentence: '全校生徒60人という学校で自然の中に囲まれてのびのびと育つ。',
            height: 310,
            imgSrc: 'gozenyama.png',
            ref: 'elementary_school',
        },
        {
            time: '2012-2015',
            title: '高校時代',
            sentence:
                '第一志望に落ちてしまい、私立の進学校に進学。校内での携帯の使用が禁止されているにも関わらず、携帯の電源を切り忘れてお婆ちゃんから電話がかかってきてしまい反省文を書く事になる。',
            height: 320,
            imgSrc: 'grand_mother.png',
        },
        {
            time: '2019-2020',
            title: '公務員時代',
            sentence:
                '大学で学んだ事の延長を一生やっていく覚悟が無かった為、公務員となる。特別区公務員として主に清掃工場の設備の保守点検を担当。',
            height: 350,
            imgSrc: 'shinkoto.png',
        },
    ];

    const englishHistories = [
        {
            time: '2003-2009',
            title: 'Elementary school days',
            sentence: 'I grew in a school whose number of all students are 60.',
            height: 310,
            imgSrc: 'gozenyama.png',
            ref: 'elementary_school',
        },
        {
            time: '2012-2015',
            title: 'High school days',
            sentence:
                'I entered private preparatory school.It was forbidden to use cell phone in a school, but I forgot turning off my cell phone and My grandmother called me.So I was made to write apology essay.',
            height: 320,
            imgSrc: 'grand_mother.png',
        },
        {
            time: '2019-2020',
            title: '公務員時代',
            sentence:
                '大学で学んだ事の延長を一生やっていく覚悟が無かった為、公務員となる。特別区公務員として主に清掃工場の設備の保守点検を担当。',
            height: 350,
            imgSrc: 'shinkoto.png',
        },
    ];

    const [histories, setHistories] = useState<Array<any>>([]);

    useEffect(() => {
        if (selectedLanguage === 'ja') setHistories(japaneseHistories);
        else setHistories(englishHistories);
    }, [selectedLanguage]);

    return (
        <Box mt={'120px'}>
            <Stack spacing='600px'>
                {histories.map((v, i) => {
                    return (
                        <Box key={v.time}>
                            <ScrollTransition isVisible={i === 0}>
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
                                    bg={cardBg}
                                    mr={'30px'}
                                    px={'15px'}
                                    // ref={el => historyRefs.current![i] = el!}
                                >
                                    {/*dot on center line*/}
                                    <Box
                                        right={'-43px'}
                                        position={'absolute'}
                                        bg={'#9e9e9e'}
                                        mt={v.height ? v.height / 2 - 6 : '39px'}
                                        borderRadius={'50px'}
                                        height={'18px'}
                                        width={'18px'}
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
                                        fontFamily={
                                            selectedLanguage === 'ja'
                                                ? "'Rubik', sans-serif;"
                                                : "'Rubik', sans-serif;"
                                        }
                                        mt={'5px'}
                                        fontSize={'14px'}
                                    >
                                        {v.sentence}
                                    </Text>
                                    <Image src={v.imgSrc} mt={'10px'} borderRadius={'10px'}></Image>
                                </Box>
                            </ScrollTransition>
                            <ScrollRightSlideIn height={v.height} isVisible={i === 0}>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    // color={'#525252'}
                                    fontSize={'39px'}
                                    fontStyle={'italic'}
                                    fontFamily={"'Rubik', sans-serif;"}
                                    top={v.height ? v.height / 2 - 28 + 'px' : '30px'}
                                >
                                    {v.time}
                                </Text>
                            </ScrollRightSlideIn>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
};
