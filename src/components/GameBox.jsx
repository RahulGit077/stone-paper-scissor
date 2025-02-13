import React from 'react'
import Box from './Box'
import styled from 'styled-components'
import Options from './Options'
import bot from './../assets/bot.png'
import player from './../assets/player.png'
import './gameBox.css'
import stone from './../assets/stone.png'
import paper from './../assets/paper.png'
import scissor from './../assets/scissor.png'

const PlayerBox = styled.div
`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

`



const GameBox = () => {
    let [player1Score, setPlayer1Score] = React.useState(0);
    let [player2Score, setPlayer2Score] = React.useState(0);
    let [player1Choice, setPlayer1Choice] = React.useState(player);
    let [player2Choice, setPlayer2Choice] = React.useState(bot);
    let [result, setResult] = React.useState("Let's Play");

    const setImg = (choice,setState) =>{
        switch(choice){
            case 0:
                setState(() => stone);
                break;
            case 1:
                setState(() => paper);
                break;
            case 2:
                setState(() => scissor);
                break;
        }
    }
    
    const play = (choice)=>{
        let cpuChoice = Math.floor(Math.random() * 3);
        setImg(cpuChoice,setPlayer2Choice);
        setImg(choice,setPlayer1Choice);
        if(cpuChoice===choice){
            setResult((prevResult) => prevResult = "Draw");
            return;
        }
        else if(cpuChoice==0 && choice==2 || cpuChoice==1 && choice==0 || cpuChoice==2 && choice==1){
            setResult((prevResult) => prevResult = "You Loss");
            setPlayer2Score((prevScore) => prevScore = prevScore + 1);
        }
        else{
            setResult((prevResult) => prevResult = "You Win");
            setPlayer1Score((prevScore) => prevScore = prevScore + 1);
        }
    
    }
    const players=[
        {
            name:"You",
            score:player1Score,
            choice:player1Choice,
        },
        {
            name:"Bot",
            score:player2Score,
            choice:player2Choice
        }
    ]

    return (
        <Box>
            <h1>Stone Paper Scissor</h1>
            <div className='players'>
                {
                    players.map((player, index) => (
                        <PlayerBox key={index}>
                            <h2>{player.name}</h2>
                            <h3>Score: {player.score}</h3>
                            <div className="img-container">
                                <img src={player.choice} className='player-img' alt="" />
                            </div>
                        </PlayerBox>
                    ))
                }
            </div>

            <div className='result'  >{result}</div>
            <Options play={play} />
        </Box>
    )
}

export default GameBox