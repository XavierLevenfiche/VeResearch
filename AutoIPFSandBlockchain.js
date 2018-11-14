// for read in files and ipfs //
var fs = require('fs');
var path = require('path');
const ipfs = require('ipfs-api')({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var glob = require('glob');
//

// for tx // 
const thorify = require("thorify");
const Web3 = require("web3");
const axios = require('axios');
const solc = require('solc');
const web3 = new Web3();
thorify.thorify(web3, "http://localhost:8669");
//

// setup some array & tx data 
var FileList2 = [];
web3.eth.accounts.wallet.add("your private key");
//

// Iterate through a folder searching for .txt files, uploading to IPFS, and using the IPFS hash as data in a VeChainThor Transaction
PathBuffer = path.join(__dirname + "/");
glob('**/*.txt', function (err, files) {
    if (err) {
        console.log(err);
    } else {
        for (var i=0; i < files.length; i++) {
        FileList3.push(files[i]);
        };
        for (var i=0; i < files.length; i++) {
          
            //console.log(FileList3[i]);
            
            let DataIn = fs.readFileSync(PathBuffer+files[i]);
            DataBuffer = new Buffer.from(DataIn);
            ipfs.add(DataBuffer, function (err, ipfsHash) { 
            
                if(err) throw err;
                var Hash = ipfsHash[0].hash;
                //console.log(Hash);
                
                web3.eth.sendTransaction({
                    from: "your From: Address (related to private key above)",
                    to: "your To: Address", 
                    value: "0", 
                    data: '0x' + Buffer.from(Hash,'ascii').toString('hex')
                  },function(err, transactionHash) {
                    if (err) { 
                        console.log(err); 
                    } else {
                        //console.log(transactionHash);
                        //FileList2[i] = files[i] + ', ' + Hash + ', ' + transactionHash + '\n';
                        FileList2[i] = {filename: files[i], IPFSHash: Hash, TXid: transactionHash}; // store each file info as an object
                        console.log(FileList2[i]);         
                    }
                  });          
                });
            };
        };
    });
