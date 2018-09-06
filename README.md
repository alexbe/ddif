# ddif

Array Diff Creator & Patcher
=========

A small library that allows record updates(CUD) of big array structure into special data diff object.
You can send that ddif object for example to client as JSON object. 
If the client app built with the lib, it's easy to update data using the diff object.

## Installation

  `npm install @becha/ddif`

## Usage
  
    var ddif = require('@becha/ddif');
    var feb2018Top5IIHFRanking=[
        {team:'Canada',points:4045},
        {team:'Russia',points:4040},
        {team:'Sweden',points:3850},
        {team:'Finland',points:3820},
        {team:'Czech Republic',points:3740}
    ];
    //example diff
    var may2018ddif={
        '#':201805, //array version
        '^:*.points':[3990,3930,3945,3765], //update values of .points property, 
                                            //it takes indexes from values array 
        '@:4':[{team:'USA',points:3765}],   //replace operation for member with index==4
        '>':['points']                      //sort asc by points
        };

  With       
    var may2018Top5IIHFRanking = ddif.patch(feb2018Top5IIHFRanking,may2018ddif);
 
  Output should be `[
    {team:'Canada',points:3990},
    {team:'Sweden',points:3945},
    {team:'Russia',points:3930},
    {team:'USA',points:3765},
    {team:'Finland',points:3765}
  ]`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.