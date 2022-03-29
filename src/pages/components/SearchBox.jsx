import { Box,Flex,Text } from "@chakra-ui/react";
const SearchBox = () => {
    return ( 
           <Flex padding={"8px 10px"} height="40px" backgroundColor="black" width={"250px"} border="1px solid grey" color={"grey"} borderRadius="20px" display={{sm:"flex",base:"none"}}>
             <i className="ri-search-line" style={{transform:"translateY(0em)"}}></i>
             <Text transform={"translateX(1em)"}>Search</Text>
           </Flex>
     );
}
 
export default SearchBox;