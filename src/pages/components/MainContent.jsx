import { Box } from "@chakra-ui/react";
import Stories from "./Stories";
import Posts from "./Posts"
const MainContent = () => {
    return ( 
       <Box width={{md:"60%",sm:"80%"}} margin={{md:"0em 1em 2em 0", base:"0em auto"}} >
          <Stories />
          <Posts />
       </Box>
     );
}
 
export default MainContent;