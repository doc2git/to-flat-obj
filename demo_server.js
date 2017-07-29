/** setInterval(()=>{ let count = 0, wh; wh = count++ % 2 ? console.log("what is that ?") : console.log("How to ？"); }, 100); */
let flat = require('./to-flat-obj');
console.log(flat([23, 32, true, 43], false, 2, 34, {23: 32, a: 'sdf  ss'}, 'dksfj'));