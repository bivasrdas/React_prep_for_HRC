import React,{Component} from 'react';


class Alpha extends Component
{
    constructor(props)
    {
        super(props);
        this.state={favouritefruit:"apple" };
    }
    componentWillMount()
    {
        this.setState({favouritefruit: "kwik"})
    }
    static getDerivedStateFroProps(props,state)
    {
        return{favouritefruit: props.favfruit};
    }
    s
    changefruit= ()=>
    {
       return (this.setState({favouritefruit:"Guava"}));
    }
    render()
    {
        return(<div>
            <h1>My favouritefruit is {this.state.favouritefruit}</h1>
            <button type="button" onClick={this.changefruit}>Change fruit</button>);
            <div id="div1"></div>
            </div>);

    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({favouritefruit:"banna"})
        },2000)
    }
 
    shouldComponentUpdate()
    {
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        return("Before update"+prevState.favouritefruit);
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
    document.getElementById("div1").innerHTML="<br/><br/><h3>The updated favourite fruit is-"+ this.state.favouritefruit+"</br>"+snapshot+"</h3>";
    }
    componentWillUnmount()
    {
        console.log("Unmounting");
    }
}

export default Alpha;  