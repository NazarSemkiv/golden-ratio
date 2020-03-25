import React from "react"
import { Link } from "gatsby"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Intro from "../components/services/intro/intro"
import SalesforceConsultingFirst from "../components/services/salesforce-consulting-first/salesforce-consulting-first"
import SalesforceProduct from "../components/services/salesforce-product/salesforce-product"
import SalesforceConsultingSecond from "../components/services/salesforce-consulting-second/salesforce-consulting-second"

const ServicesPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Intro/>
    <SalesforceConsultingFirst/>
    <SalesforceProduct/>
    <SalesforceConsultingSecond/>
  </Layout>
)

export default ServicesPage
