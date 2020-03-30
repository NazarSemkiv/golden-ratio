import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/success-stories/intro/intro"
import AirAsia from "../components/success-stories/air-asia/air-asia"
import Comments from '../components/success-stories/comments/comments';

const SuccessStoriesPage = () => (
  <Layout>
    <SEO title="Success Stories" />
    <Intro/>
    <AirAsia/>
    <Comments/>
  </Layout>
)

export default SuccessStoriesPage
