import {useState} from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/header/Header";
import MobileNavigation from "./components/MobileNavigation";
import ProfileTop from "./components/profile/ProfileTop";
import Wrapper from "./components/Wrapper";
import ProfileNavigation from "./components/profile/ProfileNavigations";
import ProfileResources from "./components/profile/ProfileResources";

const Profile = () => {
    const [active,setActive]=useState("POST")
    return ( 
        <Box position={"relative"}  bgColor={"#323232"} height="fit-content">

        <Header active={"Profile"} />
        
        <Box width="100%" backgroundColor={"#323232 !important"} padding={{xs:"2em 0",base:"0em 0"}} position={"relative"} height="100%">
            
                <ProfileTop />
               <ProfileNavigation active={active} setActive={setActive} />
               <ProfileResources active={active} />
            
            
               
            
            <MobileNavigation active={"Profile"} />
        </Box>
    </Box>
     );
}
 
export default Profile;