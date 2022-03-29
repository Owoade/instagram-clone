import {Box} from "@chakra-ui/react"
const Wrapper = ({children}) => {
    return ( 
        <Box width={{md:"80%",lg:"70%",xs:"88%",base:"95%"}} margin={"0 auto"}>
             {children}
        </Box>
     );
}
 
export default Wrapper;