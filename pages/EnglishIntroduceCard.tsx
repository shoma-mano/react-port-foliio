import { Box, Text } from "@chakra-ui/react";
import { WaveText } from "./WaveText";

export const EnglishIntroduceCard = () => {

    return (
        <>
            <Box
                transition={'all 20ms'}
                borderRadius={'6px'}
                marginTop={'20px'}
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
                        height={'60%'}
                        flexDirection={'column'}
                        width={"350px"}
                        marginLeft={'40px'}
                        mt={"90px"}
                        fontFamily={"'Rubik', sans-serif;"}
                    >
                        <Text
                            color={'#000000d1'}
                            fontWeight={'700'}
                            fontSize={'35px'}
                        >
                            I'm Shoma Mano,
                        </Text>
                        <Text
                            color={'#0095ffeb'}
                            fontWeight={'700'}
                            fontSize={'35px'}
                        >
                            Software
                        </Text>
                        <Text
                            color={'#000000d1'}
                            fontWeight={'700'}
                            fontSize={'35px'}
                        >
                            Engineer
                        </Text>
                        <Box display={"flex"} mt={"60px"}>
                            <WaveText text={"Welcome To My Portforio"} color={"#262f62"}></WaveText>
                        </Box>
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
                        style={{height: '380px',filter: 'brightness(1.2)'}}
                        src={'/selfie_home.png'}
                    ></img>
                </Box>
            </Box>
        </>
    )
}