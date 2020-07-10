import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import "./styles.css";

const START_TIMER = "START_TIMER";
const STOP_IT = "STOP_IT";
const RESUME_IT = "RESUME_IT";
const TICK = "TICK";

const initialState = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                timerOn: true,
                timerTime: state.timerTime,
                timerStart: Date.now() - state.timerTime,
                timerId: action.timerId
            };
        case STOP_IT: {
            return {
                ...state,
                timerOn: false,
                timerStart: 0
            };
        }
        case TICK:
            return { ...state, timerTime: state.timerTime + 1 };
        default:
            return state;
    }
};

const store = createStore(reducer);

class Presentational extends React.Component {
    handleStop = () => {
        clearInterval(this.props.timerId);
        this.props.stopTimer();
    };

    render() {
        const { timerTime } = this.props;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div>
                {hours} : {minutes} : {seconds} : {centiseconds}
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
            const timerId = setInterval(() => dispatch({ type: TICK }), 10);
            dispatch({ type: START_TIMER, timerId });
        },
        stopTimer: () => {
            dispatch({ type: STOP_IT });
        },
        resetTimer: () => dispatch({ type: RESUME_IT })
    };
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Presentational);

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}

