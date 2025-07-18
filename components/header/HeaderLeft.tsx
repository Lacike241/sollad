import { Heading, HStack, Image } from "@chakra-ui/react"

export const HeaderLeft = () => {
    return (
        <HStack>
            <Image src={'/logo.png'} h={70} />
            <Heading>Sollad dev</Heading>
        </HStack>
    )
}