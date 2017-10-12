import React from 'react'
import { Treeview } from 'fantasy-ui-react'
import { MapAction } from 'fantasy-map'
import store from '../store'
import { getLayer } from 'fantasy-layers'
const { BootstrapTreeview, TreeNode } = Treeview
const styles = {
    leftbar: {
        margin: '20px',
    },
    title: {
        fontSize: '20px',
        marginBottom: '10px',
        marginLeft: '10px',
    },
}
const layerCache = {}
const doGetLayer = (id, callback) => {
    if (layerCache[id]) {
        callback(layerCache[id])
    } else {
        getLayer(id).then((result) => {
            layerCache[id] = result.layer
            callback(result.layer)
        })
    }
}
const onCheckedHandler = (evt, node) => {
    doGetLayer('tianditu-drg-4326', (layer) => {
        store.dispatch(MapAction.addLayer(layer))
    })
}
const onUncheckedHandler = (evt, node) => {
    doGetLayer('tianditu-drg-4326', (layer) => {
        store.dispatch(MapAction.removeLayer(layer))
    })
}
const nodes = [new TreeNode({
    label: '国家天地图',
    nodes: [
        new TreeNode({
            label: '国家天地图矢量底图',
            onChecked: onCheckedHandler,
            onUnchecked: onUncheckedHandler,
            args: { layerId: 'tianditu-drg-102100' },
            buttons: [new TreeNode.Button({
                onClick: (evt, node) => {
                    console.log(node)
                },
            })],
        }),
        new TreeNode({
            label: '国家天地图影像底图',
            onChecked: onCheckedHandler,
            args: { layerId: 'tianditu-drg-anno-102100' },
        }),
    ],
})]

const treeview = (<BootstrapTreeview className="treeview-bs-light" nodes={nodes}/>)
const Leftbar = () => {
    return (
        <div style={styles.leftbar}>
            <div style={styles.title}><span className="glyphicon glyphicon-list"/> 图层</div>
            {treeview}
        </div>
    )
}
export default Leftbar
