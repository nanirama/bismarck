import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
  const el = document.getElementById("nav");
  if (el.style.display === "flex") {
  closeMenu();
  } else {
  openMenu();
  }
  };
  const openMenu = () => {
  const el = document.getElementById("nav");
  el.style.display = "flex";
  setMenuVisible(true);
  };
  const closeMenu = () => {
  const el = document.getElementById("nav");
  el.style.display = "none";
  setMenuVisible(false);
  };
  useEffect(() => {
  const hamburger = document.getElementById("hamburger-icon");
  if (menuVisible) hamburger.classList.add("cross");
  else hamburger.classList.remove("cross");
  }, [menuVisible]);
  return (
  <Wrapper>
     <Container>
        <LogoAndLinks>
           <Logo>
              <StaticImage src="../assets/images/logo.png" alt="" />
           </Logo>
           <MenuIcon onClick={toggleMenu} id="hamburger-icon">
              <div />
              <div />
              <div />
              <div />
           </MenuIcon>
           <Links id="nav">
              <li>
                <AnchorLink href='#about'>
                  About Us
                  </AnchorLink>
              </li>
              <li>
              <AnchorLink href='#dbanking'>
                 Digital banking
                 </AnchorLink>
              </li>
              <li>
              <AnchorLink href='#cinvestments'>
                 Curated Investments
                 </AnchorLink>
              </li>
              <li>
              <AnchorLink href='#membership'>
                 Exclusive Membership
                 </AnchorLink>
              </li>
              <li>
              <AnchorLink href='#contact'>
                 Contact
                 </AnchorLink>
              </li>
              <Myaccount>
              <AnchorLink href='#'>
                 <svg className="svg-icon" viewBox="0 0 20 20">
                    <path fill="none" d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"></path>
                 </svg>
                 My Account </AnchorLink>
              </Myaccount>
           </Links>
        </LogoAndLinks>
     </Container>
  </Wrapper>
  );
  };
  export default Header;

const Wrapper = styled.div`
width: 100%;
position: absolute;
top: 0;
z-index:999 !important;
`;
const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px
`;
const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding:30px 0;
    @media (max-width: 1200px) {
      align-items: center;
    }
`;
const Logo = styled.div`
  display: grid;
  place-items: center;
  width: auto;
`;
const MenuIcon = styled.div`
  width: 36px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    > div {
      height: 3px;
      width: 100%;
      background-color: #B89260;
      transition: 0.3s;
      border-radius: 30px;
    }
  @media (min-width: 992px) {
    display: none;
  }
`;
const Links = styled.ul`
  list-style: none;
  grid-auto-flow: column;
  align-items: stretch;
  grid-gap: 10px;
  padding: 0;
  margin: 0;
  display: grid;
    @media (max-width: 991px) {
      display: none;
      flex-direction: column;
      position: absolute;
      background: white;
      left: 0;
      top: 65px;
      width: 100%;
      box-shadow: 0 31px 26px -12px rgb(0 0 0 / 15%);
      padding: 20px 0;
      z-index: 999;
    }
  a {
    text-decoration: none;
    color: #B89260;
  }
  > li {
    margin:0;
    &:nth-of-type(5) a::after{
      display: none;
          }
    > a {
      display: grid;
      place-items: center;
      padding: 5px 25px;
      height: 100%;
      font-size: 16px;
      font-weight: 400;
      color: #B89260;
      position: relative;
        @media only screen and (min-width:992px) and (max-width:1100px){
          padding: 5px 15px;
        }
        @media (min-width: 992px) {
          &::after{
            content: '';
            position: absolute;
            right: 0;
            background: #B89260;
            width: 2px;
            height: 12px;
          }
      }
      @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  `;
const Myaccount = styled.div`
padding: 5px 20px;
  @media (min-width: 992px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  padding:0;
  }

`;