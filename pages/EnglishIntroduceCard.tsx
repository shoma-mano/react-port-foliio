import { Box, Text } from "@chakra-ui/react";

export const EnglishIntroduceCard=()=>{

    return(
        <>
            <Box
                transition={'all 20ms'}
                borderRadius={'6px'}
                marginTop={'5px'}
                boxShadow={'lg'}
                w={'90%'}
                h={'380px'}
                bg={'white'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box width={'430px'} height={'100%'} flexShrink={'0'} flexGrow={'1'}>
                    <Box
                        display={'flex'}
                        height={'45%'}
                        flexDirection={'column'}
                        justifyContent={'end'}
                    >
                        <Text
                            color={'#000000a3'}
                            mb={'10px'}
                            fontWeight={'700'}
                            marginLeft={'20px'}
                            fontSize={'60px'}
                        >
                            <Box as={'span'} color={'#107dcb'}>
                                Web
                            </Box>{' '}
                            Developer
                        </Text>
                    </Box>
                    <Box
                        display={'flex'}
                        height={'25%'}
                        flexDirection={'column'}
                        justifyContent={'start'}
                    >
                        <Text
                            color={'#000000a3'}
                            fontSize={'35px'}
                            fontWeight={'700'}
                            textAlign={'end'}
                        >
                            Shoma Mano
                        </Text>
                    </Box>
                    <Box
                        display={'flex'}
                        height={'30%'}
                        flexDirection={'column'}
                        justifyContent={'start'}
                    >
                    </Box>
                </Box>
                <Box
                    marginRight={'10px'}
                    height={'380px'}
                    display={'flex'}
                    justifyContent={'end'}
                    flexDirection={'column'}
                >
                    <img
                        width={'320px'}
                        style={{height: '380px'}}
                        src={'/selfie_home.png'}
                    ></img>
                </Box>
            </Box>

        </>
    )
}