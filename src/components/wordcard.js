import React from 'react'
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons'


const Styledrapper = styled.div`
    box-shadow : 0 0 10px 0 rgba(0,0,0,.25);
    //margin: 16px ;
    padding : 8px ;
    border-radius : 4px ;

    .bincol{
        color: red;
        cursor:pointer;
    }
    .top{
        display:flex;
        justify-content:space-between;
        align-items: center ;
    }

`

const Wordcard = (props) => {
    return (
        <Styledrapper>
           
                <div className="top">
                    <div>
                        <b>{props.word}</b>
                        <samp>({props.types.join(",")})</samp>
                    </div>
                    <DeleteOutlined 
                        className="bincol" 
                        onClick={props.onDelete}
                    />
                </div>
                <div>
                {props.meanings.join(",")}
                </div>

       
        </Styledrapper>
    )
}

export default Wordcard
