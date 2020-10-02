const moment = require('moment');

export const getDateForIndex = (index) => {
  if(index === 0){
    return "Today";
  }else if(index === 1){
    return "Tomorrow";
  } else {
    return moment().add(index, 'days').format('ddd. [the] DD.MM.YY');
  }
};
