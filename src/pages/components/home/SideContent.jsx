import { Box, Flex,Spacer,Text } from "@chakra-ui/react";
import HomeProfileCard from "./HomeProfileCard";
import Suggestion from "./Suggestion";


const SideContent = () => {
    const suggestions = [{
        username:"meg__",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648917223/pexels-ali-pazani-4407688_ao0tmx.jpg"
    },{
    username:"_Kloe",
    image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-yan-krukov-4458025_qwvpmp.jpg"
    },{
        username:"Paula",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648917223/pexels-evg-kowalievska-1055691_nuvurb.jpg"
    },{
        username:"Jest_je",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648917223/pexels-cottonbro-7236161_prkhvc.jpg"
    },{
        username:"Mya",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648917223/pexels-andrea-piacquadio-972995_z6tygu.jpg"
    },{
        username:"Mya",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-jorge-fakhouri-filho-2701570_m336qt.jpg"
    }

]
    return ( 
        <Box height="400px" width={{sm:"250px",lg:"300px"}} background="transperent"    borderRadius={"20px"} position="fixed" right={{lg:"15%", sm:"10%"}} top={"130px"} display={{md:"block", base:"none"}}>
        <HomeProfileCard />
        <Flex width={"100%"} margin={"10px 0"}>
          <Text fontSize={"13px"} color="rgb(172, 172, 172)">Suggetions for you</Text>
          <Spacer />
          <Text fontSize={"12px"}>See All</Text>
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