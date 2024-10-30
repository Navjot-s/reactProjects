import { Box} from "@chakra-ui/react"
import { CodeCompiler } from "./components/CodeCompiler";


function App() {

  return  (
    <Box bg="#0f0a19" color="gray.500" px={6} py={4} style={{height:'100vh'}}>
      <CodeCompiler/>
    </Box>
  );
}

export default App
