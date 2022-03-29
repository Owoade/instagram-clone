import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import Wrapper from "./components/Wrapper"
import MobileNavigation from "./components/MobileNavigation";

const Home = () => {
    return ( 
        <Box position={"relative"}>
            <MobileNavigation active={"Home"} />
            <Header active={"Home"} />
            <Box  width="100%" bgColor={"#323232"} padding="2em 0" position={"relative"}>
                <Wrapper>
                  <MainContent  />
                  <SideContent />
                </Wrapper>
                <MobileNavigation active={"Home"} />
            </Box>
        </Box>
       
     );
}
 
export default Home;