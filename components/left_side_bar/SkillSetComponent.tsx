import { Box, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { LabelWithUnderLine } from "../ui_parts/LavelWithUnderLine";

export const SkillSetComponent = ({ skillSetObj, title }: { skillSetObj: any; title: string }) => {
    return (
        <>
            <Text fontWeight={'700'}>{title}</Text>
            <Box mt={'3px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>
            {Object.keys(skillSetObj).map((key, index) => {
                return (
                    <Box key={key}>
                        <Box
                            fontFamily={'theme'}
                            mt={'15px'}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Text opacity={"0.7"} fontFamily={'theme'} p={'5px 8px'}>
                                {key}
                            </Text>
                            <Text opacity={"0.7"} lineHeight={'29px'}>{skillSetObj[key]}%</Text>
                        </Box>
                        <Box
                            p={'1px 1px'}
                            border={'1px solid'}
                            height={'8px'}
                            borderColor={'theme'}
                        >
                            <Box bg={'theme'} w={skillSetObj[key] + '%'} h={'100%'}></Box>
                        </Box>
                    </Box>
                );
            })}
            <Box mt={'25px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>
        </>
    );
};
