import {
    AspectRatio,
    Box,
    Image,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { WaveText } from '../animation/WaveText';

export const EnglishIntroduceCard = () => {
    const bg = useColorModeValue('white', '#242526');

    const waveTextFontSize = useBreakpointValue({ base: 'calc(3vw + 2px)', sm: '20px' });

    return (
        <>
            <AspectRatio
                w={{ base: '82%', sm: '630px' }}
                h={{ base: '', sm: '360px' }}
                maxHeight={'360px'}
            >
                <Box
                    transition={'all 20ms'}
                    borderRadius={'6px'}
                    boxShadow={'lg'}
                    w={'100%'}
                    h={'100%'}
                    bg={bg}
                    display={'flex'}
                    alignItems={'flex-start !important'}
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
                            height={'100%'}
                            flexDirection={'column'}
                            width={'100%'}
                            marginLeft={{ base: '0', sm: '40px' }}
                            mt={{ base: '0', sm: '0%' }}
                            fontFamily={"'Rubik', sans-serif;"}
                            textAlign={'center'}
                            justifyContent={'center'}
                        >
                            <Text fontWeight={'700'} fontSize={{ base: '7vw', sm: '35px' }}>
                                I&apos;m Shoma Mano,
                            </Text>
                            <Text
                                mt={'4%'}
                                fontWeight={'700'}
                                fontSize={{ base: '7vw', sm: '35px' }}
                            >
                                Software
                            </Text>
                            <Text
                                mt={'4%'}
                                fontWeight={'700'}
                                fontSize={{ base: '7vw', sm: '35px' }}
                            >
                                Engineer !
                            </Text>
                            <Box
                                display={'flex'}
                                justifyContent={'center'}
                                mt={'5%'}
                                width={'100%'}
                            >
                                <WaveText
                                    fontSize={waveTextFontSize}
                                    text={'Welcome To My Portforio'}
                                    color={'#262f62'}
                                />
                            </Box>
                        </Box>
                        <Box
                            display={'flex'}
                            height={'30%'}
                            flexDirection={'column'}
                            justifyContent={'start'}
                        />
                    </Box>
                    {/*<Box*/}
                    {/*    marginRight={'10px'}*/}
                    {/*    height={'380px'}*/}
                    {/*    display={'flex'}*/}
                    {/*    justifyContent={'end'}*/}
                    {/*    flexDirection={'column'}*/}
                    {/*>*/}
                    {/*    <Image*/}
                    {/*        width={'320px'}*/}
                    {/*        style={{ height: '380px', minWidth: '50%', filter: 'brightness(1.2)' }}*/}
                    {/*        src={'/selfie_home.png'}*/}
                    {/*    />*/}
                    {/*</Box>*/}
                </Box>
            </AspectRatio>
        </>
    );
};
