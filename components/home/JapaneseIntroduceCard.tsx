import { Box, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { CherryBlossom } from '../animation/CherryBlossom';
import { ChakraNextImage } from '../ui_parts/ChakraNextImage';
import React from 'react';

export const JapaneseIntroduceCard = ({
    position,
    name,
    englishName,
}: {
    position: string;
    name: string;
    englishName: string;
}) => {
    const bg = useColorModeValue('white', '#242526');
    const width = useBreakpointValue({ base: '90%', sm: '630px' });

    return (
        <>
            <CherryBlossom>
                <Box
                    transition={'all 20ms'}
                    boxShadow={'lg'}
                    w={'100%'}
                    h={'100%'}
                    bg={bg}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Box
                        width={{ base: '100%', sm: '280px' }}
                        height={'100%'}
                        flexShrink={'0'}
                        flexGrow={'1'}
                    >
                        <Box
                            display={'flex'}
                            mt={'10px'}
                            height={'100%'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                mb={'10px'}
                                ml={{ base: '', sm: '0px' }}
                            >
                                <Text
                                    mb={'10px'}
                                    fontWeight={'700'}
                                    fontSize={{ base: '6vw', sm: '24px' }}
                                >
                                    {position}
                                </Text>
                                <Text
                                    fontWeight={'700'}
                                    mt={{ base: '2vw', sm: '0px' }}
                                    fontSize={{ base: '10vw', sm: '48px' }}
                                >
                                    {name}
                                </Text>
                                <Text
                                    fontWeight={'700'}
                                    mt={{ base: '3vw', sm: '8px' }}
                                    fontSize={{ base: '6vw', sm: '26px' }}
                                >
                                    {englishName}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    {/*<Box*/}
                    {/*    marginRight={'10px'}*/}
                    {/*    height={'360px'}*/}
                    {/*    display={'flex'}*/}
                    {/*    justifyContent={'center'}*/}
                    {/*    flexDirection={'column'}*/}
                    {/*>*/}
                    {/*    <ChakraNextImage*/}
                    {/*        display={'flex'}*/}
                    {/*        justifyContent={'center'}*/}
                    {/*        height={'380px'}*/}
                    {/*        minWidth={'50%'}*/}
                    {/*        width={'320px'}*/}
                    {/*        src={'/selfie_home.png'}*/}
                    {/*        filter={'brightness(1.2)'}*/}
                    {/*    ></ChakraNextImage>*/}
                    {/*</Box>*/}
                </Box>
            </CherryBlossom>
        </>
    );
};
