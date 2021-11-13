import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalStyle from '../layout/globalStyles';
import FontStyles from "../layout/fontstyles";
import Hero from "../components/Herosection";
import Future from "../components/Futuresection";
import BankingBanner from "../components/BankingBannersection";
import Service from "../components/Servicesection";
import About from "../components/Aboutsection";
import Portfolio from "../components/Portfoliosection";
import Financial from "../components/Financialsection";
import Backed from "../components/Backedsection";

const IndexPage = () => (
  <Layout>
     <GlobalStyle />
     <FontStyles />
     <Hero />
     <Future/>
     <BankingBanner />
     <Service />
     <About />
     <Portfolio />
     <Financial />
     <Backed />

  </Layout>
  )
  export default IndexPage  
  