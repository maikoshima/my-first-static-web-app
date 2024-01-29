fetch("https://ashy-stone-0b6008500.4.azurestaticapps.net/corstest02/corstest02.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("fetch failed");
  });