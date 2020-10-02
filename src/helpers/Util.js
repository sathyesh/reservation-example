const moment = require('moment');

export const getTranslatedDateForIndex = (index, languageData) => {
  const givenDate = moment().add(index, 'days');
  const weekDay = givenDate.isoWeekday();
  const weekDayText = languageData.date.weekdays[weekDay-1] || null;
  if(index === 0){
    return languageData.date.today || "Today";
  } else if(index === 1){
    return languageData.date.tomorrow || "Tomorrow";
  } else {  
    return weekDayText+" "+givenDate.format(' DD.MM.YY') || givenDate.format(' DD.MM.YY');
  }
};
