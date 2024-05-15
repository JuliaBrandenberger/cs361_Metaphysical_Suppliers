import data from "./brands.json" with { type: "json" };
// server loads the brands.json

interface RetailerInfo {
  "id": number;
  "name": string;
  "products": string[];
  "eco-score": number;
  "popularity-score": number;
}

type ProductType = "decks and books" | "elementals" | "divination" | "decoration";

const retailers: RetailerInfo[] = data;
// retailers[0] would give amazon object


function handler(req: Request): Response {
  // checks that we have the path, the data and then dispatches to a function to handle that info
  const path = req.url;
  // get url object to use - gives access to its search parameters
  // new URL is a URL object
  const current_url = new URL(path);
  // inspect url object to see what endpoint user went to to get to this page
  // special handling when url set to "highest"
  switch (current_url.pathname) {
    case "/highest": {
      // request method in a browser is always "GET" (when typing a url or clicking on a url)
      if (req.method === "GET") {
        // find the highest and return the json objects 
        return highest();
      } else {
        return new Response("error", {status: 405});
      }
    }
    case "/product-type/decks-and-books": {
      if (req.method === "GET") {
        // find the highest and return the json objects 
        return productType("decks and books");
      } else {
        return new Response("error", {status: 405});
      }
    }
    case "/product-type/elementals": {
      if (req.method === "GET") {
        // find the highest and return the json objects 
        return productType("elementals");
      } else {
        return new Response("error", {status: 405});
      }
    }
    case "/product-type/divination": {
      if (req.method === "GET") {
        // find the highest and return the json objects 
        return productType("divination");
      } else {
        return new Response("error", {status: 405});
      }
    }
    case "/product-type/decoration": {
      if (req.method === "GET") {
        // find the highest and return the json objects 
        return productType("decoration");
      } else {
        return new Response("error", {status: 405});
      }
    }
    // default case
    default: {
      return new Response("error", {status: 404});
    }
  }
}

function highest() {
  // returns the response in form of json objects, returns retailers with eco score of 4 or more
  const highest_rets: RetailerInfo[] = []
  for (const retailer of retailers) {
    if (retailer["eco-score"] > 3) {
      highest_rets.push(retailer);
    }
  }
  // return the response with the objects in highest_rets
  return Response.json(highest_rets);
}

function productType(type: ProductType): Response {
  // returns retailers who carry desired product type
  const return_array: RetailerInfo[] = []

  if (type == "decks and books") {
    for (const retailer of retailers) {
      for (const item of retailer["products"]) { 
        if (item == "tarot" || item == "oracle decks" || item == "books") {
          if (return_array.includes(retailer)) {
            continue;
          }
          return_array.push(retailer);
        }
      }
    }
  }
  else if (type == "elementals") {
    for (const retailer of retailers) {
      for (const item of retailer["products"]) { 
        if (item == "crystals" || item == "smudge sticks" || item == "herbs" || item == "charcoal" || item == "candles") {
          return_array.push(retailer);
        }
      }
    }
  }
  else if (type == "divination") {
    for (const retailer of retailers) {
      for (const item of retailer["products"]) { 
        if (item == "runes" || item == "tarot" || item == "oracle decks" || item == "pendulums" || item == "ouija boards") {
          return_array.push(retailer);
        }
      }
    }
  }
  else if (type == "decoration") {
    for (const retailer of retailers) {
      for (const item of retailer["products"]) { 
        if (item == "home decor" || item == "candles" || item == "crystals") {
          return_array.push(retailer);
        }
      }
    }
  }
  // takes this array of references to objects and turns them into strings
  return Response.json(return_array);
}

if (import.meta.main) {
  // Deno.args is an array of strings
  const input = Deno.args;
  if (input.length > 1) {
    console.error("Too many arguments. Please provide one port.");
    Deno.exit(1);
  }
  if (isNaN(parseInt(input[0]))) {
    console.error("Port is not a number. Please provide a number.");
    Deno.exit(1);
  }
  console.log(input);
  Deno.serve(handler);
}