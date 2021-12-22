import * as React from "react"
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import { SunnyMorning } from 'moving-letters'
import SunnyMorningNew from './SunnyMorningNew'


import video from "../assets/videos/video1.mp4";
const BankingBanner = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bankingNanneBgImg: file(relativePath: { eq: "banking-banner.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const imageData = data.bankingNanneBgImg.childImageSharp.fluid
  return(
  <Wrapper>
     <Container>
        <Banner>
        <video playsinline loop muted autoPlay width='100%' height='100%' preload='auto' >
        <source src={video} type="video/mp4"/>
        <source src={video} type="video/ogg"/>
       </video>
            <VideoContent>
              <SunnyMorningNew text='Elegance, Precision' />
              <SunnyMorningNew text='Commuity, Performance' />
            </VideoContent>
           
        </Banner>
     </Container>
  </Wrapper>
  )
}
export default BankingBanner;
    
const Wrapper = styled.div`
position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;    
    background-color: #202252;
    z-index: -1;
    @media only screen and (min-width:768px){
      height: 100%;
    }
    @media only screen and (max-width:767px){
      height: 100%;
    }
  }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (min-width:768px){
  padding: 0 15px;
}
@media only screen and (max-width:767px){
  padding: 0px;
}
`;
const VideoContent = styled.div`
position: absolute;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
z-index: 99 !important;
width:65% !important;
max-width:100%;
h1{
  color: #fff;
  margin: 0;
  font-size:3rem;
  text-shadow: 1px 1px 6px #000000;
  line-height: 56px;
  @media only screen and (max-width:991px){
    line-height: 45px;
  }
  @media only screen and (max-width:599px){
    line-height: 35px;
  }
  @media only screen and (min-width:768px){
    font-size:3rem;
  }
  @media only screen and (max-width:767px){
    font-size:2rem;
  }
  @media only screen and (max-width:479px){
    font-size:1.5rem;
  }
}
`;
const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0px;
position: relative;
@media only screen and (min-width:768px){
  width:100% !important;
  height: auto;
}
@media only screen and (min-width:768px) and (max-width:830px){
  width:740px !important;
}
@media only screen and (max-width:767px){
  max-width:100%;
}
`;
const Heading = styled.h2`
color: #fff;
margin: 0;
text-shadow: 1px 1px 6px #000000;
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
const VideoText = styled.p`
color: #fff;
position: absolute;
right: 20px;
bottom: 20px;
margin:0;
  a{
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
  }
`;
const SvgIcon = styled.span`
padding: 2px 8px 0 0px;
float: left;
`;
