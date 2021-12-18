import { Box, Text } from "@chakra-ui/react";
import { WaveText } from "./WaveText";

export const EnglishIntroduceCard=()=>{

    return(
        <>
            <Box
                transition={'all 20ms'}
                borderRadius={'6px'}
                marginTop={'20px'}
                boxShadow={'lg'}
                w={'80%'}
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
                        width={"350px"}
                        mt={"30px"}
                    >
                        <Text
                            color={'#000000a3'}
                            fontWeight={'700'}
                            marginLeft={'20px'}
                            fontSize={'30px'}
                        >
                                I'm Shoma Mano Software Engineer
                        </Text>
                        <WaveText text={"Welcome To My Portforio"} color={"black"}></WaveText>
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