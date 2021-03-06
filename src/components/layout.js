/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Navbar from './navbar'
import "./layout.css"


const LayoutWrapper = styled.div`
  > *{
    display:inline-block;
  }

  @media screen AND (max-width:1024px){
    /* height:100vh; */
    /* position: relative; */
  > *{
    display:block;
  }
  }
`;

const NavBarLayoutWrapper = styled.div`
@media screen AND (max-width:1024px){
  position:fixed;
  bottom:0;
  z-index:99;
}
@media screen AND (max-width:700px){
  position:initial;
}
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <NavBarLayoutWrapper>
        <Navbar siteTitle={data.site.siteMetadata.title}/>
      </NavBarLayoutWrapper>
        <main>{children}</main>
      <footer >
         Auxane Nitharum © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
