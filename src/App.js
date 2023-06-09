import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import X0 from './Card';
import { type } from '@testing-library/user-event/dist/type';
import x from "../src/assets/audios/x.wav"
import zero from "../src/assets/audios/zero.mp3"
import winner from "../src/assets/audios/winner.mp3"
console.log(winner);
localStorage.clear()

let arr = [
  {
    id: 0,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 1,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 2,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 3,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 4,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 5,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 6,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 7,
    value: "",
    stopped: false,
    isWinner: false
  },
  {
    id: 8,
    value: "",
    stopped: false,
    isWinner: false
  },
]
function App() {
  const [arrr, setArrr] = useState(arr);
  const [winner, setWinner] = useState("")
  const [player, setPlayer] = useState("X")
  const [state, setState] = useState("X")
  function ozgartir(id){
    setState(state == "X" ? "0" : "X")
    state  == "X" ? new Audio(x).play() : new Audio(zero).play()
    setPlayer(state == "X" ? "0" : "X")
    arr[id].value = state;
    tekshir(id)
  }
  function tekshir(id){
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (var i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (arr[a].value && arr[a].value === arr[b].value && arr[a].value === arr[c].value) {
          setArrr(...arr, arr[a].isWinner = true);
          setArrr(...arr, arr[b].isWinner = true);
          setArrr(...arr, arr[c].isWinner = true);
          console.log(arr);
          localStorage.setItem('winner' , arr[a].value)
          setWinner(arr[a].value)
          stop(winner)
        }
      }
    }
    function stop({winner}){
      new Audio(winner).play()
      arr.map(item => {
        item.stopped = true
      })
    }

  function restart(){
    arr.map(item => {
      setState("")
      setPlayer("X")
      item.isWinner = false;
      item.value = "";
      item.stopped = false;
      localStorage.clear()
    })
  }
  return(
    <div className='wrapper'>
      <p>{player} ning navbati</p><br/>
      <p>{localStorage.getItem('winner')} is winner!</p>
      <div className='div'>
      {
        arr.map((item, i) =>  <X0 stopped={item.stopped} isWinner={item.isWinner} clickHandler={() =>  ozgartir(i)} key={item.id} id={item.id} value={item.value}/>)
      }
      </div>
      <button className='btn' onClick={restart}>Restart</button>
    </div>
  )
}

export default App;