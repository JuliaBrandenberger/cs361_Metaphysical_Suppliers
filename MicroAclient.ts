const port = prompt("Choose your port (ex: 8000)");
if (port) {
  if (isNaN(parseInt(port))) {
    console.error(`Invalid argument: ${port}`);
    Deno.exit(1);
  }
}

function get_url(path1: string, path2: string | null): string {
  if (path1 === "highest") {
    return "http://localhost:"  + port + "/" + path1;
  }
  return "http://localhost:"  + port + "/" + path1 + "/" + path2;
}

let url: URL; 
let pathpt1: string | null;
let pathpt2: string | null;

pathpt1 = prompt("Choose between 'highest', 'product-type' or 'retailer'");
if (pathpt1 === "highest") {
  pathpt2 = "";
  url = new URL(get_url(pathpt1, pathpt2));
} else if (pathpt1 === "product-type") {
  pathpt2 = prompt("Choose between 'decks-and-books', 'elementals', 'divination', 'decoration'");
  if (pathpt2 != "decks-and-books" && pathpt2 != "elementals" && pathpt2 != "divination" && pathpt2 != "decoration") {
    console.error(`Invalid argument: ${pathpt2}`);
    Deno.exit(1);
  }
} else if (pathpt1 === "retailer") {
  pathpt2 = prompt("Choose between 'Amazon', 'Barnes-and-Noble', 'Sacred-Sisters', 'Home-Goods', 'Secret-Garden'");
  if (pathpt2 != "Amazon" && pathpt2 != "Barnes-and-Noble" && pathpt2 != "Sacred-Sisters" && pathpt2 != "Home-Goods" && pathpt2 != "Secret-Garden") {
    console.error(`Invalid argument: ${pathpt2}`);
    Deno.exit(1);
  }
} else {
  console.error(`Invalid argument: ${pathpt1}`);
  Deno.exit(1);
}


url = new URL(get_url(pathpt1, pathpt2));
// console.log(url)
// to change the the defaults, send post request
// set the url to a new value
// url.searchParams.set("greeting", "greetings ");
// sending request to server, our new url gets sent
const resp = await fetch(url, {method: "GET"});
console.log(await resp.json());

// const resp = await fetch(baseurl + “/skincare_info?id=example_brand”,
// {method: "GET"});