

const TimerBottom = ({startFunction,resetFunction,isStop}) => {
  return (
    <div className="timer__bottom">
    <div>
      <Button onClick={startFunction} classtoApply="timerStateBtn">{!isStop?"Stop":"Start"}</Button>
      <Button onClick={resetFunction} classtoApply="reset">Reset</Button>
    </div>
    <div>
      <span className="material-icons-outlined">
        crop_free
      </span>    
    </div>
  </div>
  )
}

