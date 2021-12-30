import { Box, Link, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { languageContext } from '../../pages/_app';

export const RightSideHistory = () => {
    const { selectedLanguage } = useContext(languageContext);

    const histories = [
        {
            time: '2009-2012',
            title: '中学校時代',
            sentence: '地元の進学校に入学。クラスの平均点以下を取ることが普通になり、自分が井の中の蛙だった事に気づく。',
            height:110
        },
        {
            time: '2015-2019',
            title: '大学時代',
            sentence: <span>センター国語で平均点以下を叩き出すが、なんとか千葉大学電気電子工学部に入学。勉強に身が入らず、留年ギリギリで卒業。研究室の同期に<Link>Youtuber</Link>がいる。</span>,
            height:130
        },
    ];



    return (
        <Box mt={'370px'}>
            <Stack  spacing='210px'>
            {histories.map((v) => {
                return (
                        <Box
                            fontFamily={'theme'}
                            border={'solid 1px'}
                            boxShadow={'md'}
                            borderColor={'rgba(0, 0, 0, 0.15)'}
                            width={'300px'}
                            height={v.height ? v.height:'90px'}
                            borderRadius={'10px'}
                            position={'relative'}
                            bg={'white'}
                            ml={'20px !important'}
                            px={'5px'}
                            key={v.time}
                        >
                            {/*dot on center line*/}
                            <Box
                                left={'-29px'}
                                position={'absolute'}
                                bg={'#9e9e9e'}
                                borderRadius={'50px'}
                                height={'12px'}
                                width={'12px'}
                                mt={v.height ? v.height/2-6 : '39px'}
                            ></Box>
                            <Text
                                textAlign={'center'}
                                fontWeight={'600'}
                                color={'#525252'}
                                fontSize={'22px'}
                                marginTop={'3px'}
                                position={'absolute'}
                                right={'260px'}
                                width={'180px'}
                                top={v.height ? v.height/2-15+'px' : '30px'}
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
                                    selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"
                                }
                                mt={'5px'}
                                wordBreak={selectedLanguage === 'ja' ? 'break-all' : 'normal'}
                            >
                                {v.sentence}
                            </Text>
                        </Box>
                );
            })}
            </Stack>
        </Box>
    );
};
