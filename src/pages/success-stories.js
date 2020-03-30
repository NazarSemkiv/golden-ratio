import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/success-stories/intro/intro"

const SuccessStoriesPage = () => (
  <Layout>
    <SEO title="Success Stories" />
    <Intro/>
  </Layout>
)

export default SuccessStoriesPage