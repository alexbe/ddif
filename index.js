'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

//const opRE=/^([#<>]|[@^](?:\d*\:?(?!=\,))*(?:\,\d+)*)(\..+)?$/;
const opRE=/^([#<>]|[@^]((?:\d*\:?(?!=\,))*)((?:\,\d+(?:\:\d+)?)*))(\..+)?$/;
var parser=function(diff){
    var ret={
        version:0,
        sorter:null,
        updater:null,
        splices:[],
        pushes:[]
    };
    for(let op in diff) {
        let m=op.match(opRE);
        if(!m){
            console.error("Ddif error: can't parse",op);
            return null;
        } 
        if(m[1]==='>' || m[1]==='<'){

            ret.sorter=function(gt){
                return function(a, b){(a == b) ? 0 : (a < b) ? gt : -gt;};
            }(m[1]==='>'? 1 : -1);
            continue;
        }
        if(m[1]==='#'){

            ret.version=diff[op];
            continue;
        }        
        if(m[1].length>1){ //specified list items
            //Group 1.	n/a	`^0:1,3,5:7`
            let opList=m[2]?[m[2]]:['0:'];
            if(m[1].substr(0,1)==='-'){ //splices

            } else { // ^ or @

            }
            if(m[2]){//`^0:1,3,5:7`   Group 2.	n/a	`0:1`

            }
            if(m[3]){//`^0:1,3,5:7`   Group 3.	n/a	`,3,5:7`
                opList=opList.concat(m[3].substr(1).split(/\,/));

            }
        }

    }
    return ret;

};
var hashMarkHandler=function(h){
    return;
};



module.exports.patch=function(list, diff, handler) {
    //todo
    let ret=[],;

    for(let op in diff) if(op!=='#') {
            
        }
    return handler(diff['#'],ret);
};

