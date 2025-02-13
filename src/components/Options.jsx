import React from 'react'
import styled from 'styled-components'
import stone from './../assets/stone.png'
import paper from './../assets/paper.png'
import scissor from './../assets/scissor.png'

const Row = styled.div
`
display: flex;
justify-content: space-between;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
`

const Options = (props) => {
    return (
        <Row>
            <div className="img-container bg-green" onClick={() => props.play(0)}>
            <img src={stone} alt="" className="opt-img" />
            </div>
            <div className="img-container bg-red" onClick={() => props.play(1)}>
            <img src={paper} alt="" className="opt-img" />
            </div>
            <div className="img-container bg-blue" onClick={() => props.play(2)}>
            <img src={scissor} alt="" className="opt-img" />
            </div>
        </Row>
    )
}

export default Options