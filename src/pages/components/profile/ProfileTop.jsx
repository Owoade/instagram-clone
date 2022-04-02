import { Box, Flex, Text,Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const ProfileTop = () => {
    return (
        <Box width={{lt:"900px",xs:"90%",base:"100%"}} bgColor={{xs:"#323232",base:"black"}} margin="0 auto" paddingTop={{xs:"0",base:"2em"}}>
            <Flex display={{sm:"flex",base:"block"}}>
                {/* Avatar */}
                <Box height="fit-content" width="fit-content" background=" linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);" borderRadius={"50%"} padding=".2em" overflow="hidden" display="flex" justifyContent={"center"} alignItems="center" margin={{md:"0 0 10%",sm:"0%",base:"0px auto 0 auto"}}>
                    <img src="https://images.unsplash.com/photo-1611367540679-d94566094025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" className="big__avatar" />
                </Box>

                {/* Profile Info */}
                <Box transform={{md:"translate(5em,1em)",base:"translate(2em,1em)"}} display={{sm:"block",base:"none"}}>
                    
                    <Flex>
                        {/* Name< Button and icons */}
                        <Flex justifyContent={{md:"space-between",base:""}} width="300px">
                            <Text fontSize={{md:"27px",base:"22px"}} color="white" fontWeight="100">Magrot_Kelly</Text>
                            <Button display={{md:"flex",base:"none"}} justifyContent="center" alignItems="center" bgColor="black" variant='solid' width="7em" fontSize={"13px"} height="2.2em" transform="translate(.8em,.3em)" paddingTop=".2em" color="white" border="1px solid grey" borderRadius="20px">
                                Edit Profile
                            </Button>
                            <i className="ri-settings-2-line profile__settings_icon"></i>
                        </Flex>
                        
                        


                    </Flex>
                    {/* Stats */}
                    <Flex width="300px" display={{md:"flex",base:"none"}}  margin="1em 0" justifyContent={"space-between"}>
                            <Box color="white">
                                <Text fontWeight={"bold"}>10 <span style={{display:"inline-block",fontWeight:"lighter"}}> posts</span></Text> 
                            </Box>
                            <Box color="white">
                                <Text fontWeight={"bold"}>30 <span style={{display:"inline-block",fontWeight:"lighter"}}> followers</span></Text> 
                            </Box>
                            <Box color="white">
                                <Text fontWeight={"bold"}>20 <span style={{display:"inline-block",fontWeight:"lighter"}}> following</span></Text> 
                            </Box>
                        </Flex>
                        {/* USers description */}
                        <Box color="white" display={{md:"block",base:"none"}}>
                            <Text fontWeight="extrabold">Magrot Kelly</Text>
                        <span>
                            I am Magrott 😉 <br />
                            A content creator <br />
                            👨‍💻 | Econ major <br />
                            📷 | DM for business & Promotion <br />
                            📩 | <Link to="/profile" style={{color:"#2c9abbfd"}} >me@magrotCreates.com</Link>
                        </span>
                        </Box>
                        {/* Tabs */}
                        
                        <Button display={{md:"none",sm:"block",base:"none"}} justifyContent="center" alignItems="center" bgColor="black" variant='solid' width="80%" fontSize={"13px"} height="2.5em"  paddingTop=".4em" color="white" border="1px solid grey" borderRadius="20px" >
                                Edit Profile
                            </Button>
                </Box>
                

            </Flex>
            <Box color="white" textAlign={{sm:"left",base:"center"}} display={{ md: "none", base: "block" }} margin={{xs:"1em 0 0 0",base:"1.5em 0"}}>
                
                <Text fontWeight="extrabold">Magrot Kelly</Text>
                <span>
                    I am Magrott 😉 <br />
                    A content creator <br />
                    👨‍💻 | Econ major <br />
                    📷 | DM for business & Promotion <br />
                    📩 | <Link to="/profile" style={{ color: "#2c9abbfd" }} >me@magrotCreates.com</Link>
                </span>
            </Box>
            <Flex width="100%" bgColor="#323232" display={{ md: "none", base: "flex" }} marginTop=".5em" justifyContent={"space-around"} borderTop="1px solid grey" paddingTop=".5em" >
                <Box color="white" textAlign={"center"}>
                    <Text fontWeight={"bold"}>10 <span style={{ display: "block", fontWeight: "lighter",color:"whitesmoke" }}> posts</span></Text>
                </Box>
                <Box color="white" textAlign={"center"}>
                    <Text fontWeight={"bold"}>30 <span style={{ display: "block", fontWeight: "lighter",color:"whitesmoke" }}> followers</span></Text>
                </Box>
                <Box color="white" textAlign={"center"}>
                    <Text fontWeight={"bold"}>20 <span style={{ display: "block", fontWeight: "lighter",color:"whitesmoke" }}> following</span></Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default ProfileTop;