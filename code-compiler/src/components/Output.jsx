import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";
import { useState } from "react";

export const Output = ({language, editorRef}) =>{
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const runCode = async() =>{
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;
        try {
            setLoading(true);
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
            result.stderr ? setError(true) : setError(false)
        } catch (error) {
            console.log(error);
            toast({
                title: "Error",
                description: error.message || "Unable to run code",
                status : "error",
                duration: 6000
            })
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <Box w="50%" >
            <Text mb={2} fontSize="lg">Output</Text>
            <Button variant="outline" colorScheme="green" mb={4} isLoading={loading} onClick={runCode}>Run Code</Button>
            <Box height="75vh" p={2} border='1px solid' borderRadius={4} color={error ? 'red.500' : ''} borderColor={error ? 'red.500' : '#333'}>
                {output ? output.map((line,i) => <Text key={i}>{line}</Text>) : 'Click on the "Run Code to execute the code"'}
            </Box>
        </Box>
    );
}