import React from "react";
import {connect} from 'react-redux';






class StopWatch extends React.Component{


    handleStop = () => {
        clearInterval(this.props.timerId);
        this.props.stopTimer();
    };

    render() {
        const {timerTime,timerOn} = this.props;

        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        console.log(timerOn)
        return (
            <div>
                {hours} x:x {minutes} x:x {seconds} x:x {centiseconds}
                <br />

                {this.props.timerOn === false && this.props.timerTime === 0 && (
                    <button onClick={this.props.startTimer}>Start</button>
                )}
                {this.props.timerOn === true && (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                {this.props.timerOn === false && this.props.timerTime > 0 && (
                    <button onClick={this.props.startTimer}>Resume</button>
                )}
                {this.props.timerOn === false && this.props.timerTime > 0 && (
                    <button onClick={this.props.resetTimer}>Reset</button>
                )}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {

        timerOn: state.timerOn,
        timerStart: state.timerStart,
        timerTime: state.timerTime,
        timerId: state.timerId
    };
};
const mapDispatchToProps = dispatch => {

    return {
        startTimer: () => {
            const timerId = setInterval(() => dispatch({ type: 'TICK' }), 10);
            dispatch({ type: 'START_TIMER', timerId });
        },
        stopTimer: () => {
            dispatch({ type: 'STOP_IT' });
        },
        resetTimer: () => dispatch({ type: 'RESUME_IT' })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StopWatch);