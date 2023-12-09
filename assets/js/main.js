/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*==================== API Request ====================*/
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

/*==================== API Request ====================*/
$(document).ready(function () {
    // Function to perform the calculation
    function calculateValue(balance, marketLastPrice) {
        return (balance * marketLastPrice).toFixed(2);
    }

    // Function to update the value on the webpage
    function updateValueOnPage(valueInDollars) {
        $('#valueInDollars').text('' + valueInDollars);
    }

    // Function to write the value to a text file using AJAX
    function writeValueToFile(valueInDollars) {
        $.ajax({
            url: 'write_to_file.php', // replace with your server-side script
            method: 'POST',
            data: { value: valueInDollars },
            success: function (response) {
                console.log('Value written to file successfully');
            },
            error: function (xhr, status, error) {
                console.error('Failed to write value to file:', status, error);
            }
        });
    }

    // Declare balance outside of the AJAX request for it to be accessible in both requests
    let balance;

    // Make the first AJAX request to get the wallet balance for Wallet-Balance2
    $.ajax({
        url: "https://explorer.fact0rn.io/ext/getbalance/fact1qm3nvrxdj0v8v0ecchjprvkt72tja3fvj6vu2hm",
        cache: false,
        success: function (balanceHtml) {
            balance = parseFloat(balanceHtml);
            $("#Wallet-Balance2").append(balance);

            // Make the second AJAX request to get the market last price
            $.ajax({
                url: 'https://xeggex.com/market/FACT_USDT',
                method: 'GET',
                success: function (data) {
                    // Extract the market last price using jQuery
                    const marketLastPriceText = $(data).find('span.marketlastprice').text();
                    const marketLastPrice = parseFloat(marketLastPriceText).toFixed(2);

                    // Perform the calculation
                    const valueInDollars = calculateValue(balance, marketLastPrice);

                    // Display the value on the webpage
                    updateValueOnPage(valueInDollars);

                    // Write the value to a text file using AJAX
                    writeValueToFile(valueInDollars);

                    // Display the market last price on the webpage
                    $('#marketLastPrice').text('' + marketLastPrice);
                },
                error: function (xhr, status, error) {
                    console.error('AJAX request for market last price failed:', status, error);
                }
            });
        },
        error: function (xhr, status, error) {
            console.error('AJAX request for Wallet-Balance2 failed:', status, error);
        }
    });

    // Make the third AJAX request to get the wallet balance for Wallet-Balance3
    $.ajax({
        url: 'https://apilist.tronscanapi.com/api/account/wallet?address=TSeMpubcvgaQtxZJyaUjKVjEVRK9CqxwJW',
        method: 'GET',
        success: function (data) {
            const balance = data.data[1].balance;
            const formattedBalance = parseFloat(balance).toFixed(2);
            document.getElementById('Wallet-Balance3').textContent = formattedBalance;
        },
        error: function (xhr, status, error) {
            console.error('AJAX request for Wallet-Balance3 failed:', status, error);
        }
    });
});

/*==================== Progressbar ====================*/
$(document).ready(function () {
    // Function to perform the calculation
    function calculateDonatedAmount(balance, marketLastPrice) {
        return (balance * marketLastPrice).toFixed(2);
    }

    // Function to update the progress bar
    function updateProgressBar(progressBarId, percentageElemId, donatedAmountElemId, valueInDollars, goal) {
        const donatedPercentage = (valueInDollars / goal) * 100;

        const progressBar = $(`#${progressBarId}`);
        progressBar.find('.progress-bar-inner').css('width', `${donatedPercentage > 100 ? 100 : donatedPercentage}%`);

        $(`#${percentageElemId}`).text(`${Math.floor(donatedPercentage)}% - `);
        $(`#${donatedAmountElemId}`).text(`${valueInDollars} $ / ${goal} $`);
    }

    // Fetch initial wallet balance from Wallet-Balance2
    $.ajax({
        url: 'https://explorer.fact0rn.io/ext/getbalance/fact1qm3nvrxdj0v8v0ecchjprvkt72tja3fvj6vu2hm',
        cache: false,
        success: function (balanceHtml) {
            const initialWalletBalance = parseFloat(balanceHtml);

            // Fetch market last price
            $.ajax({
                url: 'https://xeggex.com/market/FACT_USDT',
                method: 'GET',
                success: function (data) {
                    // Extract the market last price using jQuery
                    const marketLastPriceText = $(data).find('span.marketlastprice').text();
                    const marketLastPrice = parseFloat(marketLastPriceText).toFixed(2);

                    // Update progress bar for Wallet-Balance2
                    updateProgressBar('progress-bar', 'percentage', 'donatedAmount', calculateDonatedAmount(initialWalletBalance, marketLastPrice), 60000);

                    // Make the third AJAX request to get the wallet balance for Wallet-Balance3
                    $.ajax({
                        url: 'https://apilist.tronscanapi.com/api/account/wallet?address=TSeMpubcvgaQtxZJyaUjKVjEVRK9CqxwJW&asset_type=1',
                        method: 'GET',
                        success: function (data) {
                            const balance = parseFloat(data.data[1].balance);
                            const goalBalance3 = 45000;
                            $('#Wallet-Balance3').text(balance.toFixed(2));

                            // Update progress bar for Wallet-Balance3
                            updateProgressBar('progress-bar-balance3', 'percentage-balance3', 'donatedAmount-balance3', calculateDonatedAmount(balance, 1), goalBalance3, 'USDT');
                        },
                        error: function (xhr, status, error) {
                            console.error('AJAX request for Wallet-Balance3 failed:', status, error);
                        }
                    });
                },
                error: function (xhr, status, error) {
                    console.error('AJAX request for market last price failed:', status, error);
                }
            });
        },
        error: function (xhr, status, error) {
            console.error('AJAX request for Wallet-Balance2 failed:', status, error);
        }
    });
});

