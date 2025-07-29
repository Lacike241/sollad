import { Heading, HStack, Image } from "@chakra-ui/react"

export const HeaderLeft = () => {
    return (
        <HStack>
            <Image src={'/logo.png'} h={[50, null, 70]} />
            <Heading fontSize={['lg', 'md']}>Sollad dev</Heading>
        </HStack>
    )
}