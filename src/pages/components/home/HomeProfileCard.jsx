import { Flex,Box,Text,Spacer } from "@chakra-ui/react";

const HomeProfileCard = () => {
    return ( 
        <Flex width={"100%"}>
            <Flex>
            <img src="https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-jorge-fakhouri-filho-2701570_m336qt.jpg" alt="" className="avatar__story" />
           
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