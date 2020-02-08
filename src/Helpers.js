import * as olProj from 'ol/proj';
import { Feature } from 'ol';
const axios = require('axios')
export const ToMapProj = (coorArray)=>{
    return coorArray.map(e=>olProj.transform(e,'EPSG:4326', 'EPSG:3857'))
}


export const getWeatherData = (center)=>{
    /*
    return promise function that return wether data if suceeded 
ceter ==> array [lat,long] 
    */
   return axios.get(`https://api.weatherbit.io/v2.0/current?lat=${center[0]}&lon=${center[1]}&key=6e693d96fdc844c297b4a96e00c6eb89`).then(e=>{
        return e.data
    })
}


 
export const getCenter = (coor)=>{
    /*
    take geometry and caculate the avarge lat & long for its boundry
    coor ==> array that conation arrays of lat & long [[lat1,long1],[lat1,long1],[lat1,long1]]]
    return array [averge lat,averge long]
    */

   let lat = (coor.map(e=>e[1]).reduce((a, b) => a + b, 0))/coor.length
   let long  = (coor.map(e=>e[0]).reduce((a, b) => a + b, 0))/coor.length
    return [lat,long]
}



export const DrawGeometry = (map,vectorSource,geometry)=>{
    /*
    this function used to delete any thing from vector source then  Draw feature in the map 
    map ==> target map to Draw on it
    vectorSource ==> vector data source to add feature on it 
    geometry == > geometry to pe drawn
    */
    vectorSource.clear();
    var feature = new Feature({
        name: "geometry",
        geometry: geometry,
    });
    vectorSource.addFeature( feature )
    let extent = feature.getGeometry().getExtent() 
    map.getView().fit([extent[0]-1,extent[1]-1,extent[2]+1,extent[3]+1])
}