import { Box } from '@chakra-ui/react';
import React from 'react';
import { KeyValueCard } from '../../atoms/KeyValueCard';
import { LabelWithUnderLine } from '../../atoms/LavelWithUnderLine';

export const ProfileComponent = ({ profileArray }: { profileArray: Array<any> }) => {
    return (
        <>
            <LabelWithUnderLine label={'プロフィール'}></LabelWithUnderLine>
            <Box
                mt={'10px'}
                sx={{ rowGap: '10px' }}
                width={'100%'}
                display={'flex'}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
            >
                {profileArray.map((v) => (
                    <KeyValueCard
                        key={v.label}
                        label={v.label}
                        value={v.value}
                        fontSize={v.fontSize}
                        unit={v.unit}
                    ></KeyValueCard>
                ))}
            </Box>
        </>
    );
};
