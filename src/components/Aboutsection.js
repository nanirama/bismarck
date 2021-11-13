import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import bgImg from "../assets/images/hero-banner.png";
import bgImg2 from "../assets/images/about-tlt.png";

const About = () => (
    <Wrapper id="membership">
       <Container>
          <Heading>About Us</Heading>
          <p>Count Bismarck Modern Private Banking is fintech plattform offering unqies aceed to<br /> digital banking.  we are democratising ....</p>
          <AboutBlock>
             <Grid>
                <Item>
                   <AboutBox>
                      <TextBlock>
                         <h3>Digital Banking</h3>
                         <p>Gain access to an advanced online banking platform created for this century using new cutting-edge features. Partnered with Railsbank.</p>
                      </TextBlock>
                      <AboutIcon>
                         <StaticImage src="../assets/images/icon1.png" alt="" />
                      </AboutIcon>
                   </AboutBox>
                   <AboutBox>
                      <TextBlock>
                         <h3>Curated Investments</h3>
                         <p>We provide you with a state-of-the-art wealth platform where you can access our carefully curated selection of portfolios, funds and investments. We use AI and Quantum Computing to enhance our Research.</p>
                      </TextBlock>
                      <AboutIcon>
                         <StaticImage src="../assets/images/icon2.png" alt="" />
                      </AboutIcon>
                   </AboutBox>
                </Item>
                <Item>
                   <StaticImage src="../assets/images/applewatch1.png" alt="" />
                </Item>
                <Item>
                   <AboutBox>
                      <AboutIcon1>
                         <StaticImage src="../assets/images/icon3.png" alt="" />
                      </AboutIcon1>
                      <TextBlock>
                         <h3>Alternative and Direct investments</h3>
                         <p>Profit from a fully regulated investment platform and marketplace of unique and exclusive projects.</p>
                      </TextBlock>
                   </AboutBox>
                   <AboutBox>
                      <AboutIcon1>
                         <StaticImage src="../assets/images/icon4.png" alt="" />
                      </AboutIcon1>
                      <TextBlock>
                         <h3>Exclusive Memberships</h3>
                         <p>Build long-lasting connections with other like-minded Count Bismarck members all around the world. Get exclusive access to worldwide events, business & Sports club.</p>
                      </TextBlock>
                   </AboutBox>
                </Item>
             </Grid>
             <h3>Become Part Of  The Count Bismarck Family</h3>
             <Button><Link to="/">Become a Count Bismarck Member</Link></Button>
          </AboutBlock>
       </Container>
    </Wrapper>
    );
    export default About;
        
const Wrapper = styled.div`
background-image: url(${bgImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:950px;
padding: 70px 0;
text-align: center;
    @media only screen and (mAX-width:991px){
        padding: 40px 0;   
        height: inherit;
    } 
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const Heading = styled.h2`
position: relative;
text-align: center;
font-size: 45px;
    @media only screen and (min-width:768px){
        background-image: url(${bgImg2});
        background-position: center;
        background-repeat: no-repeat;
    }
    @media only screen and (max-width:600px){
        font-size: 35px;
    }
`;
const AboutBlock = styled.div`
margin-top: 50px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;
const Item = styled.div`
justify-content: start;
align-items: start;
text-align: left;
position: relative;
padding-left: 8%;
margin-top: 50px;
    @media only screen and (max-width:767px){
        padding-left: 15%;
    }
    @media only screen and (max-width:479px){
        padding-left: 18%;
    }
    &:nth-of-type(1) {
        text-align: right;  
        padding-right: 8%;
        padding-left: 0;
            @media only screen and (max-width:767px){
                padding-right: 15%;
            }
            @media only screen and (max-width:479px){
                padding-right: 18%;
            }
    }
    &:nth-of-type(2) {
        padding: 0 10%;
        margin: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
            @media only screen and (max-width:991px){
                margin-bottom: 30px;
            }
    }
    @media only screen and (max-width:991px){
        margin-top: 0px; 
    }   
`;
const AboutBox = styled.div`
position: relative;
margin-bottom:50px;
min-height: 250px;
    @media only screen and (max-width:1100px){
        min-height: inherit;
    }
`;
const TextBlock = styled.div`
`;
const AboutIcon = styled.div`
width: 60px;
position: absolute;
right: -20%;
top: 6%;
    @media only screen and (max-width:991px){
        right: -8%;
    }
    @media only screen and (max-width:767px){
        right: -15%;
    }
    @media only screen and (max-width:479px){
        right: -22%;
        top: 3%;
    }
`;
const AboutIcon1 = styled.div`
width: 60px;
position: absolute;
left: -20%;
top: 5%;
    @media only screen and (max-width:991px){
        left: -8%;
    }
    @media only screen and (max-width:767px){
        left: -15%;
    }
    @media only screen and (max-width:479px){
        left: -24%;
        top: 3%;
    }
`;
const Button = styled.button`
&:hover a{
    color: #222454;
 }
a {
    text-decoration: none;
    color: #707070;
}
a:hover{
    color: #222454;
}
`;
