const fs = require('fs');
const { exit } = require('process');
const file = __dirname + "/indonesia.txt";

if(process.argv.length < 4){
    console.log("usage: node words.js JUMLAH_HURUF CLUE EXCLUDE. contoh node words.js 5 1b,3l,5t abcdef");
    exit();    
}

// var words;
var args = process.argv;
var len = args[2];
var clues = args[3].trim().split(",");
var excludes = [];
if(args.length == 5){
    excludes = args[4].trim().split("");
}

fs.open(file, 'r', (err, fh) => {
    if(err) throw err;

    fs.readFile(fh, (err, data) => {
        var words = data.toString().split("\r\n").filter((value) => {
            value = value.trim();

            return value.length == len;
        });

        for(let i in clues){
            let index = clues[i].match(/[0-9]{1,2}/);
            let huruf = clues[i].match(/[a-z]/i);
            if(index !== null && huruf !== null){
                index = parseInt(index[0]);
                huruf = huruf[0];

                words = words.filter(word => word.substr((index - 1), 1) == huruf);
            }
        }

        if(excludes.length > 0){
            words = words.filter(word => {
                let notFound = true;
                for(let i in excludes){
                    if(word.indexOf(excludes[i]) > -1){
                        notFound = false;
                        break;
                    }
                }

                return notFound;
            });
        }

        console.log(words);
    });
});
