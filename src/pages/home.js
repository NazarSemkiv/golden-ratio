import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/home/intro/intro"
import SalesforceDigital from "../components/home/salesforce-digital/salesforce-digital"
import AboutUs from "../components/home/about-us/about-us"
import Partners from "../components/home/partners/partners"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <SalesforceDigital/>
    <AboutUs/>
    <Partners/>
  </Layout>
)

export default HomePage
