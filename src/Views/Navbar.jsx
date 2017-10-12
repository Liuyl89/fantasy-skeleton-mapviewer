import React from 'react'
import { Nav } from 'fantasy-ui-react'

const { Navbar: NavbarUI, BrandLink, NavItem } = Nav

const styles = {
    navbar: {
        height: '63px',
        paddingTop: '5px',
    },
}
const brandLink = (<BrandLink to="/">Fantasy Skeleton MapViewer</BrandLink>)
const left = [
    // <NavItem key="0" to="/introduction">INTRODUCTION</NavItem>,
    // <NavItem key="1" to="/documentation">DOCUMENTATION</NavItem>,
    // <NavItem key="2" to="/examples">EXAMPLES</NavItem>,
]
const Navbar = () => {
    return (
        <NavbarUI style={styles.navbar} brand={brandLink} left={left} fluid={true}/>
    )
}
export default Navbar
