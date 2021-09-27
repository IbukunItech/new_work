import React from 'react'
import styled from "styled-components"
import img from "../component/github/githubImg/photo.png"
import MyButton from './MyButton'

const NewProject = () => {
    return (
        <Container> 
            <Wrapper> 
                <Box> 
                    <Title> Best WP Project Bidding Theme – Freelance Marketplace 2021
                    </Title>
                    <Content> The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support! 
                         </Content>
                         <Sub> Starting from <span> <p>$</p>149 </span> 
                         <MyButton name="See Pricing"/>
                         </Sub>
                    <Button>
                       <MyButton name="VIEW DEMO"/>
                       <MyButton name="PURCHASE THEME"/>
                       
                    </Button>
                    <Words> Latest Update Released on 19 August 2021 </Words>
                    <SubWords> Works with WordPress v5.8 </SubWords>
                     </Box>
                     <Image src={img} />
                </Wrapper>
                 </Container>
    )
}

export default NewProject

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url("proj.bag.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 100vh;
width: 100%;
`;
const Box = styled.div`
width: 400px;
height: 400px;
color: white;
margin: 5px;
min-width: 300px;
`;
const Content = styled.div`

`;
const Image = styled.img`
min-width: 300px;
width: 400px;
height: 500px;
object-fit: contain;
margin: 5px;

`;
const Button = styled.div`
display:flex;
`;
const Title = styled.h2``;
const Sub = styled.div`
display: flex;
margin: 5px 0;
align-items: center;

span{
margin-left: 5px;
color: #0c8e09;
font-weight: bold;
display: flex;

p{
    margin: 0;
    font-size: 10px;
}
}

`;
const Words = styled.div``;
const SubWords = styled.div``;