/** setInterval(()=>{ let count = 0, wh; wh = count++ % 2 ? console.log("what is that ?") : console.log("How to ？"); }, 100); */
(function () {
    let obj = {};
    let type = (x) => {
        return Object.prototype.toString.call(x);
    };
    let isLeaf = (x) => {
        let leaf = ["[object Number]", "[object String]", "[object Boolean]", null];
        return leaf.includes(type(x));
    };
    let isTrunk = (x) => {
        let trunk = ["[object Object]", "[object Array]"];
        return trunk.includes(type(x));
    };
    let assign = (x) => {
        for (var k in x) {
            if (isLeaf(x[k])) {
                if(type(x)=="[object Object]"){
                    obj[k] = x[k];
                }else if(type(x)=="[object Array]"){
                    obj[x[k]] = x[k];
                }
            } else if (isTrunk(x[k])) {
                assign(x[k]);
            } else {
                obj[defaultKey.toString()] = defaultValue;
            }
        }
        return obj;
    };

    let ignite = (x, defaultKey, defaultValue) => {
        let filename = __filename.match(/([\w\._-]+)\.js$/)[1]
        defaultValue = defaultValue || filename;
        defaultKey = defaultKey || filename;
        if (isLeaf(x)) {
            obj[x.toString()] = x;
        } else if (isTrunk(x)) {
            assign(x);
        } else {
            obj[defaultKey.toString()] = defaultValue;
        }
        return obj;
    };
    let flat = (...arg) => {
        if (arg.length == 0) {
            return ignite();
        } else if (arg.length == 1) {
           obj = assign(arg[0])
        } else if (arg.length >= 2) {
            for (var k in arg) {
                obj = ignite(arg[k]);
            }
        }
        return obj
    };
    // console.log(flat('line80',2,3,6,8,{'str':'abcsdsf113', 'boolean':true, 'num':123, }, {2:3,88:99,1000:2000}, [33, 77,78,82]));
    module.exports = flat;
})();
