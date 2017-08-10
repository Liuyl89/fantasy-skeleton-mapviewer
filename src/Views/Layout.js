import React from 'react'
import { Layout as LayoutUI } from 'fantasy-ui-react'
import Navbar from './Navbar'
import Leftbar from './Leftbar'
import Center from './Center'

const { LayoutNLC } = LayoutUI
const navbar = (<Navbar/>)
const leftbar = (<Leftbar/>)
const center = (<Center/>)
class Layout extends React.Component {
    render() {
        return (
            <LayoutNLC
                navbar={navbar}
                leftbar={leftbar}
                center={center}
            />
        )
    }
}
export default Layout
