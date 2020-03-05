module.exports = function getSeason( date ) {
   if (!date) return 'Unable to determine the time of year!';
   date.setMonth(date.getMonth());

   let seasonInMonh = new Map([
      [1, 'winter'],
      [2, 'spring'],
      [3, 'spring'],
      [4, 'spring'],
      [5, 'summer'],
      [6, 'summer'],
      [7, 'summer'],
      [8, 'autumn'],
      [9, 'autumn'],
      [10, 'autumn'],
      [11, 'winter'],
      [0, 'winter']
   ]);
   let month = date.getMonth();

    let dd = {
       y: date.getFullYear(),
       m: date.getMonth(),
       d: date.getDate(),
       h: date.getHours(),
       min: date.getMinutes(),
       s: date.getSeconds(),
       ms: date.getMilliseconds()
    }
    if (dd.s !== 59 && date.setMilliseconds(1001) && date.getSeconds() !== (dd.s + 1)) {
       throw new Error();
    }
    if (dd.min !== 59 && date.setSeconds(61) && date.getMinutes() !== (dd.min + 1)) {
       throw new Error();
    }
    if (dd.h !== 23 && date.setMinutes(61) && date.getHours() !== (dd.h + 1)) {
       throw new Error();
    }
    if (dd.d < 28 && date.setHours(25) && date.getDate() !== (dd.d + 1)) {
       throw new Error();
    }
    if (dd.m !== 11 && date.setDate(32) && date.getMonth() !== (dd.m + 1)) {
       throw new Error();
    }
    date.setMonth(12);
    
    if (date.getFullYear() !== dd.y + 1) {
       throw new Error();
    }

   return seasonInMonh.get(month);
   }
