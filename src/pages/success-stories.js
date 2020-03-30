import React from "react"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/success-stories/intro/intro"
import AirAsia from "../components/success-stories/air-asia/air-asia"
import Comments from '../components/success-stories/comments/comments';
import OurFamily from '../components/success-stories/our-family/our-family';

const SuccessStoriesPage = () => (
  <Layout page={"stories"}>
    <SEO title="Success Stories" />
    <Intro/>
    <AirAsia/>
    <Comments/>
    <OurFamily/>
  </Layout>
)

export default SuccessStoriesPage
