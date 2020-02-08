import React, { Component } from 'react'
import "./style.css"
import View from 'ol/View';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import{mapDispatchToProps}from"./maping"
import{connect}from "react-redux"
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style} from 'ol/style';


 class MapComponent extends Component {


    //other functions eliminated for brevity
    componentDidMount() {


        let fill = new Fill({
            color: 'rgba(78, 250, 47,0.4)'
          });
          var stroke = new Stroke({
            color: '#ffff66',
            width: 2.5
          });
          let style = 
            new Style({
              fill: fill,
              stroke: stroke
            })
          


        let vectorSource = new VectorSource({})
        let layer = new VectorLayer({
            source: vectorSource,
            style
        });
        var map = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new XYZ({
                  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
              }),layer
            ],
            view: new View({
                projection:'EPSG:4326',
              center: [0, 0],
              zoom: 3
            })
          });
          this.props.setvectorSource(vectorSource)
           this.props.setmap(map)
     }
  
    
render () {
    return (<div className="map" id="map"> </div>);
  }

}


export default connect(null,mapDispatchToProps)(MapComponent)