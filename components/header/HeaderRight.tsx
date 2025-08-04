"use client"
import {
    Button,
    HStack,
    VStack,
    Text,
    useBreakpointValue,
    useDisclosure,
    IconButton,
    Drawer,
    CloseButton,
    Portal,
    Image,
} from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa';

// TODO: translations
const HEADER_TEXT = [
    {label: 'O mne'},
    {label: 'Zručnosti'},
    {label: 'Projekty'},
    {label: 'Kontakt'},
]

export const HeaderRight = () => {
    const { open, onOpen, onToggle } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <HStack flex={1} justifyContent={'flex-end'} mr={[3, 5, 10]}>
            {isMobile ? (
                <>
                    <IconButton
                        aria-label="Otvoriť menu"
                        onClick={onOpen}
                        colorPalette={'green'}
                        size={'sm'}
                    >
                        <FaBars />
                    </IconButton>
                    <Drawer.Root onOpenChange={onToggle} open={open}>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content backgroundColor={'#FEFAE0'}>
                                    <Drawer.Header>
                                        <Drawer.Title>
                                            <Image src={'/logo.png'} h={[50]} />
                                        </Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body >
                                        <VStack align="start" px={5} pt={5}>
                                            {HEADER_TEXT.map((item)=> (
                                                <Text key={`H-${item.label}`} px={[1, null, null, 2]} pt={5}  _hover={{ color: "#F97316", cursor: "pointer" }} >
                                                    {item.label}
                                                </Text>
                                            ))}
                                        </VStack>
                                    </Drawer.Body>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton variant={'outline'} size="md" colorPalette={'green'} />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                </>

                ) : (<>
                    {HEADER_TEXT.map((item)=> (
                        <Text key={`H-${item.label}`} px={[1, null, null, 2]}  _hover={{ color: "#F97316", cursor: "pointer" }} >
                            {item.label}
                        </Text>
                    ))}
                    <Button borderWidth={1} borderColor={'#009535'}>SK</Button>
                </>)
            }
            </HStack>
    )
}