import { Grid, GridItem, Flex, Spacer, Box } from "@chakra-ui/react";

const GridDisplay = ({ cluster }) => {
    if (cluster.type == "mansory") {
        return (
            <Grid width="100%" height={{lg:"600px",base:"fit-content"}}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={{base:1,md:4}}
                overflowY="hidden"
                marginBottom={{md:"1em",base:".3em"}}
            >
                {
                    cluster.posts.map((post, i) => (
                        i == 0 ? <GridItem height="fit-content" rowSpan={2} colSpan={2} bg='tomato' position={"relative"} >
                            <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1 }} backdropFilter={"blur(5px)"} width="100%" height="100%" transition={".1s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                            <img src={post.image} alt="" />
                        </GridItem> :
                            <GridItem height="fit-content" colSpan={1} bg='papayawhip' position="relative" >
                                <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1, backdropFilter: "blur(5px)" }} width="100%" height="100%" transition={".3s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                                <img src={post.image} alt="" />
                            </GridItem>
                    ))
                }
                {/* <GridItem rowSpan={2} colSpan={2} bg='tomato' >c</GridItem>
                <GridItem colSpan={1} bg='papayawhip' ></GridItem>
                <GridItem colSpan={1} bg='papayawhip' ></GridItem> */}

            </Grid>
        );
    } else if (cluster.type == "equal") {
        return (
            <Grid
            height={{lg:"600px",base:"fit-content"}}
                templateColumns='repeat(3, 1fr)'
                gap={{base:1,md:4}}
                marginBottom={{md:"1em",base:".3em"}}
                overflowY="hidden"
               
                
            >
                {
                    cluster.posts.map(post => <GridItem height="fit-content" bg='papayawhip' position="relative" >
                        <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1, backdropFilter: "blur(5px)" }} width="100%" height="100%" transition={".3s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                        <img src={post.image} alt="" />
                    </GridItem>)
                }


            </Grid>
        )
    }else if(cluster.type =="mansory-reversed"){
        return (
            <Grid width="100%" height={{lg:"600px",base:"fit-content"}}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={{base:1,md:4}}
                marginBottom={{md:"1em",base:".3em"}}
                overflowY="hidden"
                
            >
                {
                    cluster.posts.map((post, i) => (
                        i == 1 ? <GridItem rowSpan={2} colSpan={2} bg='tomato' width="100%" height="fit-content" position={"relative"} >
                            <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1 }} backdropFilter={"blur(5px)"} width="100%" height="100%" transition={".1s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                            <img src={post.image} alt="" />
                        </GridItem> :
                            <GridItem height="fit-content" colSpan={1} bg='papayawhip' rowSpan={1} position="relative" >
                                <Box color="white" bgColor="rgba(22, 22, 22, 0.295)" position={"absolute"} opacity="0" display={{md:"flex",base:"none"}} alignItems={"center"} justifyContent="center" _hover={{ opacity: 1, backdropFilter: "blur(5px)" }} width="100%" height="100%" transition={".3s ease"}><Flex width="100px"><span><i className="ri-heart-fill"></i> {post.likes}</span> <Spacer /> <span><i class="ri-chat-3-fill"></i> {post.comments}</span> </Flex></Box>
                                <img src={post.image} alt="" />
                            </GridItem>
                    ))
                }
                {/* <GridItem rowSpan={2} colSpan={2} bg='tomato' >c</GridItem>
                <GridItem colSpan={1} bg='papayawhip' ></GridItem>
                <GridItem colSpan={1} bg='papayawhip' ></GridItem> */}

            </Grid>
        );
    }
}

export default GridDisplay;
