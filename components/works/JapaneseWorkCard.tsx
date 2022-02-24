import {
    Badge,
    Box,
    Icon,
    Image,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { CherryBlossom } from '../animation/CherryBlossom';

export const JapaneseWorkCard = ({ imgSrc, stack }: { imgSrc: string; stack: string[] }) => {
    const bg = useColorModeValue('white', '#242526');
    let stackText = '';
    stack.forEach((v, i) => {
        stackText = stackText + v + (i!==stack.length-1 ? ' / ' :'')
    });

    return (
        <>
            <Box
                transition={'all 20ms'}
                boxShadow={'lg'}
                w={'100%'}
                h={'100%'}
                bg={bg}
                py={'20px'}
                px={'15px'}
                borderRadius={'4px'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box
                    marginRight={'10px'}
                    display={'flex'}
                    justifyContent={'end'}
                    flexDirection={'column'}
                    width={'50%'}
                >
                    <Image
                        style={{
                            width: '100%',
                            zIndex: 6,
                        }}
                        src={imgSrc}
                    />
                </Box>
                <Box
                    marginRight={'10px'}
                    display={'flex'}
                    flexDirection={'column'}
                    width={'50%'}
                    pl={'10px'}
                >
                    <Box display={'flex'} alignItems={'center'}>
                        <Text
                            fontSize={'1.5em'}
                            fontWeight={'700'}
                            fontFamily={"'Rubik', sans-serif;"}
                        >
                            WEDDING APP
                        </Text>
                        <Badge ml={'10px'} h={'20px'}>
                            Private
                        </Badge>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Text>{stackText}</Text>
                        {/*<Box d={'flex'} w={'70%'} alignItems={'center'}>*/}
                        {/*    {stack.map((v, i) => (*/}
                        {/*        <>*/}
                        {/*            <Text fontSize={'0.8em'} fontFamily={'inherit'}>*/}
                        {/*                {v}{' '}*/}
                        {/*                {i !== stack.length - 1 && / }*/}
                        {/*            </Text>*/}
                        {/*            /!*{i !== stack.length - 1 && (*!/*/}
                        {/*            /!*    <Text ml={'3px'} mr={'6px'}>*!/*/}
                        {/*            /!*        /*!/*/}
                        {/*            /!*    </Text>*!/*/}
                        {/*            /!*)}*!/*/}
                        {/*        </>*/}
                        {/*    ))}*/}
                        {/*</Box>*/}
                        <Image ml={'10px'} boxSize={'20px'} src={'/github.svg'}></Image>
                        <Text ml={'3px'} fontFamily={"'Rubik', sans-serif;"}>
                            GitHub
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
