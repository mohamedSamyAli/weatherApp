(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{216:function(e,t,a){e.exports=a(312)},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},245:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=(a(221),a(222),a(110)),l=a(111),u=a(128),s=a(112),p=a(129),h=(a(223),a(127)),d=a(192),m=a(196),f=a(194),v=a(87),b=a(193),E=a(195),w=a(132),g=a(103),S=a(154),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=new w.a({color:"rgba(78, 250, 47,0.4)"}),t=new g.a({color:"#ffff66",width:2.5}),a=new S.b({fill:e,stroke:t}),n=new E.a({}),r=new b.a({source:n,style:a}),c=new d.a({target:"map",layers:[new m.a({source:new f.a({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),r],view:new h.a({projection:"EPSG:4326",center:[0,0],zoom:3})});this.props.setvectorSource(n),this.props.setmap(c)}},{key:"render",value:function(){return r.a.createElement("div",{className:"map",id:"map"}," ")}}]),t}(n.Component),O=Object(v.b)(null,(function(e){return{setmap:function(t){return e({type:"setMap",value:t})},setvectorSource:function(t){return e({type:"setvectorSource",value:t})}}}))(y),j=a(316),k=a(315),D=a(92),M=(a(10),a(314)),N=a(157),C=(a(245),a(74)),A=a(157),x=j.a.Option,F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSearch=function(e){e?a.setState({data:a.allData.filter((function(t){return t.properties.NAME&&t.properties.NAME.toLowerCase().indexOf(e.toLowerCase())>=0})).slice(0,100)}):a.setState({data:[]})},a.handleChange=function(e){a.setState({value:e})},a.handelSelect=function(e){var t,n,r=a.state.data[e].geometry.coordinates[0].slice(1),c=new C.a([r]);!function(e,t,a){t.clear();var n=new M.a({name:"geometry",geometry:a});t.addFeature(n);var r=n.getGeometry().getExtent();e.getView().fit([r[0]-1,r[1]-1,r[2]+1,r[3]+1])}(a.props.map,a.props.vectorSource,c),(n=r,t=[n.map((function(e){return e[1]})).reduce((function(e,t){return e+t}),0)/n.length,n.map((function(e){return e[0]})).reduce((function(e,t){return e+t}),0)/n.length],N.get("https://api.weatherbit.io/v2.0/current?lat=".concat(t[0],"&lon=").concat(t[1],"&key=6e693d96fdc844c297b4a96e00c6eb89")).then((function(e){return e.data}))).then((function(e){a.setState({WeatherData:{temp:e.data[0].temp,description:e.data[0].weather.description}})}))},a.allData=[],a.state={data:[],value:void 0,disabled:!0,WeatherData:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.get("https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson").then((function(t){e.allData=t.data.features,e.setState({disabled:!1})}))}},{key:"render",value:function(){var e=this.state.WeatherData,t=this.state.data.map((function(e,t){return r.a.createElement(x,{key:t},e.properties.NAME)}));return r.a.createElement("div",{className:"Select"},r.a.createElement("div",null,"Search For country:"),r.a.createElement(j.a,{disabled:this.state.disabled,showSearch:!0,value:this.state.value,placeholder:"type here to search",style:{width:"100%"},onSelect:this.handelSelect,defaultActiveFirstOption:!1,filterOption:!1,onSearch:this.handleSearch,onChange:this.handleChange},t),r.a.createElement(k.a,{style:{width:"100%"}},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tempText"},e.temp,"\xb0"),r.a.createElement("div",null,e.description)):r.a.createElement(D.a,{image:D.a.PRESENTED_IMAGE_SIMPLE})))}}]),t}(n.Component),G=Object(v.b)((function(e){return{map:e.map,vectorSource:e.vectorSource}}),null)(F),I=a(91),L=a(53);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I.a,{style:{height:"100%"}},r.a.createElement(L.a,{span:"4"},r.a.createElement(G,null)),r.a.createElement(L.a,{span:"20",style:{height:"100%"}},r.a.createElement(O,null))))},W=(a(311),a(113)),z=a(155),J={map:null,vectorSource:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMap":return Object(z.a)({},e,{map:t.value});case"setvectorSource":return Object(z.a)({},e,{vectorSource:t.value});default:return e}},_=Object(W.b)(T);o.a.render(r.a.createElement(v.a,{store:_}," ",r.a.createElement(P,null)," "),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.2bde9b1f.chunk.js.map