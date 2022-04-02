import { Box,Flex } from "@chakra-ui/react";
import Story from "./Story"

const Stories = () => {
    const stories = [{
        username:"meg__",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-pixabay-207582_fecuov.jpg"
    },{
    username:"_Kloe",
    image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915937/pexels-wellington-cunha-1918445_pjebkp.jpg"
    },{
        username:"Paula",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-jorge-fakhouri-filho-2701570_m336qt.jpg"
    },{
        username:"Jest_je",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/2_idpurp.jpg"
    },{
        username:"Mya",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-mentatdgt-937453_ehso5k.jpg"
    },{
        username:"Mya",
        image:"https://res.cloudinary.com/dles2mycv/image/upload/v1648915936/pexels-david-bartus-610293_1_qoi3pz.jpg"
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