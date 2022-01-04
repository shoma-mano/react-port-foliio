import { ReactNode, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

export const ScrollLeftSlideIn = ({
    children,
    height,
    isVisible,
}: {
    children: ReactNode;
    height: number;
    isVisible?: boolean;
}) => {
    const box = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (isVisible) box.current!.style.left = '-300px';
        window.addEventListener('scroll', (e) => {
            let dist;
            if (box.current) dist = window.scrollY + box.current.getBoundingClientRect().top;
            else return;
            if (dist + box.current.clientHeight <= window.scrollY + window.innerHeight) {
                box.current.style.left = '-300px';
            }
        });
    });
    return (
        <>
            <Box position={'relative'}>
                <Box
                    ref={box}
                    position={'absolute'}
                    left={'-1000px'}
                    bottom={`${height / 2 + 25}px`}
                    transition={'all 0.8s'}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
};
