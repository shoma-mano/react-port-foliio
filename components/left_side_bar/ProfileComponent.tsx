import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { KeyValueCard } from '../ui_parts/KeyValueCard';
import { LabelWithUnderLine } from '../ui_parts/LavelWithUnderLine';
import { languageContext } from '../../pages/_app';

export const ProfileComponent = ({ profileArray }: { profileArray: Array<any> }) => {
    const { selectedLanguage } = useContext(languageContext);
    const profileBg = useColorModeValue('rgb(205 205 205)', '#3a3636');

    return (
        <>
            <LabelWithUnderLine
                label={selectedLanguage === 'ja' ? 'プロフィール' : 'Profile'}
            ></LabelWithUnderLine>
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
