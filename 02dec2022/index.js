countHours = (year, holidays) => {
  return holidays.map(holiday => {
    let d = new Date(`${holiday}/${year}`);
    if (d.getDay() % 6 != 0) return holiday;
  }).filter(elem => elem).length * 2;
}


// countHours = (y, h) => {
//   return h.map(x => {
//     let d = new Date(`${x}/${y}`);
//     if (d.getDay() % 6 != 0) return x;
//   }).filter(e => e).length * 2;
// }


// countHours = (y, h) => {
//   return h.map(x => {
//     return (new Date(`${x}/${y}`).getDay() % 6 != 0)?x:null;
//   }).filter(e => e).length * 2;
// }


// countHours = (year, holidays) => {
//   return holidays.map(holiday => {
//     return (((new Date(`${holiday}/${year}`)).getDay() % 6 != 0?holiday:null));
//   }).filter(e => e).length * 2;
// }


// countHours = (year, holidays) => {
//   output = 0;
//   for (let i = 0; i < holidays.length; i++) {
//     const holiday = holidays[i];
//     let d = new Date(`${holiday}/${year}`);
//     if (d.getDay() % 6 != 0) output+=2;
//   }
//   return output;
// }

holidays = ['01/06', '04/01', '12/25'];

counterOutput = countHours(2023, holidays);

console.log(`${counterOutput} hours pending`);