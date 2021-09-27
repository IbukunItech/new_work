import React, {useState, useEffect} from 'react'
import styled from "styled-components"

const GameScreen = () => {

const [userInput, setUserInput] = useState(0)
const [computerInput, setComputerInput] = useState(0)

const computerRandom = () =>{
    setComputerInput(Math.floor(Math.random() *5))
}

useEffect(() =>{
    setInterval(() =>{
        computerRandom();
    }, 10000);
    
},[])

    return (
        <div>
<Container>
<Wrapper>
<WrapperName>MARY's GAME</WrapperName>
<WrapperRow>
    <WrapperRowMe>
        <WrapperBoxMe>{userInput}</WrapperBoxMe>
        <NumberBox>
            <Number onClick={() =>setUserInput(1)}>1</Number>
            <Number onClick={() =>setUserInput(2)}>2</Number>
            <Number  onClick={() =>setUserInput(3)}>3</Number>
            <Number  onClick={() =>setUserInput(4)}>4</Number>
            <Number onClick={() =>setUserInput(5)}>5</Number>
        </NumberBox>
        <WrapperTextMe>Ibukun</WrapperTextMe>
    </WrapperRowMe>
<WrapperRowComputer>
<WrapperBoxMe>{computerInput}</WrapperBoxMe>
        <WrapperTextMe>Computer</WrapperTextMe>
</WrapperRowComputer>
</WrapperRow>
<Result> {userInput === computerInput ? <span>You Win!</span>: <span>You Lose</span>} </Result>

</Wrapper>
</Container>
        </div>

)
}
export default GameScreen

const Container = styled.div`
width:100%;
height:100%;
min-height:100vh;
background-color: teal;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 20px;
`
const WrapperName = styled.div`
padding: 30px 0;
font-size: 70px;
font-weight: bold;
margin-bottom: 20px;
`
const WrapperRow = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
flex-wrap: wrap;
`
const WrapperRowMe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`
const WrapperRowComputer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`
const WrapperBoxMe = styled.div`
width: 250px;
height: 200px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: 500;
border-radius: 7px;
cursor: pointer;
`
const WrapperTextMe = styled.div`
font-size: 20px;
padding: 10px 0;
`
const Result = styled.div`
width: 150px;
padding: 15px;
background-color: red;
text-align: center;
font-size: 19px;
border-radius: 7px;
cursor: pointer;
`
const NumberBox = styled.div`
display: flex;
`
const Number = styled.div`
font-size: 15px;
padding: 4px 10px;
background: white;
margin: 8px 4px;
border-radius: 50px;
cursor: pointer;
`
