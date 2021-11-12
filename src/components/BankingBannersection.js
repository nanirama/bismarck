import * as React from "react"
import styled from "styled-components";
import bgImg from "../assets/images/banking-banner.png";

const BankingBanner = () => (
  <Wrapper>
     <Container>
        <Banner>
           <Heading>Private Banking no longer just for the<br /> super rich</Heading>
           <Paragraph>Otto Von Bismarck influence has shaped the financial industry for over 200 years. Now, we’re<br/> bringing it to the 21st century and giving you the opportunity to join the Count Bismarck famil</Paragraph>
        </Banner>
     </Container>
  </Wrapper>
  )
  export default BankingBanner;
    
const Wrapper = styled.div`
position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height:430px;
    background-color: #202252;
    z-index: -1;
  }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Banner = styled.div`
background-image: url(${bgImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 500px;
margin-top: -80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 15px;
`;
const Heading = styled.h2`
color: #fff;
margin:0;
line-height: 56px;
  @media only screen and (max-width:991px){
    line-height: 45px;
  }
  @media only screen and (max-width:599px){
    line-height: 35px;
  }
`;
const Paragraph = styled.p`
color: #fff;
`;
