import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
    {/* <Link to="/about-us/">Go to page 2</Link>
    <Link to="/product/">Go to page 3</Link>
    <Link to="/services/">Go to page 4</Link> */}
  </Layout>
)

export default IndexPage
