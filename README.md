# VeResearch
Applied Blockchain Research

AutoIPFSandBlockchain.js : Iterate through a folder searching for .txt files, uploading to IPFS, and using the IPFS hash as                              data in a VeChainThor Transaction
  - Generation 1.0
    - The files are stored unencrypted on IPFS and the Hashes are unencrypted on chain.
    - Applied Usecase is story auditable files on IPFS, and their references on chain for retreival and concatenation
  
  - Suggested Modifications For Next Generation: 
    - Encrypt IPFS file with PGP or similar 
    - Store object as rows in a CSV: OutputFile[i] = {filename: files[i], IPFSHash: Hash, TXid: transactionHash};
    
AutoIPFSandBlockchain.js : Iterate through a lines in a .txt file, each line as data in a VeChainThor Transaction.
  - Generation 1.0
    - The Lines are stored unencrypted on chain
    - Applied Usecase is UID of individual products that are retreived from a TxID, and are used to reference back-end               database on client site
    Example: https://www.subcontac.com/veapi?search=0x713bfe5cd111cd7cade0977407ff05ed08bf93ec006d1c56dee199c15ca57534
        
        
