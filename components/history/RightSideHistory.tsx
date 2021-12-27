import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { languageContext } from "../../pages/_app";

export const RightSideHistory = () => {
    const {selectedLanguage} = useContext(languageContext);
    const histories = [
        {
            time: '2003-2009',
            title: '小学校時代',
            sentence: '全校生徒60人という学校で自然の中に囲まれてのびのびと育つ。'
        }
    ]

    return (
        <Box
            mt={"130px"}
        >
            {histories.map(v => {
                return (
                    <Box
                        key={v.time}
                        fontFamily={'theme'}
                        border={'solid 1px'}
                        boxShadow={'md'}
                        borderColor={'rgba(0, 0, 0, 0.15)'}
                        width={'240px'}
                        height={'90px'}
                        borderRadius={'10px'}
                        position={'relative'}
                        bg={'white'}
                        m={'20px'}
                    >
                        {/*dot on center line*/}
                        <Box
                            left={'-29px'}
                            position={'absolute'}
                            bg={'#9e9e9e'}
                            mt={"39px"}
                            borderRadius={'50px'}
                            height={'12px'}
                            width={'12px'}
                        ></Box>
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            color={'#525252'}
                            fontSize={'22px'}
                            marginTop={"3px"}
                            position={"absolute"}
                            right={"260px"}
                            width={"180px"}
                            top={"28px"}
                        >
                            {v.time}
                        </Text>
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            color={'#000000d4'}
                            fontSize={'18px'}
                            marginTop={"10px"}
                        >
                            {v.title}
                        </Text>
                        <Text
                            textAlign={'center'}
                            fontWeight={'600'}
                            color={'#000000a8'}
                            marginTop={"10px"}
                            fontFamily={selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"}
                            mt={'5px'}
                        >{v.sentence}</Text>
                    </Box>
                )
            })}
        </Box>
    )

}
