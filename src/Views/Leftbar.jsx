import React from 'react'
import { Treeview } from 'fantasy-ui-react'

const { BootstrapTreeview }=Treeview
const styles = {
    leftbar: {},
}
const layers = [
    { label: '国家天地图矢量底图', type: 'wmts' },
    { label: '国家天地图影像底图', type: 'wmts' },
]
const lis = _.map(layers, (layer, key) => {
    return (
        <li key={key}>
            <input type="checkbox"/><span>{layer.label}</span>
        </li>
    )
})
const Leftbar = () => {
    return (
        <div style={styles.leftbar}>
            <BootstrapTreeview/>
        </div>
    )
}
export default Leftbar