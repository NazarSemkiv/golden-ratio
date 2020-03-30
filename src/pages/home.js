import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/home/intro/intro"
import SalesforceDigital from "../components/home/salesforce-digital/salesforce-digital"
import AboutUs from "../components/home/about-us/about-us"
import Partners from "../components/home/partners/partners"
import DigitalProduct from '../components/home/digital-product/digital-product';
import OurClients from '../components/home/our-clients/our-clients';
import Blog from "../components/home/blog/blog"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <SalesforceDigital/>
    <AboutUs/>
    <Partners/>
    <DigitalProduct/>
    <OurClients/>
    <Blog/>
  </Layout>
)

export default HomePage
