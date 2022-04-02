import { Box,GridItem,Grid,Flex,Spacer,Text } from "@chakra-ui/react";

const ProfileResources = ({active}) => {
    const posts = [
        {
            likes:200,
            comments:300,
            image:"https://images.unsplash.com/photo-1608153488161-803b502750fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },{
            likes:50,
            comments:60,
            image:"https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },{
            comments:300,
            likes:20,
            image:"https://images.unsplash.com/photo-1568166460861-fcaf9bb7c1a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },{
            comments:300,
            likes:20,
            image:"https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },{
            image:"https://images.unsplash.com/photo-1542114922-2a0579d95096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            comments:300,
            likes:20

        },{
            comments:20,
            likes:200,
            image:"https://images.unsplash.com/photo-1585602279350-5bd137238b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        },
        ,
        {
            comments:20,
            likes:100,
            image:"https://images.unsplash.com/photo-1634304669792-b774a8c9ac7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },{
            comments:20,
            likes:10,
            image:"https://images.unsplash.com/photo-1620274549078-11bf5291cb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
        },{
            comments:20,
            likes:10,
            image:"https://images.unsplash.com/photo-1616186692359-e14c5224e4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        }
        
    ]
    if(active == "POST"){
        return ( 
            <Grid width={{lt:"900px",xs:"90%",base:"100%"}}  templateColumns='repeat(3, 1fr)' gap={{xs:4,base:1}} margin={{lt:"2em auto",xs:"2em auto",base:"0 auto 3em auto"}}>
                {
                    posts.map(post => (<GridItem w={{lt:'290px',base:"100%"}}  bg='blue.500' position={"relative"}>
                        <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1, backdropFilter: "blur(5px)" }} width="100%" height="100%" transition={".3s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                        <img src={post.image} style={{width:"100%"}} alt="" />
                    </GridItem>))
                }
            
            
          </Grid>
         );
    }else if(active == "SAVED"){
        return(
            <Box  textAlign="center" color="white" margin={{xs:"1em 0",base:"1em 0 4em 0"}}>
                <i className="ri-bookmark-line profile__resource_icon" ></i>
                <Text fontSize="27px" color="white" fontWeight="100">Saved</Text>
                <Text width={{sm:"400px",base:"100%"}} margin="0 auto" fontSize={{xs:"14px",base:"12px"}}>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</Text>
            </Box>
        )
    }else{
        return(
            <Box textAlign="center" color="white" margin={{xs:"1em 0",base:"1em 0 4em 0"}}>
                <i className="ri-map-pin-user-line profile__resource_icon" ></i>
                <Text fontSize="27px" color="white" fontWeight="100">Photos of you</Text>
                <Text width={{sm:"400px",base:"100%"}} margin="0 auto" fontSize={{xs:"14px",base:"12px"}}>When people tag you in photos, they'll appear here.</Text>
            </Box>
        )
    }
    
}
 
export default ProfileResources;