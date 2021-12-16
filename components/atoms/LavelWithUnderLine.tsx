import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const LabelWithUnderLine = ({ label }: { label: string }) => {
    return (
        <>
            <Text fontWeight={'700'}>{label}</Text>
            <Box mt={'3px'} opacity='0.7' height={'2px'} bg={'#e5e5e5'}></Box>
        </>
    );
};
