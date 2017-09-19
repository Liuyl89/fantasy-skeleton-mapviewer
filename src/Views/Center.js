import async from 'async'
import React from 'react'
import { Map } from 'fantasy-map'
import { getLayer } from 'fantasy-layers'

let map
class Center extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layers: [],
        }
    }

    componentDidMount() {
        async.map(
            [
                // 'tianditu-dlg-4490',
                // 'tianditu-dlg-anno-4490',
                // 'tianditu-drg-4490',
                // 'tianditu-drg-anno-4490',
                // 'tianditu-dlg-102100',
                // 'tianditu-dlg-anno-102100',
                // 'tianditu-drg-102100',
                // 'tianditu-drg-anno-102100',
                'tianditu-dlg-4326',
                'tianditu-dlg-anno-4326',
            ],
            getLayer,
            (err, results) => {
                this.setState({
                    layers: results,
                })
            },
        )
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
