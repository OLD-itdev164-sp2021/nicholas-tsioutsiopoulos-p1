import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import forum from "./forum.png"
console.log(forum)

const Outer = styled.header`
    background: ${props => props.theme.header.backgroundColor};
    margin-bottom: 1.45rem;
    text-align: right;
    `

const Inner = styled.div`
    margin: 0px auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    background: ${props => props.theme.header.backgroundColor};
    `

const H1 = styled.h1`
  margin: 0px;
`

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`




const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
    
      <H1>
      
        <StyledLink to="/">
        <img src={forum} alt="Logo" style={{width:"112",height:"20"}}/><br></br>
        {siteTitle}
        </StyledLink>
        
        
        
        
      </H1>
    </Inner>
    
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}








export default Header
