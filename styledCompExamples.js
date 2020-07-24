import styled  from 'styled-components';
import React from 'react';

const Div=styled.div((props)=>({
    border:'5px outset darkcyan' ,
    height:"20px"})); 
    


class Skt extends React.Component
{
    render()
    {
        return(
            <Div>
               STYLED COMPONENT
            </Div>
        )
    }
}

export default Skt;