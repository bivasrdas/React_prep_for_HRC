import React from 'react';
import axios from 'axios';

class Postlist extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:8080/Summer_Internship_Backend/DBJSONSERVLET')
        .then(res =>
            {
             console.log(res)  
             this.setState({posts:res.data}) 
            })
            .catch(error=>
                {
                    console.log(error)
                })
    }
    render()
    {
        const {posts}=this.state;
        return(<div>
            {
                posts.map(post=><div style={{textAlign:"center"}} key={post.id}>{post.business_code}</div>)
                }
        </div>);}
}




export default Postlist;