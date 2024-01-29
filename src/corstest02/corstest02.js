fetch("./corstest02.json")
  .then(response => {
    response.set("Access-Control-Allow-Origin", "https://nice-pebble-01aeed500.4.azurestaticapps.net");
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("fetch failed");
  });