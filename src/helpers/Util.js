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
    return weekDayText+" "+givenDate.format(' DD.MM.YY') || givenDate.format('DD.MM.YY');
  }
};

export const getTranslatedDateForDate = (date, languageData) => {
    const momentDate = moment(date, 'YYYY-MM-DD');
    const weekDay = momentDate.isoWeekday();
    const weekDayText = languageData.date.weekdays[weekDay-1] || null;
    return weekDayText+" "+momentDate.format(' DD.MM.YY') || momentDate.format('DD.MM.YY');;
};

export const getDateForIndex = (index) => {
  const givenDate = moment().add(index, 'days');
  return givenDate.format('YYYY-MM-DD');
}
