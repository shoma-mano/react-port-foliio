import { Box, Image } from '@chakra-ui/react';
import { MouseEvent, useRef, useState } from 'react';

export const RoundIcon = ({
    imgSrc,
    padding,
    color,
}: {
    imgSrc: string;
    padding: number;
    color?: string;
}) => {
    const icon = useRef<HTMLImageElement>(null);
    const onMouseEnter = (e: MouseEvent<HTMLImageElement>) => {
        icon.current!.style.transform = 'rotateY(360deg)';
    };

    const onMouseLeave = (e: MouseEvent<HTMLImageElement>) => {
        icon.current!.style.transform = 'rotateY(0deg)';
    };
    return (
        <>
            <Box
                as={'div'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                boxSize={'150px'}
            >
                <Image
                    transition={'all 0.5s'}
                    bg={color ? color : 'white'}
                    src={imgSrc}
                    border={"solid 1px #0000000a"}
                    borderRadius={'full'}
                    boxSize={'150px'}
                    boxShadow={'md'}
                    p={padding + 'px'}
                    ref={icon}
                ></Image>
            </Box>
        </>
    );
};
