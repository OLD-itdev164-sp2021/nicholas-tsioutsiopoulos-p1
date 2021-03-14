/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { Gray } from '../themes/Gray'
import Header from "./header"
import GlobalStyle from './GlobalStyle'
import Footer from "./footer"



const Content = styled.div`
  margin: 0 auto;
  max-width: 50%;
  padding: 01.0875rem 1.45rem;
  padding-top: 10em;
  background: ${props => props.theme.header.backgroundColor};
  `
  const Article = styled.div`
  margin: 0 auto;
  text-align: left;
  max-width: 100%;
  max-height: 100%;
  padding: 01.0875rem 1.45rem;
  padding-top: 5em;
  background: ${props => props.theme.header.backgroundColor};
  `
 
  
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
    
    <ThemeProvider theme={Gray}>
    <GlobalStyle />
    <Article>
      <Header siteTitle={data.site.siteMetadata.title}>
      
      </Header>
      <Content>
        <main>{children}</main>
        <footer>
        <br></br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
        <br>
        </br>
        <br></br>
       <Footer>
        <ThemeProvider theme={Gray}>
          © {new Date().getFullYear()}, Built by Nikko using
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          </ThemeProvider>
          </Footer>
        </footer>
        </Content>
        
        </Article>
        </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
