import { Box, Text } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';

export const KeyValueCard = ({
    label,
    value,
    unit,
    fontSize,
    style,
}: {
    label: string;
    value: string;
    unit?: string;
    fontSize?: number;
    style?: CSSProperties;
}) => {
    return (
        <>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                style={style}
                border={'solid #00000026 1px'}
                borderRadius={'20px'}
                padding={'5px'}
                width={'47%'}
            >
                <Text
                    lineHeight={'30px'}
                    ml={'5px'}
                    fontWeight={'700'}
                    fontSize={fontSize ? fontSize + 'px' : '20px'}
                >
                    {value}
                    <Box
                        fontWeight={'0'}
                        marginLeft={'2px'}
                        as={'span'}
                        opacity={'0.6'}
                        fontSize={'12px'}
                    >
                        {unit}
                    </Box>
                </Text>
                <Text ml={'5px'} mb={'5px'} opacity={'0.6'} fontSize={'12px'}>
                    {label}
                </Text>
            </Box>
        </>
    );
};
