import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import img from "../component/github/githubImg/twit.jpg"
import {FcHome, FcAbout, FcSettings, FcBusinessContact} from "react-icons/fc"
import {FiNavigation} from "react-icons/fi"

const HeaderNav = () => {
    return(
        <Container>
            <Wrapper>
                <Logo src={img} />
                <TagLines>
                    <SubTagLines to="/"> <FcHome/> </SubTagLines>
                    <SubTagLines to="/newProject"> <FcAbout/> </SubTagLines>
                    <SubTagLines to="/gameScreen"> <FcSettings/> </SubTagLines>
                    <SubTagLines to="/homeScreen"> <FcBusinessContact/> </SubTagLines>
                    <SubTagLines to="/github"> <FiNavigation/> </SubTagLines>
                </TagLines>
            </Wrapper>
            </Container>
    )
}

export default HeaderNav

const Container = styled.div`
Width: 100%;
height: 90px;
background-color: teal;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.img`
width: 250px;
height: 50px;
color: white;
object-fit: contain;
`;
const TagLines = styled.div`
display: flex;
`;
const SubTagLines = styled(Link)`
margin: 0 10px;
text-decoration: none;
width: 70px;
height: 35px;
margin: 0 10px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all, 350ms;

:hover {
  background-color: lightgray;
  font-size: 30px;
}
`;