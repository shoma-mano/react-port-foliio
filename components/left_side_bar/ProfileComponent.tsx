import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { KeyValueCard } from '../ui_parts/KeyValueCard';
import { LabelWithUnderLine } from '../ui_parts/LavelWithUnderLine';
import { AppContext } from '../../pages/_app';

export const ProfileComponent = ({ profileArray }: { profileArray: Array<any> }) => {
    const { selectedLanguage } = useContext(AppContext);

    return (
        <>
            <LabelWithUnderLine label={selectedLanguage === 'ja' ? 'プロフィール' : 'Profile'} />
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
                    />
                ))}
            </Box>
        </>
    );
};
