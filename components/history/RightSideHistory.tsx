import { Box, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { languageContext } from '../../pages/_app';
import { ScrollTransition } from '../animation/ScrollTransition';

export const RightSideHistory = () => {
    const { selectedLanguage } = useContext(languageContext);

    const histories = [
        {
            time: '2009-2012',
            title: '中学校時代',
            sentence:
                '地元の進学校に入学。クラスの平均点以下を取ることが普通になり、自分が井の中の蛙だった事に気づく。',
            height: 310,
            imgSrc: 'kawazu.png',
        },
        {
            time: '2015-2019',
            title: '大学時代',
            sentence: (
                <span>
                    センター国語で平均点以下を叩き出すが、なんとか千葉大学電気電子工学部に入学。軽音サークルに入り、ずっとやりたかったギターをやる。
                </span>
            ),
            height: 330,
            imgSrc: 'metallica.png',
        },
    ];

    return (
        <Box mt={'580px'}>
            <Stack spacing='500px'>
                {histories.map((v) => {
                    return (
                        <ScrollTransition key={v.time}>
                            <Box
                                fontFamily={'theme'}
                                border={'solid 1px'}
                                boxShadow={'md'}
                                borderColor={'rgba(0, 0, 0, 0.15)'}
                                width={'300px'}
                                height={v.height ? v.height : '90px'}
                                borderRadius={'10px'}
                                position={'relative'}
                                bg={'white'}
                                ml={'30px !important'}
                                px={'15px'}
                                key={v.time}
                            >
                                {/*dot on center line*/}
                                <Box
                                    left={'-43px'}
                                    position={'absolute'}
                                    bg={'#9e9e9e'}
                                    borderRadius={'50px'}
                                    height={'18px'}
                                    width={'18px'}
                                    mt={v.height ? v.height / 2 - 6 : '39px'}
                                ></Box>
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'600'}
                                    color={'#525252'}
                                    fontSize={'39px'}
                                    position={'absolute'}
                                    right={'350px'}
                                    width={'270px'}
                                    fontStyle={'italic'}
                                    fontFamily={"'Rubik', sans-serif;"}
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
                                    fontSize={'15px'}
                                    fontFamily={
                                        selectedLanguage === 'ja'
                                            ? "'Rubik', sans-serif;"
                                            : "'Rubik', sans-serif;"
                                    }
                                    mt={'5px'}
                                    wordBreak={selectedLanguage === 'ja' ? 'break-all' : 'normal'}
                                >
                                    {v.sentence}
                                </Text>
                                <Image src={v.imgSrc} mt={'10px'} borderRadius={'10px'}></Image>
                            </Box>
                        </ScrollTransition>
                    );
                })}
            </Stack>
        </Box>
    );
};
