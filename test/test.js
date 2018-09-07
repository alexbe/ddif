'use strict';

var expect = require('chai').expect;
var ddif = require('../index');

var feb2018Top5IIHFRanking=[
    {team:'Canada',points:4045},
    {team:'Russia',points:4040},
    {team:'Sweden',points:3850},
    {team:'Finland',points:3820},
    {team:'Czech Republic',points:3740}
];
var may2018ddif={
    '#':201805, //array version
    '^:*.points':[3990,3930,3945,3765], //update values of .points property, 
                                        //it takes indexes from values array 
    '@:4':[{team:'USA',points:3765}],   //replace operation for member with index==4
    '>':['points']                      //sort asc by points
    };

describe('#ddif', function() {
    it('should make readme test', function() {
        var result = ddif.patch(feb2018Top5IIHFRanking,may2018ddif);
        var expected= [
            {team:'Canada',points:3990},
            {team:'Sweden',points:3945},
            {team:'Russia',points:3930},
            {team:'USA',points:3765},
            {team:'Finland',points:3765}
          ];
        expect(result).to.equal(expected);
    });


});