import React,{Component} from 'react';
import './externalcss.css';
import style from './CssInJsExample.css.js'
class Check extends Component
{

    constructor(props)
    {
        super(props);
        this.state= {
            brand:"four",
            model:"Mustang",
            color:"Red",
            year:1946
        };



    }
    statechange=()=>
    {
        this.setState({color:"Green"});
    }
    render()
    {
    return(<div style={{color:this.state.color}}>
               <h3 className="my">ALl State properties {this.state.brand}</h3>
               <h3 style={style.body}>{this.state.model}</h3>
               <h3>{this.state.year}</h3>
               <h3>{this.state.color}</h3>
               <button type="button" onClick={this.statechange}>Click me</button>
               
        </div>);
    }
}


export default Check;