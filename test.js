var fs = require('fs');
var testMethod = require('./lib/findEmailSubstring.js')

var TEST_DATA_DIR = './data/';

var testList = [

    {
        file:'test00.txt',
        result:'this one has hello. It has hello too.'
    },
    {
        file:'test01.txt',
        result:'hello this hello one has heLLo four hellos. Remember, case insensitive.'
    },
    {
        file:'test02.txt',
        result:'this ante line ante is ante the ante answer. ante up.'
    },
    {
        file:'test03.txt',
        result:'the winner ipsum will Sed vitae congue ipsum go ipsum here Sed vitae congue ipsum for your ipsum amuzement ipsum what ipsum in ipsum the ipsum world? make ipsum it longer ipsum ipsum yea ipsum ipsum'
    },
    {
        file:'test04.txt',
        result:'word'
    },
    {
        file:'test05.txt',
        result:"Bennet's visit, and determining when they should ask him to dinner.    Not all that Mrs. Bennet, however,"
    }
];

var passed=0;
var failed=0;

var runTests = function(tests, done){
    if(!tests.length) return done();

    var test = tests.shift();

    var file = TEST_DATA_DIR+test.file;
    console.log('Running test: ',file);
    fs.readFile(file,function(err,data){
        if(err) throw err;

        var startTime = Date.now();
        var result = testMethod(data.toString());
        var endTime = Date.now();

        if(result===test.result){
            console.log('PASSED!!');
            passed++;
        }else{
            failed++;
            console.log('FAILED!!');
            console.log('...result:',result);
            console.log('...expected:',test.result);
        }
        console.log('...run-time:',endTime-startTime);
        console.log('-------------------');
        runTests(tests,done);
    });
};


runTests(testList,function(){
    console.log('All tests completed. Passed: ' + passed + '  Failed: ' + failed);
});



