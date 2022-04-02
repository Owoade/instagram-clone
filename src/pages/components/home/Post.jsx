import { Box,Flex,Text,Spacer,Input } from "@chakra-ui/react";
import {useRef} from "react"
const Post = ({post}) => {
    const inputRef = useRef({current:0})
    return ( 
       <Box width={"100%"} color="white"  marginBottom={"1em"} padding="1em 0" backgroundColor="black"   border="1px solid grey" borderRadius={"20px"}>
           {/* Top Box */}
          <Flex width={"100%"} padding={{xs:"0 20px",base:"0 10px"}} marginBottom={"1em"}>
            <Flex width={"90px"}>
                    <img src={post.p_pic} alt="" className="avatar"  />
                    <Spacer />
                    <Box ml='3'>
                        <Text fontWeight='bold' transform={"translateY(.5em)"}>
                        {post.username}
                        </Text>
                        
                    </Box>
                </Flex>
                <Spacer />
                <i className="ri-more-fill" style={{transform:"translateY(.5em)"}}></i>
          </Flex>
          <img src={post.image} alt="" style={{width:"100%"}} />
          {/* Bottom Box */}

          <Box padding={{xs:".7em 20px",base:".7em 10px"}}>
              {/* Icon Box */}
              <Box>
                  {/* Icon Box */}
                  <Flex width={"100%"}>
                      {/* Left Icons */}
                      <Flex width={"80px"}>
                         { post.liked==true ? <i className="ri-heart-fill" style={{color:"red",display:"block",fontSize:"18px"}}></i>:<i className="ri-heart-line" style={{display:"block",color:"white",fontSize:"18px"}}></i> }
                         <Spacer />
                         <i className="ri-chat-3-line" onClick={()=> inputRef.focus()} style={{fontSize:"18px"}}></i>
                         <Spacer />
                         <i className="ri-send-plane-2-line" style={{fontSize:"18px"}}></i>
                      </Flex>
                        <Spacer />
                      <i className="ri-bookmark-line" style={{fontSize:"18px"}}></i>
                     
                  </Flex>
              </Box>
              <Text fontWeight={"bold"} fontSize="13px" margin={"15px 0"}>{post.likes } likes</Text>
              <Text fontSize={{xs:"inherit",base:"14px"}}>
                  {post.caption}
              </Text>
              {post.comments > 0 ? <Text color={"grey"} margin=".5em 0" fontSize={"14px"}>View all {post.comments} comments</Text> : <></>} 
              {/* Last Container */}
              <Flex width={"100%"} marginTop="20px" justifyContent={"space-between"}>
                <img src={post.p_pic} alt="" className="avatar post__comment_avatar"  />
                
                 <Box backgroundColor={"black"} width={{xs:"90%",base:"100%"}} border="1px solid grey" cursor="text" borderRadius={"20px"} position="relative" padding={{xs:"0",base:".5em 0"}}>
                     <input type="text" ref={inputRef} placeholder="Type your comment..."  className="post__comment_box" />
                     <div className="comment__icons">
                        <i className="ri-image-line comment__icon"></i>
                        <i className="ri-emotion-happy-line comment__icon"></i>
                        <i className="ri-attachment-line comment__icon"></i>
                     </div>
                     
                     

                 </Box>

              </Flex>
          </Box>
           
            
       </Box>
     );
}
 
export default Post;