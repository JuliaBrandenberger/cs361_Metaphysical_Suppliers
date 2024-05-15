// When 




function handler(req: Request): Response {
  const path = req.url;
  // get url object to use - gives access to its search parameters
  // new URL is a URL object
  const current_url = new URL(path);
  // inspect url object to see what endpoint user went to to get to this page
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
  // Deno.serve(handler);
}