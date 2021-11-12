import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
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
     <Hero />
     <Future />
     <BankingBanner />
     <Service />
     <About />
     <Portfolio />
     <Financial />
     <Backed />
  </Layout>
  )
  export default IndexPage  
  