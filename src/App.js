import React from 'react';
import styled from 'styled-components'
import img from './img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
    return (
        <StyledMain>
            <StyledSideHeader>
            <StyledHeaderContent>
            <StyledParagraph>Lorem.me</StyledParagraph>
            <StyledGroup>
              <StyledHeading4>Hello</StyledHeading4>
              <StyledHeading>I'm Someone</StyledHeading>
              <StyledParagraph>Lorem Ipsum is simply dummy text.</StyledParagraph>
              <StyledButton>Click Me</StyledButton>
            </StyledGroup>
            <div> social </div>
            </StyledHeaderContent>
            </StyledSideHeader>
            <StyledSection>
              <StyledMainContent>
              <img src={img} alt="" width="1170rem"></img>
              </StyledMainContent>
              <StyledSubContent>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <StyledButtonFull>VIEW RESUME</StyledButtonFull>
              </StyledSubContent>
            </StyledSection>
            <StyledSidebar>
              <FontAwesomeIcon icon={faSignal} size={"2x"} color={"white"} rotation={270}/>
              <StyledSideTabs>
                <StyledSideLink href="#">Home</StyledSideLink>
                <StyledSideLink href="#">Home</StyledSideLink>
                <StyledSideLink href="#">Home</StyledSideLink>
                <StyledSideLink href="#">Home</StyledSideLink>
              </StyledSideTabs>
            </StyledSidebar>
       </StyledMain>
    );
}

export default App;

const StyledMain = styled.main `
  display: flex; 
  flex-flow: row nowrap;
  min-width: 1440px;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  &>*{
    flex-grow: 2;
    width: 33%;
  }
`;
const StyledSidebar = styled.nav `
background: #2A3344;
padding: 20px 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width:100px !important;
flex-grow: 0;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items:center;
&>*{

}
`;
const StyledSideTabs= styled.div`
flex-grow: 1;
display: flex;
align-items: center;
flex-flow: column nowrap;
justify-content: center;
width:fit-content;
`;
const StyledSideLink= styled.div`
color:white;
width:fit-content;
transform: rotate(90deg);
margin:50px 0;
&:hover{
background: red;
border-radius: 5px;
}
`;
const StyledSection = styled.section `
background: #FFFFFF;
flex-grow: 10;
display: flex; 
flex-flow: column nowrap;
`;
const StyledMainContent = styled.div`
  height:75%;
  overflow:hidden;
`;
const StyledSubContent = styled.div`
  background:white;
  display: flex; 
  flex-flow: column nowrap;
  jjustify-content:space-around;
  align-items: flex-start;
  padding: 0 40px;
  &>*{
    flex-grow: 5;
    
  }

`;
const StyledSideHeader = styled.header `
background: radial-gradient(50% 50% at 49.9% 50%, #0C438D 0%, #154D9A 99.99%, #154D9A 100%);
box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);

`;
const StyledHeaderContent = styled.div`
  position: absolute;
  left: 87px;
  top: 0px;
  bottom: 20px;
  display: flex; 
  flex-flow: column nowrap;
  justify-content:space-between;
  
`;
const StyledGroup = styled.div`
&>*{
  margin: 40px 0 ;
}
`;
const StyledHeading = styled.h1`
  font-size:7.6rem;
  color: white;
  margin:0;
`;
const StyledHeading4 = styled.h1`
  color: #7E8BFF;
  margin:0;
`;
const StyledParagraph = styled.p`
  color:white;
  margin:0;
  font-size:1.5em;
`;

const StyledButton= styled.button`
  color:white;
  font-family: Allerta;
  font-style: normal;
  font-weight: normal;
  font-size:1em;
  background:transparent;
  outline:none;
  width: 176px;
height: 62px;
  border: 1px solid white;
`;
const StyledButtonFull= styled.button`
  color:white;
  width: 176px;
  height: 62px;
  background:#2A3344;
  outline:none;
  border:none;
`;