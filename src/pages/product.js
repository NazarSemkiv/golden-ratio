import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/product/intro/intro"
import CurrentStatus from "../components/product/current-status/current-status"
import EstimatorFirst from "../components/product/estimator-first/estimator-first"
import EstimatorSecond from "../components/product/estimator-second/estimator-second"
import EstimatorThird from "../components/product/estimator-third/estimator-third"

const ProductPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Intro/>
    <CurrentStatus/>
    <EstimatorFirst/>
    <EstimatorSecond/>
    <EstimatorThird/>
  </Layout>
)

export default ProductPage
