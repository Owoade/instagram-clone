import { Box,Text } from "@chakra-ui/react";
const Story = ({story}) => {
    return ( 
        <Box textAlign={"center"}>
            <Box  background=" linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" borderRadius={"50%"} padding=".2em" overflow="hidden" display="flex" justifyContent={"center"} alignItems="center">
              <img src={story.image} alt="" className="avatar__story" style={{display:"block"}} over/>
            </Box>
           
            <Text fontSize="13px" color={"white"} margin={{sm:".5em 0",base:".1em 0"}}>{story.username}</Text>


        </Box>
     );
}
 
export default Story;