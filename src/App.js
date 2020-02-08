import React from 'react';
import './App.css';
import MapComponent from './Components/MapComponent/MapComponent'
import SearchComponent from './Components/SearchComponent/SearchComponent'
import { Row, Col } from 'antd';
function App() {
  return (
    <div className="App">
      <Row style={{height:"100%"}}>
    <Col span="4">
      <SearchComponent/>
    </Col>
    <Col span="20" style={{height:"100%"}}>
      <MapComponent/>
    </Col>
      </Row>
    </div>
  );
}
export default App;
