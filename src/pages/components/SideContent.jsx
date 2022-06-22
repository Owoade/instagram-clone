import { Box, Flex,Spacer,Text } from "@chakra-ui/react";
import HomeProfileCard from "./HomeProfileCard";
import Suggestion from "./Suggestion";


const SideContent = () => {
    const suggestions = [{
        username:"meg__",
        image:"https://images.unsplash.com/photo-1525786210598-d527194d3e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },{
    username:"_Kloe",
    image:"https://images.unsplash.com/photo-1648368827729-a83618823317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Paula",
        image:"https://images.unsplash.com/photo-1648372152629-da8be6035529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Jest_je",
        image:"https://images.unsplash.com/photo-1648371477306-fbe17ff431a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
    },{
        username:"Mya",
        image:"https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Mya",
        image:"https://images.unsplash.com/photo-1648376306856-906ebf86b087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }

]
    return ( 
        <Box height="400px" width={{sm:"250px",lg:"300px"}} background="transperent"    borderRadius={"20px"} position="fixed" right={{lg:"15%", sm:"10%"}} top={"130px"} display={{md:"block", base:"none"}}>
        <HomeProfileCard />
        <Flex width={"100%"} margin={"10px 0"}>
          <Text fontSize={"13px"} color="rgb(172, 172, 172)">Suggetions for you</Text>
          <Spacer />
          <Text fontSize={"12px"} color="white" >See All</Text>
        </Flex>
        {
          suggestions.map(suggestion => (<Suggestion suggestion = {suggestion} />))
        }

        <Text color="rgba(172, 172, 172,0.4)" margin={"20px 0"} fontSize="13px">
           Created with 🧡 by Owoade 
        </Text>

        </Box>
     );
}
 
export default SideContent;
