import { Box,Flex } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const MobileNavigation = ({active}) => {
    const links = [
        {
            iconClass: "bi bi-house-door",
            active: "bi bi-house-door-fill",
            name: "Home",
            path:"/"
        },
      
        {
            iconClass: "ri-search-line",
            active: "ri-search-fill",
            name: "Explore",
            path:"/explore"
        },
        {
            iconClass: "bi bi-plus-circle",
            active: "bi bi-plus-circle-fill",
            name: "Post",
            path:"/gallery"
        },
        {
            iconClass:"ri-heart-line",
            active:"ri-heart-fill",
            name:"Notifications",
            path:"/activities"
        },
        {
            iconClass:"ri-user-line",
            active:"ri-user-fill",
            name:"Profile",
            path:"/profile"
        }
    ]
    return ( 
        <div className="mobile__navigation">
          <Flex width={"100%"} justifyContent="space-between" backgroundColor={"#252525"} color="white" position={"fixed"} top={"93vh"} padding="0 10px 20px 10px" display={{base:"flex",xs:"none"}}>
            {
                links.map(link => (

                    <Link  to={link.path}><i className={`${link.name == active ? link.active : link.iconClass}`} style={{fontSize:"25px",transform:"translateY(.2em)",display:"block",fontWeight:"100"}}></i></Link>
                ))
            }
          </Flex>
        </div>
     );
}
 
export default MobileNavigation;
