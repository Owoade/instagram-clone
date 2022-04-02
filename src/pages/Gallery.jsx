import { Box, Text } from "@chakra-ui/react";
import Header from "./components/header/Header";
import MobileNavigation from "./components/MobileNavigation";

const Gallery = () => {
    return ( 
        <Box>
            <Header active={"Post"} />
             <Box  textAlign="center" color="white" margin={{xs:"1em 0",base:"1em 0 4em 0"}}>
                <i className="ri-image-fill profile__resource_icon" ></i>
                <Text fontSize="27px" color="white" fontWeight="100">Gallery</Text>
                <Text width={{sm:"400px",base:"100%"}} margin="0 auto" fontSize={{xs:"16px",base:"14px"}}>All of your device's image will appear here</Text>
            </Box>
            <MobileNavigation active={"Post"} />
        </Box>
     );
}
 
export default Gallery;