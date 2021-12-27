import { Box, Text } from "@chakra-ui/react";

export const RightSideHistory=()=>
    <Box>
        <Box
            mt={"350px"}
            fontFamily={'theme'}
            border={'solid 1px'}
            boxShadow={'md'}
            borderColor={'rgba(0, 0, 0, 0.15)'}
            width={'240px'}
            height={'120px'}
            borderRadius={'10px'}
            position={'relative'}
            bg={'white'}
            ml={'20px'}
        >
            <Box
                left={'-29px'}
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
            <Text color={'#000000d4'}
                  height={'50%'}
                  textAlign={"center"}
            >
                水城高等</Text>
        </Box>
    </Box>

