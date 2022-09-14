import { Box, chakra } from '@chakra-ui/react';
import NextImage, { ImageProps as imgProps, ImageLoaderProps } from 'next/image';

const ChakraNextUnwrappedImage = chakra(NextImage, {
    shouldForwardProp: (prop) =>
        [
            'width',
            'height',
            'src',
            'alt',
            'quality',
            'placeholder',
            'loader ',
            'display',
        ].includes(prop),
});

interface ImageProps extends imgProps {
    display?: string;
    borderRadius?: string;
    justifyContent?: string;
    minWidth?: string;
    minHeight?: string;
    filter?: string;
}

const myLoader = (resolverProps: ImageLoaderProps): string => {
    return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

export const ChakraNextImage = (props: ImageProps) => {
    const { src, alt, width, quality, height, ...rest } = props;
    return (
        <Box pos='relative' cursor='pointer' className='group' {...rest}>
            <ChakraNextUnwrappedImage
                w='100%'
                h='100%'
                loader={myLoader}
                width={width}
                quality={quality}
                height={height}
                borderRadius={props.borderRadius}
                src={src}
                alt={alt}
                transition='all 0.2s'
            />
        </Box>
    );
};
