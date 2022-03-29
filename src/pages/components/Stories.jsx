import { Box,Flex } from "@chakra-ui/react";
import Story from "./Story"

const Stories = () => {
    const stories = [{
        username:"meg__",
        image:"https://images.unsplash.com/photo-1525786210598-d527194d3e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },{
    username:"_Kloe",
    image:"https://images.unsplash.com/photo-1648368827729-a83618823317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Paula",
        image:"https://images.unsplash.com/photo-1648372152629-da8be6035529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Jest_je",
        image:"https://images.unsplash.com/photo-1648371477306-fbe17ff431a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80"
    },{
        username:"Mya",
        image:"https://images.unsplash.com/photo-1648449228393-abbbb9c2f32a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },{
        username:"Mya",
        image:"https://images.unsplash.com/photo-1648376306856-906ebf86b087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }

]
    return ( 
        <div className="story__navigation">
            <div className="story__wrapper">
                <Flex width={{sm:"100%",base:"370px"}} justifyContent={{sm:"space-evenly",base:"space-between"}}>
                {
                    stories.map(story => (<Story story = {story} />))
                }
            
            </Flex>
            </div>
        </div>
        
     );
}
 
export default Stories;