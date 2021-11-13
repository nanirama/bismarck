import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Service = () => (
    <Wrapper>
       <Container>
          <h2>Private Banking no longer<br/> just for the super Rich</h2>
          <p>Why should the benefits of  Private Banking and Wealth Management be available only to the very few.<br /> Join the Bismarck family.</p>
             <ServiceBlock>
             <Grid id="dbanking">
                <Item>
                <ServiceImage> <StaticImage src="../assets/images/service-1.png" alt="" /></ServiceImage>
                </Item>
                <Item>
                    <TextBlock>
                    <SubHeading>Digital Banking</SubHeading>
                    <p>Why continue to struggle with banking designed for the past. Bring yourself into the future with our advanced digital banking platform, with its many cutting-edge features. Use the Count Bismarck card and online account to take the hassle out of your day-to-day banking.</p>
                    </TextBlock>
                </Item>
             </Grid>
             <Grid2 id="cinvestments">
                <Item2>
                <TextBlock>
                    <SubHeading2>Curated Investments</SubHeading2>
                    <p>Wealth is not just about how much money you have. Wealth is about being able to live how you want to live, security for you and your loved ones, and always knowing your money is invested in line with your values</p>
                    <p>Let us do the work and choose from our carefully curated selection of investment opportunities in funds, portfolios and direct placements.</p>
                    </TextBlock>
                </Item2>
                <Item2>
                   <ServiceImage> <StaticImage src="../assets/images/service-2.png" alt="" /></ServiceImage>
                </Item2>
             </Grid2>
             </ServiceBlock>
       </Container>
    </Wrapper>
    );
    export default Service;
    
const Wrapper = styled.div`
padding: 70px 0;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
    @media only screen and (max-width:991px){
        padding: 40px 0;
    }
`;
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
padding: 0 15px;
`;
const ServiceBlock = styled.div`
margin-top: 80px;
position: relative;
    @media (max-width: 991px) {
        margin-top: 50px;
    }
    // &::before{
    //     content: '';
    //     position: absolute;
    //     top: 5%;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     border: 2px solid #B89260;
    // }

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
  margin-bottom: 80px;
  justify-content: space-between;
  align-items: center;
    @media (min-width: 992px) {
        grid-template-columns: 8fr 4fr;
    }
    @media (max-width: 991px) {
        margin-bottom: 20px;
    }
`;
const Grid2 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;
justify-content: space-between;
align-items: center;
    @media (min-width: 992px) {
        grid-template-columns: 4fr 8fr;
    }
    @media (max-width: 991px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
text-align: left;
`;
const Item2 = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
text-align: right;
`;
const ServiceImage = styled.div`
margin-bottom: 20px;
`;
const TextBlock = styled.div`
padding:30px;
    @media (max-width: 991px) {
        padding:0px;
    }
`;
const SubHeading = styled.h4`
position: relative;
padding-bottom: 20px;
    @media (max-width: 599px) {
        font-size: 26px;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0%;
        left: 0;
        width: 150px;
        height: 1px;
        background-color: #B89260;
    }
`;
const SubHeading2 = styled.h4`
position: relative;
padding-bottom: 20px;
    @media (max-width: 599px) {
        font-size: 26px;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0%;
        right: 0;
        width: 150px;
        height: 1px;
        background-color: #B89260;
    }
`;
