fetch("./corstest02.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const myHeaders = new Headers();
    myHeaders.set("Access-Control-Allow-Origin", "https://nice-pebble-01aeed500.4.azurestaticapps.net");
  })
  .catch(error => {
    console.log("fetch failed");
  });