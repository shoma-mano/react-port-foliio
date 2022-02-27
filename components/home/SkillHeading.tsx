import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { useContext } from "react";
import { AppContext } from "../../pages/_app";

export const SkillHeading = () => {
    const cardBg = useColorModeValue('white', '#242526');
    const { selectedLanguage } = useContext(AppContext);

    return (
        <Box
            mt={'50px'}
            fontFamily={'theme'}
            borderColor={'rgba(0, 0, 0, 0.15)'}
            width={'320px'}
            height={'100px'}
            borderRadius={'10px'}
            position={'relative'}
            bg={cardBg}
            ml={'20px'}
            mx={'auto'}
            px={'10px'}
        >
            <Text
                fontFamily={"'Rubik', sans-serif;"}
                textAlign={'center'}
                fontWeight={'600'}
                fontSize={'28px'}
                marginTop={'2px'}
            >
                {'Skill'}
            </Text>
            <Text
                textAlign={'center'}
                fontSize={selectedLanguage === 'ja' ? '14px' : ''}
                fontFamily={
                    selectedLanguage === 'ja' ? 'monospace' : "'Rubik', sans-serif;"
                }
                mt={'3px'}
            >
                {selectedLanguage === 'ja'
                    ? 'フロントからバックエンド、インフラまでの経験があります。(現在はフロントの割合が多いです。）'
                    : 'I have experience in Frontend,Backend, and Infrastructure'}
            </Text>
        </Box>
    )
}