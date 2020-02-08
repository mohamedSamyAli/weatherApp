import * as olProj from 'ol/proj';
import { Feature } from 'ol';
const axios = require('axios')
export const ToMapProj = (coorArray)=>{
    return coorArray.map(e=>olProj.transform(e,'EPSG:4326', 'EPSG:3857'))
}


export const getWeatherData = (center)=>{
   return axios.get(`https://api.weatherbit.io/v2.0/current?lat=${center[1]}&lon=${center[0]}&key=6e693d96fdc844c297b4a96e00c6eb89`).then(e=>{
        return e.data
    })
}


 
export const getCenter = (coor)=>{
    let lat  = (coor.map(e=>e[0]).reduce((a, b) => a + b, 0))/coor.length
    let long = (coor.map(e=>e[1]).reduce((a, b) => a + b, 0))/coor.length
    return [lat,long]
}

export const DrawPolygon = (map,vectorSource,poly)=>{
    vectorSource.clear();
    var feature = new Feature({
        name: "poly",
        geometry: poly,
        text:"SMSM SMSM SMSM"
    });
    vectorSource.addFeature( feature );
    
    let extent = feature.getGeometry().getExtent() 
    map.getView().fit([extent[0]-1,extent[1]-1,extent[2]+1,extent[3]+1])
}