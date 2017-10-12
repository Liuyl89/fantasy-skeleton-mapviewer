import async from 'async'
import React from 'react'
import { Map, MapAction } from 'fantasy-map'
import { getLayer } from 'fantasy-layers'
import store from '../store'

let map
class Center extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layers: [],
        }
    }

    componentDidMount() {
        const p = Promise.all([getLayer('tianditu-dlg-4326'), getLayer('tianditu-dlg-anno-4326')])
        p.then((results) => {
            this.setState({
                layers: _.map(results, (item) => {
                    store.dispatch(MapAction.addLayer(item.layer))
                    return item.layer
                }),
            })
        })
    }

    render() {
        const extent4490 = {
            xmin: -180.0,
            ymin: -90.0,
            xmax: 180.0,
            ymax: 90.0,
            spatialReference: 4490,
        }
        const extent4326 = {
            xmin: -180.0,
            ymin: -90.0,
            xmax: 180.0,
            ymax: 90.0,
            spatialReference: 4326,
        }
        if (this.state.layers.length === 0) {
            return (<div>正在加载</div>)
        }
        if (!map) {
            map = (
                <Map
                    layers={this.state.layers}
                    //basemap="streets"
                    extent={extent4326}
                />
            )
        }
        return map
    }
}
export default Center
