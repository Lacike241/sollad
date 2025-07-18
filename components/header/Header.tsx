import { Button, HStack } from "@chakra-ui/react"

import {HeaderLeft} from "@/components/header/HeaderLeft"

export const Header = () => {
    return (
        <HStack h={70} borderBottomColor={'#009535'} borderBottomWidth={2} bgColor={'#FEFAE0'}>
            <HeaderLeft />
            <Button>Click me</Button>
        </HStack>
    )
}