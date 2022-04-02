import { Box,Input } from "@chakra-ui/react";
import GridDisplay from "./components/GridDisplay";
import Header from "./components/header/Header";
import MobileNavigation from "./components/MobileNavigation";
import Wrapper from "./components/Wrapper";

const Explore = () => {
    const clusters = [
        {
            type: "mansory",
            posts: [
                {
                    likes: 20,
                    comments: 30,
                    image: "https://images.unsplash.com/photo-1606987482245-560456106cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
                },
                {
                    likes: 29,
                    comments: 10,
                    image: "https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZlbWFsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
                },
                {
                    likes: 200,
                    comments: 300,
                    image: "https://images.unsplash.com/photo-1521254162137-b0760dda8da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxmZW1hbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
            ]

        }
        ,{
            type:"equal",
            posts:[
                {
                    likes:200,
                    comments:300,
                    image:"https://images.unsplash.com/photo-1645318801217-143533cb559f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                },{
                    likes:50,
                    comments:60,
                    image:"https://images.unsplash.com/photo-1645517054779-f5cc60567a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pZ2VyaWF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                },{
                    comments:300,
                    likes:20,
                    image:"https://images.unsplash.com/photo-1601540752291-ddf07455f670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                },{
                    comments:300,
                    likes:20,
                    image:"https://images.unsplash.com/photo-1608142172765-6949c94646ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                },{
                    image:"https://images.unsplash.com/photo-1622554129912-c541b2542385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                    comments:300,
                    likes:20

                },{
                    comments:20,
                    likes:200,
                    image:"https://images.unsplash.com/photo-1441861539200-6208cf4a122f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
            ]

        },
        {
            type:"mansory-reversed",
            posts:[
               {
                    image:"https://images.unsplash.com/photo-1609747221137-251e7bb65f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxuaWdlcmlhbiUyMG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
                    comments:200,
                    likes:102
                },
                {
                    comments:200,
                    likes:102,
                    image:"https://images.unsplash.com/photo-1516689807549-04b4c3b4ee35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxuaWdlcmlhbiUyMG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                },{
                    image:"https://images.unsplash.com/photo-1644085128570-3f9782b47f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                    likes:100,
                    comments:102
                }
                
            ]
        }
    ]
    return (
        <Box position={"relative"}  bgColor={"#323232"} height="fit-content">

            <Header active={"Explore"} />
            <Box display={{md:"none",base:"block"}} border="1px solid grey" width="100%" bgColor={"black"} padding="1em 0">
               <input type="text" placeholder="Search..." className="explore__search_input" />
            </Box>
            <Box width="100%" backgroundColor={"#323232 !important"} padding={{xs:"2em 0",base:".2em 0"}} position={"relative"} height="100%">
                
                    <Box width={{md:"940px",base:"98%"}} margin="0 auto">
                       {
                           clusters.map(cluster => <GridDisplay cluster={cluster} />)
                       }
                        
                    </Box>
                
                <MobileNavigation active={"Explore"} />
            </Box>
        </Box>
    );
}

export default Explore;