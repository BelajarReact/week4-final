
const stopWatchInitialState = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
};

export const stopWatchReducer = (state = stopWatchInitialState, action) => {

    switch (action.type) {
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

