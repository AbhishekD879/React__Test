

const TimerMiddle = ({time}) => {
    console.log(time)
  return (
    <div className="timer__middle">
    <div className="timer__actual">
      <span className="min">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>m 
      <span className="seconds">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>s 
      <span className="miliSeconds">{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>ms
    </div>
  </div>
  )
}

