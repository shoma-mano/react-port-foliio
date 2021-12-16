import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';

export const SpanWrapper = ({
    children,
    mt,
    mb,
    ml,
    mr,
}: {
    children: ReactElement;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
}) => {
    return (
        <>
            <Box as={'span'} mt={mt} mb={mb} ml={ml} mr={mr}>
                {children}
            </Box>
        </>
    );
};
