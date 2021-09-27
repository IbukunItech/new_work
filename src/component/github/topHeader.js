import React from 'react'
import styled from 'styled-components'
import Icon from './githubImg/icon.svg'

const topHeader = ({clr}) => {
    return (
        <Container>
            <Wrapper>
                <Logo src={Icon} />
                <Links>
                    <Link>Overview</Link>
                    <Link clr>Release Note</Link>
                    <Link clr>Help</Link>
                </Links>
                
                
                
            </Wrapper>
        </Container>
    )
}

export default topHeader
const Container = styled.div`
width:100%;
height: 70vh;
background-image:url('background.svg');
background-size:contain;
background-position:center;
background-color:#24292e
`
const Wrapper = styled.div`
padding:20px 0px;
display:flex;
justify-content: center;
flex-direction:column;
align-items:center;

`
const Logo = styled.img`
width:100px;
height:100px;
border-radius:50%;
margin-top:20px;
object-fit:cover
`
const Link = styled.div`
margin:0 10px;
font-weight:bold;
color:${({clr}) => (clr ? '#9F7BE1':'white')};
cursor:pointer;

:hover{
    text-decoration: underline
}
`

const Links = styled.div`
display:flex;
justify-content:center;
align-items:center
`