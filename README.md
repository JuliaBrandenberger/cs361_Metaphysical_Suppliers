## INSTALLATIONS 

This program requires Deno, a javascript runtime, in order to execute.
You will need to have Deno installed to run the deno command from the command line.
https://docs.deno.com/runtime/manual/getting_started/installation


## PROCESS FOR REQUESTING AND RECEIVING INFORMATION
1. Start the server on a port with deno run.
Example: `deno run --allow-all MicroAserver.ts 7000`
Command line should give you this feedback:
[ "7000" ]
Listening on http://localhost:7000/

2. Your client must make an HTTP request with a path, data and method and you will receive back a json response.

PATH AND DATA
#### /highest
Get retailers with an eco-score of 4 or more.

#### /product-type
Get retailers that carry specific products
- /product-type/decks-and-books
- /product-type/elementals
- /product-type/divination
- /product-type/decoration

#### /retailer
Get specific retailer info
- /retailer/Amazon
- /retailer/Barnes-and-Noble
- /retailer/Sacred-Sisters
- /retailer/Home-Goods
- /retailer/Secret-Garden

METHOD:
Need to provide the 'GET' method

3. RESPONSE:
Client will receive a json response
```
{
  id: int,
  name: string,
  products: string[],
  eco-score: int,
  popularity-score:
}
```
Ex: http://localhost:7000/product-type/elementals
will return
```json
{
  id: 123,
  name: "Amazon",
  products: [
    "tarot",
    "crystals",
    "smudge sticks",
    "runes",
    "oracle decks",
    "charcoal",
    "herbs",
    "books",
    "pendulums",
    "ouija boards"
  ],
  "eco-score": 1,
  "popularity-score": 5
},
{
  id: 111,
  name: "Sacred Sisters",
  products: [
    "home decor",
    "tarot",
    "crystals",
    "smudge sticks",
    "runes",
    "candles",
    "herbs",
    "books",
    "pendulums",
    "ouija boards"
  ],
  "eco-score": 5,
  "popularity-score": 1
},
{
  id: 222,
  name: "Home Goods",
  products: [ "home decor", "crystals", "candles", "books" ],
  "eco-score": 1,
  "popularity-score": 5
},
{
  id: 333,
  name: "The Secret Garden",
  products: [ "crystals", "candles", "herbs" ],
  "eco-score": 4,
  "popularity-score": 2
}
```


JSON FILE
I have supplied you with a json file which contains all of the stats for given retailers.


![sequence](/sequence.svg)


