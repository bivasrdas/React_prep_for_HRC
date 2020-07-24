import React from 'react'
import axios from 'axios'
class MLUPLOAD extends React.Component
{
    constructor(props){
        super(props)

    }
    componentDidMount() {
        axios.post(
            'http://127.0.0.1:5000/predict?',
            {},
            {
            headers: { 'Content-Type': 'application/json' },
            params: {
            data: "hi",
            },
            }
            )
        .then(res=>{
            this.setState({posts:res.data})
            console.log(this.state.posts);
        })
}
}

export default MLUPLOAD;