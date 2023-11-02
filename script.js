
fetch("https://explorer.fact0rn.io/api/getdifficulty")
    .then((response) => response.json())
    .then((json) => {
    // Select the div element with the ID "GETDIFFICULTY"
    const divElement = document.getElementById("GETDIFFICULTY");

    // Get the value from the JSON data
    const targetValue = json; // Assuming json contains a number

    // Initialize a counter
    let counter = 0;

    // Set the interval to update the counter
    const interval = setInterval(() => {
        // Update the counter
        counter++;

        // Display the counter value
        divElement.textContent = `${counter} bit`;

        // Check if the counter has reached the target value
        if (counter >= targetValue) {
        clearInterval(interval); // Stop the counting animation
        }
    }, 25); // Change the interval duration as needed
    })
    .catch((error) => {
    console.error("Error fetching data:", error);
    });



// Fetch the data from the URL
fetch("https://explorer.fact0rn.io/api/getconnectioncount")
    .then((response) => response.json())
    .then((json) => {
    // Select the div element with the ID "GETDIFFICULTY"
    const divElement = document.getElementById("GETCONNECTIONCOUNT");

    // Get the value from the JSON data
    const targetValue = json; // Assuming json contains a number

    // Initialize a counter
    let counter = 0;

    // Set the interval to update the counter
    const interval = setInterval(() => {
        // Update the counter
        counter++;

        // Display the counter value
        divElement.textContent = `${counter} nodes`;

        // Check if the counter has reached the target value
        if (counter >= targetValue) {
        clearInterval(interval); // Stop the counting animation
        }
    }, 100); // Change the interval duration as needed
    })
    .catch((error) => {
    console.error("Error fetching data:", error);
    });


    fetch("https://explorer.fact0rn.io/api/getblockcount")
    .then((response) => response.json())
    .then((json) => {
        // Select the div element with the ID "GETMONEYSUPPLY"
        const divElement = document.getElementById("GETBLOCKCOUNT");

        // Get the value from the JSON data
        const targetValue = json; // Assuming json contains a number

        // Initialize a counter
        let counter = 0;

        // Set the interval to update the counter in 100 steps
        const interval = setInterval(() => {
            // Update the counter
            counter += 100; // Update the counter by 100

            // Ensure the counter doesn't exceed the target value
            if (counter > targetValue) {
                counter = targetValue; // Set the counter to the target value
            }

            // Display the counter value
            divElement.textContent = `${counter} blocks`;

            // Check if the counter has reached the target value
            if (counter >= targetValue) {
                clearInterval(interval); // Stop the counting animation
            }
        }, 10); // Change the interval duration to 100 milliseconds
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

    fetch("https://explorer.fact0rn.io/ext/getmoneysupply")
    .then((response) => response.json())
    .then((json) => {
      // Select the div element with the ID "GETDIFFICULTY"
      const divElement = document.getElementById("GETMONEYSUPPLY");

      // Insert the JSON data into the div
      divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    fetch("https://explorer.fact0rn.io/ext/getmoneysupply")
    .then((response) => response.json())
    .then((json) => {
      // Select the div element with the ID "GETDIFFICULTY"
      const divElement = document.getElementById("GETTOTALSUPPLY");

      // Insert the JSON data into the div
      divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

// Define the URL of the API endpoint
const apiUrl = "https://explorer.fact0rn.io/ext/getsummary";

// Function to update the content of the "HASRATE" div
function updateHashrate(hashrate) {
    const hashrateDiv = document.getElementById("HASHRATE");
    hashrateDiv.textContent = `${hashrate} GH/s`;
}

// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Access the hashrate from the JSON response
    const hashrate = data.hashrate;
    updateHashrate(hashrate);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

  // Define the URL of the API endpoint
const apiUrl1 = "https://explorer.fact0rn.io/ext/getsummary";

// Function to update the content of the "PRICE" div
function updatePrice(price) {
    const priceDiv = document.getElementById("PRICE");
    priceDiv.textContent = `${price}$`;
}

// Make a GET request to the API
fetch(apiUrl1)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Access the lastPrice from the JSON response
    const lastPrice = data.lastPrice;
    updatePrice(lastPrice);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

  fetch("https://explorer.fact0rn.io/ext/getmasternoderewardstotal/ELvb8AZRgHmdsDnD1HYFwbSY4UkPhoECCW/64152")
    .then((response) => response.json())
    .then((json) => {
      // Select the div element with the ID "GETDIFFICULTY"
      const divElement = document.getElementById("TMR");

      // Insert the JSON data into the div
      divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    
    

    