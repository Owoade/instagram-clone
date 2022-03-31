import { Box,Flex,Spacer,Text } from "@chakra-ui/react";

const Suggestion = ({suggestion}) => {
    return ( 
       <Flex width={"100%"} margin="10px 0">
           <Flex>
               <img src={suggestion.image} alt="" className="avatar" />
                <Box marginLeft="10px" fontSize="13px">
                    <strong style={{color:"white"}}>{suggestion.username}</strong>
                    <Text color="rgb(172, 172, 172)">Louisiana Maurine</Text>
                </Box>
           </Flex>
           <Spacer />
           <Text color={"skyblue"} transform={"translateY(1em)"} fontSize={"12px"}>
               Follow
           </Text>

           
       </Flex>
     );
}
 
export default Suggestion;