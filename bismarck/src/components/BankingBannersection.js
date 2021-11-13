import * as React from "react"
import styled from "styled-components";
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
     <BackgroundImage
         Tag="section"
         fluid={imageData}
      >
        <Banner>
           <Heading>Private Banking no longer just for the<br /> super rich</Heading>
           <Paragraph>Otto Von Bismarck influence has shaped the financial industry for over 200 years. Now, we’re<br/> bringing it to the 21st century and giving you the opportunity to join the Count Bismarck famil</Paragraph>
           <VideoText>
           <AnchorLink href='#'>
             <SvgIcon>
             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
</SvgIcon>
 Video Content
 </AnchorLink>
 </VideoText>
        </Banner>
      </BackgroundImage>
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
    height: 430px;
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
height: 500px;
margin-top: -80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 15px;
position: relative;
`;
const Heading = styled.h2`
color: #fff;
margin: 0;
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
