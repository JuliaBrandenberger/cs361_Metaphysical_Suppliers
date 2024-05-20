INSTALLATIONS
You will need to have Deno installed to run the deno command from the command line.
https://docs.deno.com/runtime/manual/getting_started/installation


PROCESS FOR REQUESTING AND RECEIVING INFORMATION
1. Start the server on a port with deno run.
Example: deno run --allow-all MicroAserver.ts 7000
Command line should give you this feedback:
[ "7000" ]
Listening on http://localhost:7000/

2. Start the client with deno run. It will ask you to select a port. Type in the port that matches the port that you chose on the server.
Example: deno run --allow-all MicroAclient.ts 
Choose your port (ex: 8000) 7000

3. Follow the instructions in the terminal where MicroAclient.ts is running. 
Ex: Choose between 'highest', 'product-type' or 'retailer'
If you choose highest, you will be presented with json information on the brands with an eco score of 4 or more.
If you choose product-type, you will then be able to filter suppliers by which products they carry.
If you choose retailer, you will be able to view the stats of a given retailer.

Given that you chose product-type, you will then be able to choose between 'decks-and-books', 'elementals', 'divination', 'decoration'
Given that you chose elementals, for example, you will then be presented with the json of all retailers carrying elemental items.

Given that you chose retailer, you will then be able to choose between 'Amazon', 'Barnes-and-Noble', 'Sacred-Sisters', 'Home-Goods', 'Secret-Garden'.
Given that you chose Sacred Sisters, you will then be presented with the json of information for that retailer. 

JSON FILE
I have supplied you with a json file which contains all of the stats for given retailers. You can edit the json file to change the brands stats.



