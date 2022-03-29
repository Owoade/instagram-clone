import { Flex,Box,Text,Spacer } from "@chakra-ui/react";

const HomeProfileCard = () => {
    return ( 
        <Flex width={"100%"}>
            <Flex>
            <img src="https://images.unsplash.com/photo-1648376306856-906ebf86b087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="avatar__story" />
           
           <Box fontSize={"13px"}  transform={"translateY(.6em)"} marginLeft="10px">
               <strong style={{color:"white"}}>Mary_j</strong>
               <Text color="rgb(172, 172, 172)">Louisiana Maurine</Text>
           </Box>
            </Flex>
           
           <Spacer />
           <Text color={"skyblue"} transform={"translateY(1em)"} fontSize={"12px"}>
               Switch
           </Text>
        </Flex>
     );
}
 
export default HomeProfileCard;