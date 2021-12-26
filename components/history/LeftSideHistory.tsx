import { Box, Text } from "@chakra-ui/react";

export const LeftSideHistory = () =>
    (
        <Box>
            <Box
                fontFamily={'theme'}
                border={'solid 1px'}
                boxShadow={'md'}
                borderColor={'rgba(0, 0, 0, 0.15)'}
                width={'240px'}
                height={'120px'}
                borderRadius={'10px'}
                position={'relative'}
                bg={'white'}
                mr={'20px'}
            >
                <Box
                    right={'-29px'}
                    position={'absolute'}
                    bg={'#9e9e9e'}
                    mt={"54px"}
                    borderRadius={'50px'}
                    height={'12px'}
                    width={'12px'}
                ></Box>
                <Text
                    textAlign={'center'}
                    fontWeight={'600'}
                    color={'#000000d4'}
                    fontSize={'20px'}
                    marginTop={"10px"}
                >
                    2012-2015
                </Text>
                <Text
                    textAlign={"center"}
                    height={'50%'}
                >水城高等</Text>
            </Box>
        </Box>
    )

