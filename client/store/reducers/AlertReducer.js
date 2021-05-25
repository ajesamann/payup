export const alertReducer = (state = {show: false, msg: '', color: null}, action) => {
    switch (action.type) {
        case 'ALERT_ON':
            //toggle the alert on
            return {show: true, msg: action.payload, color: action.color};

        case 'ALERT_OFF':
            //toggle the alert off
            return {show: false, msg: null, color: null};
  
      default:
        return state
    }
};