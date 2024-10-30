import { Box, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSION } from "../LanguageConstants";
const ACTIVE_COLOR = "blue.400";

export const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box ml={2} mb={2}>
            <Text mb={2} fontSize="lg">Langauge: </Text>
            <Menu isLazy>
                <MenuButton px={4} py={2} transition='all 0.2s' borderRadius='md' borderWidth='1px' _hover={{ bg: 'gray.400' }} _expanded={{ bg: 'blue.400' }} _focus={{
                    boxShadow: 'outline'
                }}>
                    {language}
                </MenuButton>
                <MenuList bg="#110c1b">
                    {Object.entries(LANGUAGE_VERSION).map(([lang, version]) => (
                        <MenuItem key={lang} onClick={() => onSelect(lang)}
                        color={lang === language ? ACTIVE_COLOR : ''}
                        bg={lang === language ?  'gray.900' : 'transparent'}
                        _hover={{color:ACTIVE_COLOR, bg:'gray.900'}}>
                            {lang}
                            &nbsp;
                            <Text as="span" color="gray.500" fontSize="sm">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}