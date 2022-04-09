import React from 'react'
import '../styles/App.css';
import Sidebar from './Sidebar';
import Animation from './Animation';
function App() {
  const [buttonInfos,setButtonInfos]=React.useState(
  [
    ["","none"],["",""],["",""],["",""],["",""],["",""],["",""]
  ]
)
  function handleClass(c,i){
    if(c!=="Normal"){
      setButtonInfos(prev=>{
        var prevCopy=[...prev]
        if(c==="Open" || c==="Close"){
          prevCopy[i][1]="none"
          if(c==="Open"){
            prevCopy[0][0]=""
            prevCopy=prevCopy.map((el,index)=>{
              index===0?el[1]="":el[1]="none"
              return el
            })
          }
          else{
            prevCopy[1][0]=""
            prevCopy=prevCopy.map((el,index)=>{
              index===0?el[1]="none":el[1]=""
              return el
            })
          }
        }
        if(c==="Big" || c==="Small"){
          if(c==="Big"){
            prevCopy[4][0]=""
          }
          else{
            prevCopy[2][0]=""
          }
        }
        prevCopy[i][0]=c.toLowerCase()
        return prevCopy
      })
    }
    else{
      setButtonInfos(()=>{
        return [
                ["","none"],["",""],["",""],["",""],["",""],["",""],["",""]
               ]
      })
    }
  }
  return (
    <div className='wrapper'>
      <Sidebar
        changeClass={(c,i)=>handleClass(c,i)}
        buttonInfos={buttonInfos}
      />
      <Animation
        close={buttonInfos[0]}
        open={buttonInfos[1]}
        big={buttonInfos[2]}
        normal={buttonInfos[3]}
        small={buttonInfos[4]}
        rotate={buttonInfos[5]}
        circle={buttonInfos[6]}
      />
    </div>
  );
}
export default App;