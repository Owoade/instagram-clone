import { Box } from "@chakra-ui/react";
import Post from "./Post"
const Posts = () => {
    const posts =[ 
        {
            image : "https://images.unsplash.com/photo-1628165471922-ac39730508c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80",
            username:"Joyy",
            p_pic:"https://images.unsplash.com/photo-1648376306856-906ebf86b087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            likes:3000,
            comments:40,
            caption:"Photo by No-Limits Adventure Cape Verde on March 28, 2022.",
            liked:true
        },{
            image:"https://images.unsplash.com/photo-1648372152629-da8be6035529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=413&q=80",
            username:"Mikee",
            p_pic:"https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            likes:300,comments:30,
            caption:"Photo by @music_digs_the_sky on March 28, 2022. May be an image of text that says '|said, mo Uh, push it, push it, click-click coi Nicki Leray Minaj A'.",
            liked:true
        },
        {
            
            caption:"Photo by All Culture in London, United Kingdom. May be a Twitter screenshot of 1 person and text that says 'Nicki Minaj @NICKIMINAJ 1h You just got to witness in real time what happens in a man's soul when he looks over to the woman he loves & sees her holding back tears from a little joke at her expense. This is what any & every real man feels in that instant. while y' all seeing the joke he's seeing her pain All Culture'.",
            likes:90,
            comments:100,username:"Mikee",
            p_pic:"https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            liked:false,
            image:"https://images.unsplash.com/photo-1648159643766-1ba916a2bccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },{
            image:"https://images.unsplash.com/photo-1648326311535-21895c185fbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            caption:"Photo by All Culture in London, United Kingdom. May be a Twitter screenshot of 1 person and text that says 'Nicki Minaj @NICKIMINAJ 1h You just got to witness in real time what happens in a man's soul when he looks over to the woman he loves & sees her holding back tears from a little joke at her expense. This is what any & every real man feels in that instant. while y' all seeing the joke he's seeing her pain All Culture'.",
            likes:90,
            comments:100,username:"Joe_e",
            p_pic:"https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            liked:false

        }
    ]
    return ( 
        <Box>
           {
               posts.map(post => (
                   <Post post={post} />
               ))
           }
        </Box>
     );
}
 
export default Posts;