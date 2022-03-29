import { Box,Flex } from "@chakra-ui/react";
const MobileNavigation = ({active}) => {
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
        },
        {
            iconClass:"ri-heart-line",
            active:"ri-heart-fill",
            name:"Notifications"
        },
        {
            iconClass:"ri-user-line",
            active:"ri-user-fill",
            name:"Profile"
        }
    ]
    return ( 
        <div className="mobile__navigation">
          <Flex width={"100%"} justifyContent="space-between" backgroundColor={"#252525"} color="white" position={"fixed"} top={"93vh"} padding="0 10px 10px 10px" display={{base:"flex",xs:"none"}}>
            {
                links.map(link => (
                    <i className={`${link.name == active ? link.active : link.iconClass}`} style={{fontSize:"25px",transform:"translateY(.2em)",display:"block",fontWeight:"100"}}></i>
                ))
            }
          </Flex>
        </div>
     );
}
 
export default MobileNavigation;