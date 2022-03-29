import Wrapper from "./Wrapper";
import {Box,Flex} from "@chakra-ui/react"
import Logo from "./Logo";
import SearchBox from "./SearchBox"
import DesktopNavigation from "./DesktopNavigations";

const Header = ({active}) => {
    return ( 
     <Box backgroundColor={"#252525"} color="white" position={"sticky"}
     top={"0"} width="100%" zIndex={"5"}>
         <Wrapper>
           <Box padding={"10px 0px"}>
               <Flex justifyContent="space-between" width="100%">
               <i className="ri-camera-line header__camera"></i>
                <Logo />
                <SearchBox />
                <DesktopNavigation active={active} />
                <i className="ri-send-plane-2-line header__send"></i>

               </Flex>
               
           </Box> 
        </Wrapper>
     </Box>   
       
     );
}
 
export default Header;