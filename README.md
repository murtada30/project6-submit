Coffee Tracking Using Block Chain (Fair Trade Coffee)
Prove the authenticity of coffee using the Ethereum blockchain.




UMLs for activity, sequence, data model and state diagrams are added in UML folder


Libraries Used in this project:
- Truffle: It is a development environment, testing framework and asset pipeline for blockchains using the Ethereum. It is used in this project as a framework to manage the development, testing and deployment of block chain contracts.

-Web3: It is used to allow end users to interact with  local or remote ethereum contracts through web interface.

-IPFS was not used in this project



steps on how to run the tests:

1- cd to project directory
2- install required packages:
    npm install
3- run ganache
    ganache-cli -m "adult forward kiwi famous mistake soldier predict undo deal canyon craft crew"
4- Run Truffle:
    truffle develop
    compile
    migrate --reset
    test
6- run the application
    npm run dev



Front End components:

1:Product Overview
    It allow users to fitch information about a product, using multiple attributes
2: Farm Details
    Farmers can use this section to track items using block chain by changing the status from Harvisted, processed, packed and can mark the item for sale
3: Product Details
    This section can be used by distributor, retailer or consumer to buy item, ship item , deliver item and receive item

************************
Contract Deployment:

1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x6c503b897bdf0465241fdd2d55f3320a93d7c27f96938c67ac38d55aee434f71
   > Blocks: 4            Seconds: 58
   > contract address:    0x2DD074ad881820767A0cBfA55aab8DD3F40F10A9
   > block number:        8520081
   > block timestamp:     1620035923
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.49758006
   > gas used:            239894 (0x3a916)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00239894 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00239894 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x268472053bea7d21574631861f8848ed57f4537ee6f804f0d835dc8a7977e4ca
   > Blocks: 2            Seconds: 22
   > contract address:    0x6e14111c8878F3dcA13FF38Ed5a9B789dD02Cf35
   > block number:        8520088
   > block timestamp:     1620036028
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.49397837
   > gas used:            314421 (0x4cc35)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00314421 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x40b41fd8cb44a49aa37886b42a229a510de8aecfa33473b346a527c800f34242
   > Blocks: 2            Seconds: 22
   > contract address:    0x21231A8420eE6fc7594B6C7bD3E3299F3Feb62D0
   > block number:        8520090
   > block timestamp:     1620036058
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.49083416
   > gas used:            314421 (0x4cc35)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00314421 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xa02c6cb9cd62c39c02f264050bb5f3972ebfe227ce679f1a0000f095fcfe7a26
   > Blocks: 2            Seconds: 18
   > contract address:    0xB4CcA63cf4D309B918Fe20e1E27314e084273d2E
   > block number:        8520092
   > block timestamp:     1620036088
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.48768971
   > gas used:            314445 (0x4cc4d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00314445 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x4df36d522ef64d1babc19089cd126a303d1ff586e9f6093a6616a75b3ab11f8f
   > Blocks: 2            Seconds: 17
   > contract address:    0x2bdBa19631699E162C04E61c30A78a99C39B1B16
   > block number:        8520094
   > block timestamp:     1620036118
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.4845455
   > gas used:            314421 (0x4cc35)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00314421 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xe6d75838968e80edb570989aede0249c20854759007049eb319c43acaf0336c2
   > Blocks: 1            Seconds: 18
   > contract address:    0x39E89Dd5650F43a1b2907420474D109b598d18aA
   > block number:        8520096
   > block timestamp:     1620036148
   > account:             0xD7B982F760AD5516b0e60Ff2ABBbC76B6e20Ce98
   > balance:             37.46758393
   > gas used:            1696157 (0x19e19d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01696157 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02953865 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.03193759 ETH
