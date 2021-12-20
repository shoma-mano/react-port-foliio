import { Box, Text } from '@chakra-ui/react';
import { CherryBlossom } from "../components/animation/CherryBlossom";

export const JapaneseIntroduceCard = ({
                                          position,
                                          name,
                                          englishName,
                                      }: {
    position: string;
    name: string;
    englishName: string;
}) => {
    return (
        <>
            <CherryBlossom>
                <Box
                    transition={'all 20ms'}
                    borderRadius={'8px'}
                    boxShadow={'lg'}
                    w={'630px'}
                    h={'380px'}
                    bg={'white'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Box width={'280px'} height={'100%'} flexShrink={'0'} flexGrow={'1'}>
                        <Box
                            display={'flex'}
                            mt={'10px'}
                            height={'100%'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                        >
                            <Box mb={'10px'} ml={'60px'}>
                                <Text color={'black'} mb={'10px'} fontWeight={'700'} fontSize={'24px'}>
                                    {position}
                                </Text>
                                <Text fontWeight={'700'} fontSize={'48px'}>
                                    {name}
                                </Text>
                                <Text mt={'8px'} fontSize={'26px'}>{englishName}</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        marginRight={'10px'}
                        height={'380px'}
                        display={'flex'}
                        justifyContent={'end'}
                        flexDirection={'column'}
                    >
                        <img width={'320px'} style={{height: '380px'}} src={'/selfie_home.png'}></img>
                    </Box>
                </Box>
            </CherryBlossom>
        </>
    );
};
