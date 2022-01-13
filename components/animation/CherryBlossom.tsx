import { AspectRatio, Box, useBreakpointValue } from '@chakra-ui/react';
import styles from '/styles/Animation.module.css';
import { useEffect } from 'react';

export const CherryBlossom = ({ children }: { children: React.ReactNode }) => {
    const width = useBreakpointValue({ base: '82%', sm: '630px' });

    useEffect(() => {
        const section = document.getElementById('cherry_container');

        // 花びらを生成する関数
        const createPetal = () => {
            const petalEl = document.createElement('span');

            const minSize = 10;
            const maxSize = 15;
            const size = Math.random() * (maxSize + 1 - minSize) + minSize;
            petalEl.style.width = `${size}px`;
            petalEl.style.height = `${size}px`;
            petalEl.style.left = Math.random() * innerWidth + 'px';
            section!.appendChild(petalEl);

            // 一定時間が経てば花びらを消す
            setTimeout(() => {
                petalEl.remove();
            }, 8000);
        };

        // 花びらを生成する間隔をミリ秒で指定
        const id = setInterval(createPetal, 550);

        return () => clearInterval(id);
    });

    return (
        <>
            <AspectRatio position={'relative'} width={width} ratio={63 / 38} margin={'auto'}>
                <Box
                    boxShadow={'md'}
                    borderRadius={'10px'}
                    width={'100%'}
                    h={'100%'}
                    id={'cherry_container'}
                    className={styles.cherry_blossom_container}
                    bg={'white'}
                >
                    {children}
                </Box>
            </AspectRatio>
        </>
    );
};
