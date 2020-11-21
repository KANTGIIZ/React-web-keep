//step1 : import react
import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
   .red-title {
       color:red;
   }
`
//step2 : Creeate = function

const Text = (props) => {
    return (
        <StyledWrapper>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </StyledWrapper>
    )
}

//step3 : Export

export default Text;