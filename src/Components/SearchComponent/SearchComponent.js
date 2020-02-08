import React, { Component } from 'react'
import { Select, Card ,Empty } from 'antd';
import{mapStateToProps}from"./maping"
import{connect}from "react-redux"
import { DrawGeometry ,getCenter ,getWeatherData} from '../../Helpers'
import "./style.css"
import Polygon from 'ol/geom/Polygon';
let axios = require('axios')
const { Option } = Select;

 class SearchComponent extends Component {

constructor(props){
    super(props)
    this.allData = []
    this.state = {
        data: [],
        value: undefined,
        disabled:true,
        WeatherData:null
      };

}


handleSearch = value => {
    if (value) {
        this.setState({data:this.allData.filter(e=>{
          return  e.properties.NAME && e.properties.NAME.toLowerCase().indexOf(value.toLowerCase())>=0
        }
        ).slice(0,100)
    })
    } else {
      this.setState({ data: [] });
    }
  };

handleChange = value => {
    this.setState({ value });
  };
  
  handelSelect=(e)=>{
    let polyGeometry = this.state.data[e].geometry.coordinates[0].slice(1);
    let poly = new Polygon([polyGeometry])
    DrawGeometry(this.props.map,this.props.vectorSource,poly)
    getWeatherData(getCenter(polyGeometry)).then(re=>{
    this.setState({WeatherData:{temp:re.data[0].temp,description:re.data[0].weather.description}})
  })
  }

    componentDidMount(){
      axios.get("https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson").then(e=>{
        this.allData = e.data.features
        this.setState({disabled:false})
        
})

    }

    render() {
      let {WeatherData} = this.state;
        const options =this.state.data.map((d,i) => <Option key={i}>{d.properties.NAME}</Option>);
        return (
            <div className="Select">
              <div>Search For country:</div>
        <Select
        disabled={this.state.disabled}
         showSearch
         value={this.state.value}
         placeholder="type here to search"
         style={{width:"100%"}}
         onSelect={this.handelSelect}
         defaultActiveFirstOption={false}
         filterOption={false}
         onSearch={this.handleSearch}
         onChange={this.handleChange}
      >
        {options}
      </Select>
      <Card style={{ width:"100%"}}>
      {
    WeatherData?(<>
    <div className="tempText">{WeatherData.temp}°</div>
    <div>{WeatherData.description}</div>
    </>
    ):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  } 
      </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(SearchComponent)