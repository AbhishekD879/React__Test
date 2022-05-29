


const App=()=>{
    const [time,setTime]=React.useState(0);
    const [timerActive,setTimeActive]=React.useState(false);
    const [isStop,setIsStop]=React.useState(true);
    React.useEffect(()=>{
     let intervalInstance;
     if(timerActive&&!isStop){
        intervalInstance=setInterval(()=>{
             setTime((t)=>t+10)
         },10)
     }else{
         clearInterval(intervalInstance)
     }
     return ()=>clearInterval(intervalInstance);
    },[timerActive,isStop])

    const toggleTimer=()=>{
        if(!timerActive){
            setTimeActive(true);
            setIsStop(false);
        }else{
            setIsStop(!isStop);
        }
    }
    const resetTimer=()=>{
        setTimeActive(false);
        setTime(0)
    }

      return(
            <div className="timer">
              <TimerTop/>
              <TimerMiddle time={time}/>
              <TimerBottom startFunction={toggleTimer} resetFunction={resetTimer} isStop={isStop} />
            </div>
         )
}


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);