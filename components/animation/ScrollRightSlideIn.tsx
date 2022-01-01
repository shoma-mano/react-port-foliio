import { ReactNode, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

export const ScrollRightSlideIn = ({
                                       children,
                                       height,
                                       isVisible
                                   }: { children: ReactNode, height: number, isVisible?: boolean }) => {
    const box = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(isVisible)box.current!.style.right = "-240px"
        window.addEventListener('scroll', (e) => {
            let dist;
            if (box.current) dist = window.scrollY + box.current.getBoundingClientRect().top;
            else return;
            if (
                dist + box.current.clientHeight <=
                window.scrollY + window.innerHeight + box.current.clientHeight * 0.5
            ) {
                box.current.style.right = "-240px"
            }
        });
    });
    return (
        <>
            <Box position={'relative'}>
                <Box ref={box}
                     position={'absolute'}
                     right={'-1000px'}
                     bottom={`${height/2-35}px`}
                     transition={"all 1s"}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
};
