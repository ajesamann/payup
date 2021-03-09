export const alertReducer = (state = {show: false, msg: '', color: null}, action) => {
    switch (action.type) {
      case 'TOGGLE_ALERT':
        //toggle the alert
        return {show: !state.show, msg: action.payload, color: action.color};
  
      default:
        return state
    }
};