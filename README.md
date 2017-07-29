## Intruduce:
#### This to-flat-obj can used to flattening Array, Object, also presudo Array(specail Object),
and transform String, Number, Boolean to key:value and fill them into one-dimensional Object;
#### Now I use it to flat arguments to flat-object just like this:
```
let flat = require('./to-flat-obj');
function example1(){
    let flat-object = flat(arguments);
    //TODO
}
```
OR

```
let flat = require('./to-flat-obj');
let example2 = (...arg)=>{
    let flat-object = flat(arg);
    //TODO
}

```
//example:
console.log(flat([23, 32, true, 43], false, 2, 34, {23: 32, a: 'sdf  ss'}, 'dksfj'));
//output:
/**
{ '2': 2,
  '23': 32,
  '32': 32,
  '34': 34,
  '43': 43,
  true: true,
  false: false,
  a: 'sdf  ss',
  dksfj: 'dksfj' }
**/
```
#### It's clearly, we can use it anyWhere, for any usage;
