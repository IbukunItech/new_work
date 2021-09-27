import React from "react"
import styled from "styled-components"

const MyButton = ({name}) => {
    return(
        <Container>
            <Button> {name} </Button>
        </Container>
    )
}
export default MyButton

const Container = styled.div`
padding: 10px;
border-radius: 3px;
margin: 10px;
background-color: ${({ bg }) => bg ? "#0069d9" : "#2F54FF" };
transition: all 500ms;
transform: scale(1);
width: 120px;
height: 40px;
font-size:13px;


:hover {
    cursor:pointer;
    background-color: ${({ bg }) => bg ? "#2F54FF" : "#0069d9"};
    transform: scale(1.05);
}
`;
const Button = styled.div`
display: flex;
width: 120px;
height: 40px;
align-items: center;
justify-content: center;
color: white;
`;