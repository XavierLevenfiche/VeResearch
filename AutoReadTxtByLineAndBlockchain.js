// for read in files and ipfs //
var fs = require('fs');
var path = require('path');
const readline = require('readline');
//

// for tx // 
const thorify = require("thorify");
const Web3 = require("web3");
const axios = require('axios');
const solc = require('solc');
const web3 = new Web3();
thorify.thorify(web3, "http://localhost:8669");
//

// setup some array
var FileList2 = [];
// setup private key
web3.eth.accounts.wallet.add({"Your Private Key"});
// setup path
PathBuffer2 = path.join(__dirname + "/TestFolder3/TestData.txt");
const myLines = require('fs').readFileSync(PathBuffer2).toString().match(/^.+$/gm);
//console.log(myLines[1]);
//console.log(myLines.length);

for (i=0; i < myLines.length; i++) {
    var Hash = myLines[i];
    FileList2.push(Hash);
    web3.eth.sendTransaction({
        from: "{"Your From: Address"}",
        to: "{"Your To: Address"}", 
        value: "0", 
        data: '0x' + Buffer.from(Hash,'ascii').toString('hex')
      },function(err, transactionHash) {
        if (err) { 
            console.log(err); 
        } else {
       //     FileList2.push(transactionHash);

       //FileList2[i] = FileList2[i] + transactionHash;
       console.log(transactionHash);
       //console.log(Hash);
        }
      });
    };           
