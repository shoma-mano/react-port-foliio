import { Children, cloneElement, createRef, useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

export const ScrollTransition = ({
    children,
    isVisible,
}: {
    children: React.ReactNode;
    isVisible?: boolean;
}) => {
    const box = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible) setTimeout(() => (box.current!.style.opacity = '1'), 400);
        window.addEventListener('scroll', (e) => {
            let dist;
            if (box.current) {
                dist = window.scrollY + box.current.getBoundingClientRect().top;
            } else return;
            if (
                dist + box.current.clientHeight <=
                window.scrollY + window.innerHeight + box.current.clientHeight * 0.5
            ) {
                setTimeout(() => (box.current!.style.opacity = '1'), 400);
            }
        });
    }, [isVisible]);

    return (
        <>
            <Box ref={box} opacity={isVisible ? 1 : 0} transition={'all 1.2s'}>
                {children}
            </Box>
        </>
    );
};
