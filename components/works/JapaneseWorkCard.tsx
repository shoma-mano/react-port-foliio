import { Box, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { CherryBlossom } from '../animation/CherryBlossom';

export const JapaneseWorkCard = ({
    position,
    name,
    englishName,
    imgSrc,
}: {
    position: string;
    name: string;
    englishName: string;
    imgSrc: string;
}) => {
    const bg = useColorModeValue('white', '#242526');
    const width = useBreakpointValue({ base: '90%', sm: '630px' });

    return (
        <>
            <Box
                transition={'all 20ms'}
                boxShadow={'lg'}
                w={'100%'}
                h={'100%'}
                bg={bg}
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
                    py={'30px'}
                >
                    <Box border={'solid 1px #00000021'} borderRadius={'4px'} ml={'20px'}>
                        <img
                            style={{
                                width: '100%',
                                zIndex: 6,
                            }}
                            src={imgSrc}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
