import {Button, HStack, Text} from "@chakra-ui/react"

// TODO: translations
const HEADER_TEXT = [
    {label: 'O mne'},
    {label: 'Zručnosti'},
    {label: 'Projekty'},
    {label: 'Kontakt'},
]

export const HeaderRight = () => {
    return (
        <HStack flex={1} justifyContent={'flex-end'} mr={[3, 5, 10]}>
            {HEADER_TEXT.map((item)=> (
                <Text key={`H-${item.label}`} px={[1, null, null, 2]}  _hover={{ color: "#F97316", cursor: "pointer" }} >
                    {item.label}
                </Text>
            ))}
            <Button borderWidth={1} borderColor={'#009535'}>SK</Button>
        </HStack>
    )
}