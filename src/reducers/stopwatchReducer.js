
const stopWatchInitialState = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
};

 const stopwatch = (state = stopWatchInitialState, action) => {

    switch (action.type) {
        case "RESET_TIMER":

            return {
                ...state,
                timerOn: false,
                timerTime: 0,
                timerStart: Date.now() - state.timerTime,
                timerId: action.timerId
            };
        case 'START_TIMER':
            return {
                ...state,
                timerOn: true,
                timerTime: state.timerTime,
                timerStart: Date.now() - state.timerTime,
                timerId: action.timerId
            };
        case 'STOP_IT': {

            return {
                ...state,
                timerOn: false,
                timerStart: 0
            };
        }

        case 'TICK':
            return { ...state, timerTime: state.timerTime + 1 };
        default:
            return state;
    }
}

export default stopwatch;