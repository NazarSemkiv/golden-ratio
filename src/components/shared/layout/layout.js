/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../../styles/base.scss"
import Header from "../header/header"
import Footer from "../footer/footer"
import Contacts from "../../shared/contacts/contacts"
//import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
        <main>{children}</main>
      <Contacts/>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
