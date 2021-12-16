import { Image } from '@chakra-ui/react';

export const RoundIcon = ({
    imgSrc,
    padding,
    color,
}: {
    imgSrc: string;
    padding: number;
    color?: string;
}) => {
    return (
        <>
            <Image
                bg={color ? color : 'white'}
                src={imgSrc}
                borderRadius={'full'}
                boxSize={'150px'}
                p={padding + 'px'}
            ></Image>
        </>
    );
};
