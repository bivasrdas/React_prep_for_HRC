import React from 'react'
import axios from 'axios'


class Professor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {posts: [],
            td:[]}

    }
    componentDidMount() {
        axios.post("http://localhost:4000/",
        {
            message:"hi"
        })
            .then(res =>
                {
                 console.log(res)  
                 this.setState({td:res.data}) 
                
                 console.log("yes",this.state.td);
                })
                .catch(error=>
                    {
                        console.log(error)
                    })
                }
                render()
                {
                return(<div>
                    <button onClick>Get request</button>
                    <h2>{this.state.td}</h2></div>)
                }
      

}
export default Professor;