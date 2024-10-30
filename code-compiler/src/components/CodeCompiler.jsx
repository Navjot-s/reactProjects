import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { Box, HStack } from "@chakra-ui/react";
import { LANGUAGE_CODE_SNIPPETS } from "../LanguageConstants";
import { Output } from "./Output";

export const CodeCompiler = () => {
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState('javascript');
    const editorRef = useRef();
    const onSelect = (language) => {
        setLanguage(language);
        setValue(LANGUAGE_CODE_SNIPPETS[language]);
    }
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }
    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor height="70vh" theme="vs-dark" defaultLanguage={language}
                        defaultValue={LANGUAGE_CODE_SNIPPETS[language]} onMount={onMount} value={value} onChange={(value) => setValue(value)} />
                </Box>
                <Output language={language} editorRef={editorRef}/>
            </HStack>
        </Box>

    );
}