import { HStack, Stack } from "@chakra-ui/react"

import {HeaderLeft} from "@/components/header/HeaderLeft"
import {HeaderRight} from "@/components/header/HeaderRight";

export const Header = () => {
    return (
        <Stack display={'flex'}>
        <HStack
            h={70}
            borderColor={'#009535'}
            borderWidth={2}
            bgColor={'#FEFAE0'}
            mt={3}
            maxWidth={[300, 500, 750, 1100]}
            width={'88%'}
            alignSelf={'center'}
            borderRadius={12}
        >
            <HeaderLeft />
            <HeaderRight />
        </HStack>
        </Stack>
    )
}