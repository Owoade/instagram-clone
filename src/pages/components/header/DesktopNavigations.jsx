import { Flex, Box,Tooltip } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const DesktopNavigation = ({ active }) => {
    const links = [
        {
            iconClass: "bi bi-house-door",
            active: "bi bi-house-door-fill",
            name: "Home",
            path:"/"
        },
        {
            iconClass: "bi bi-compass",
            active: "bi bi-compass-fill",
            name: "Explore",
            path:"/explore"
        } ,{
            iconClass: "bi bi-plus-circle",
            active: "bi bi-plus-circle-fill",
            name: "Post",
            path:"/gallery"
        }
    ]
    return (
        <Flex justifyContent={"space-between"} display={{xs:"flex",base:"none"}} width="200px">
            {
                links.map(each => (<Box>
                    <Tooltip label={`${each.name}`}>
                        <Link to={each.path}>
                        <i className={`${each.name == active ? each.active : each.iconClass}`} style={{fontSize:"28px",transform:"translateY(0em)",display:"block",fontWeight:"100"}}></i>
                        </Link>
                        
                    </Tooltip>
                    
                </Box>))
            }
            <Box width={"40px"} height="40px" background=" linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" borderRadius={"50%"} display="flex" justifyContent={"center"} alignItems="center">
                <Link to="/profile"><img src="https://images.pexels.com/photos/3990562/pexels-photo-3990562.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" style={{transform:"translate(0px,-.5px )"}} alt="" className="avatar" /></Link>
            
            </Box>
            
        </Flex>
    );
}

export default DesktopNavigation;