import React from "react";
import { useDispatch, useSelector} from "react-redux";




function StopWatch() {
    /**
     * make state to props
     */
    const allState = useSelector(state => state.stopwatch);
    const timerTime = useSelector(state => state.stopwatch.timerTime);
    const timerOn = useSelector(state => state.stopwatch.timerOn);
    const timerStart = useSelector(state => state.stopwatch.timerStart);
    const timerId = useSelector(state => state.stopwatch.timerId);
    const dispatch = useDispatch();


    /**
     * Function when start and resume button clicked
     * dispatch type START_TIMER
     * @param timerId
     */
    const startTimer = () => {
        const timerId = setInterval(() => dispatch({type: 'TICK'}), 10);
        dispatch({type: 'START_TIMER', timerId});
    };


    /**
     * Function when Resume Button Clicked
     * dispatch type RESET_TIMER
     * make timer reset
     */
    const resetTimer = () => {
        dispatch({type: 'RESET_TIMER'});

    }


    /**
     * Function when Stop Button Clicked
     * dispatch type STOP_IT
     * make timer stop or pause
     */
    const stopTimer = () => {
        dispatch({type: 'STOP_IT'});
    }

    /**
     * Handle stop button with clear interval
     */
    const handleStop = () => {
        stopTimer();
        clearInterval(timerId);


    };

    const centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
        <div className={`stopwatch `}>
            <div className="timer ">
               <div className="row">
                   <div className={`hours time col ${hours > 0 ? 'fill':''}`}>
                       <span> {hours}</span>
                       <span>Hours</span>
                   </div>
                   <div className={`minutes time col ${minutes > 0 ? 'fill':''}`}>
                       <span> {minutes}</span>
                       <span>Minutes</span>
                   </div>
                   <div className={`seconds time col ${seconds > 0 ? 'fill':''}`}>
                       <span> {seconds}</span>
                       <span>Seconds</span>
                   </div>
                   <div className={`multisecond time col ${centiseconds > 0 ? 'fill':''}`}>
                       <span data-testid="centiseconds"> {centiseconds}</span>
                       <span>timer</span>
                   </div>
               </div>

            </div>
            <br/>
                <div className="d-flex justify-content-center btn-timer">
                    {timerOn === false && timerTime === 0 && (
                        <button className={`btn`} title={`Start`} onClick={startTimer}><i className="fa fa-play" aria-hidden="true"></i></button>
                    )}
                    {timerOn === true && (
                        <button className={`btn`} title={`Pause`} onClick={handleStop}><i className="fa fa-pause" aria-hidden="true"></i></button>
                    )}

                    {timerOn === false && timerTime > 0 && (
                        <button className={`btn mr-2`} title={`Resume`} onClick={startTimer}><i className="fa fa-play" aria-hidden="true"></i></button>
                    )}
                    {timerOn === false && timerTime > 0 && (
                        <button className={`btn`} title={`Reset`} onClick={resetTimer}><i className="fa fa-repeat" aria-hidden="true"></i></button>
                    )}
                </div>


        </div>
    )

}

export default StopWatch;
