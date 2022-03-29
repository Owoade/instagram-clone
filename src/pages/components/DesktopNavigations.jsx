import { Flex, Box,Tooltip } from "@chakra-ui/react";
const DesktopNavigation = ({ active }) => {
    const links = [
        {
            iconClass: "ri-home-5-line",
            active: "ri-home-5-fill",
            name: "Home"
        },
        {
            iconClass: "ri-video-line",
            active: "ri-video-fill",
            name: "IG TV"
        },
        {
            iconClass: "ri-compass-3-line",
            active: "ri-compass-3-fill",
            name: "Explore"
        }
    ]
    return (
        <Flex justifyContent={"space-between"} display={{xs:"flex",base:"none"}} width="200px">
            {
                links.map(each => (<Box>
                    <Tooltip label={`${each.name}`}>
                        <i className={`${each.name == active ? each.active : each.iconClass}`} style={{fontSize:"28px",transform:"translateY(0em)",display:"block",fontWeight:"100"}}></i>
                    </Tooltip>
                    
                </Box>))
            }
            <Box width={"40px"} height="40px" background=" linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" borderRadius={"50%"} display="flex" justifyContent={"center"} alignItems="center">
            <img src="https://images.pexels.com/photos/3990562/pexels-photo-3990562.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" style={{transform:"translate(0px,-.5px )"}} alt="" className="avatar" />
            </Box>
            
        </Flex>
    );
}

export default DesktopNavigation;