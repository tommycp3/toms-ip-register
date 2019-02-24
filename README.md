# toms-ip-register
Hashes files using Node.JS filesystem module then shows you how to store the hash (using crypto.md5 hashing function) through the StoredIPHash.sol contract on the ethereum blockchain.

To-Do - basic functions for MVP
- Create a script that converts .zip files into MD5 32 character hashes. - done
- Write a static contract that can store strings (including hashes) to the ethereum blockchain. - done
- Create registry of links on this readme, (hash, ethereum transaction that stores the hash, where it can be read on etherscan.) - done

To-Do - to add a web interface
- Create wireframe.
- ...



Registry of Zipped files and their associated Ethereum Deployed storedIPHash Contracts.

PLEASE NOTE: A link to the ethereum contract pulled via etherscan that contains their hash is saved to the ethereum public blockchain.

IP1.txt.zip - 
https://etherscan.io/address/0x353cb8bd3f9d4216546d6bfb47cdeab6ae1b3e3d#code

IP2-client-subject.zip - 
https://etherscan.io/address/(contract address on ethereum network)


IP3-

etc.


Process to add a hash to ethereum blockchain of a zipped file.

1. Place zipped file/folder from client into the ipfiles folder following the naming convention IP(number)-(any other text).zip
2. Update name of .zipped file/folder in hasher-md5-functions.js
3. Run hasher-md5-functions.js by typing in terminal "node hasher-md5-functions.js"
4. Take output and update StoredIPHash.sol constant _ipHash string with the name of file and hash from previous step.
5. Deploy contract with remix with compiler set to 0.4.19 and optimization set false/no
https://remix.ethereum.org/#optimize=false&version=soljson-v0.4.19+commit.c4cbbb05.js
6. Verify code with etherscan by copying the code and pasting into etherscan, so that it creates an etherscan link that shows the verified contract code with the constant that includes the hash representing the .zipped file/folder.

This should cost about 5 cents of ether to deploy this contract that saves a state of the hash that can never be changed forever. or as long as ethereum stays around.

And preseto you are done, you have proof you had an idea at a specific time with mathematical proof and a snapshot of your IP.

Welcome to the future of IP Law.