import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/home/intro/intro"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
  </Layout>
)

export default HomePage
