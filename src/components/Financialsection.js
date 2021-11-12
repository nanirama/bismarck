import * as React from "react"
import styled from "styled-components";
import bgImg from "../assets/images/bank-card.jpg";

const Financial = () => (
  <Wrapper>
     <Container>
           <Heading>WE SOLVE YOUR FINANCIAL SECURITY<br/> WITH TECHNOLOGY AND DATA,<br/> A WHOLE LOT OF DATA.</Heading>
     </Container>
  </Wrapper>
  )
  export default Financial;
    
const Wrapper = styled.div`
background-image: url(${bgImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 150px 0px;
    @media only screen and (max-width:991px){
        padding: 100px 0;
    }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Heading = styled.h2`
color: #fff;
margin:0;
font-size: 42px;
line-height: 50px;
  @media only screen and (max-width:991px){
    font-size:34px;
    line-height: 40px;
        br{
            display: none;
        }
  }
  @media only screen and (max-width:599px){
    font-size:30px;
    line-height: 35px;
  }
  @media only screen and (max-width:479px){
    font-size:22px;
    line-height: 30px;
  }
`;
