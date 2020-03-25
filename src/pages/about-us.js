import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/about-us/intro/intro"
import DigitalProduct from "../components/about-us/digital-product/digital-product"
import WhyWeMade from "../components/about-us/why-we-made/why-we-made"
import Leadership from "../components/about-us/leadership/leadership"

const AboutUsPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Intro/>
    <DigitalProduct/>
    <WhyWeMade/>
    <Leadership/>
  </Layout>
)

export default AboutUsPage
