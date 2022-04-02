import { Box,Text,Flex } from "@chakra-ui/react";

const ProfileNavigation = ({active,setActive}) => {
    const tabs = [
        {
            name:"POST",
            iconClass:"ri-grid-line profile__nav_icon"
        },{
            name:"SAVED",
            iconClass:"ri-bookmark-line  profile__nav_icon"
        },{
            name:"TAGGED",
            iconClass:"ri-map-pin-user-line  profile__nav_icon"
        }
    ]
    return ( 
          <Box margin={{md:"4em auto 0 auto",xs:".5em auto",base:".5em auto 0 auto"}}  width={{lt:"900px",xs:"90%",base:"100%"}} color="#acacacfd" borderTop="1px solid grey" paddingBottom={{md:"0",base:"5px"}} borderBottom={{md:"none",base:"1px solid grey"}}>
              <Flex width={{md:"250px",base:"100%"}}  margin="0 auto" cursor="pointer" justifyContent={{md:"",base:"space-around"}} transform={{md:"translateX(0)",xs:"translateX(-.8em)",base:"translateX(0)"}}>
              {  tabs.map((tab,i) => (
                  i == 1 ?
                <Flex onClick={()=> setActive(tab.name)} color={active == tab.name ? "white" : "inherit"} transform={"translateY(-.1em)"} borderTop={active== tab.name ? "1px solid white" : ""} fontSize="13px" margin={{md:"0 3em",base:"0"}} paddingTop={{base:"5px",md:"13px"}}>
                    <i  className={tab.iconClass}></i>
                    <Text transform={"translateX(.3em)"} display={{md:"block",base:"none"}}>{tab.name}</Text>
                </Flex> :
                <Flex onClick={()=> setActive(tab.name)} transform="translateY(-.1em)" borderTop={active== tab.name ? "1px solid white" : ""} fontSize="13px" color={active == tab.name ? "white" : "inherit"}   paddingTop={{base:"5px",md:"13px"}}>
                    <i  className={tab.iconClass}></i>
                    <Text transform="translateX(.3em)" display={{md:"block",base:"none"}}>{tab.name}</Text>
                </Flex>
            ) )}
              </Flex>
            
          </Box>
     );
}
 
export default ProfileNavigation;