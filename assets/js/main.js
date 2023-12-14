/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')
       // Add show-icon to show and hide menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Select each dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Select each button click
    dropdownButton.addEventListener('click', () =>{
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Create a function to display the dropdown
const toggleItem = (item) =>{
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    // Validate if the media query reaches 1118px
    if(mediaQuery.matches){
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)

/*=============== API ACCESS ===============*/
function fetchData(url, elementId, transformFunction, suffix) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            const divElement = document.getElementById(elementId);
            const value = transformFunction(json);
            divElement.textContent = `${value} ${suffix}`;
        })
        .catch(error => console.error(`Error fetching data for ${elementId}:`, error));
}

// Ensure that updateHashrate and updatePrice functions are correctly defined
function updateHashrate(hashrate) {
    const hashrateDiv = document.getElementById("HASHRATE");
    hashrateDiv.textContent = `${hashrate} GH/s`;
}

function updatePrice(price) {
    const priceDiv = document.getElementById("PRICE");
    priceDiv.textContent = `${price}$`;
}

fetchData("https://explorer.fact0rn.io/api/getdifficulty", "GETDIFFICULTY", json => json, "bit");
fetchData("https://explorer.fact0rn.io/api/getconnectioncount", "GETCONNECTIONCOUNT", json => json, "nodes");
fetchData("https://explorer.fact0rn.io/api/getblockcount", "GETBLOCKCOUNT", json => json, "blocks");

fetch("https://explorer.fact0rn.io/ext/getmoneysupply")
    .then(response => response.json())
    .then(json => {
        const divElement = document.getElementById("GETMONEYSUPPLY");
        divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch(error => console.error("Error fetching data for GETMONEYSUPPLY:", error));

fetch("https://explorer.fact0rn.io/ext/getmoneysupply")
    .then(response => response.json())
    .then(json => {
        const divElement = document.getElementById("GETTOTALSUPPLY");
        divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch(error => console.error("Error fetching data for GETTOTALSUPPLY:", error));

const apiUrl = "https://explorer.fact0rn.io/ext/getsummary";

function fetchDataAndUpdate(elementId, updateFunction, property) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const value = data[property];
            updateFunction(value);
        })
        .catch(error => console.error(`Error fetching data for ${elementId}: ${error.message}`));
}

fetchDataAndUpdate("HASHRATE", updateHashrate, "hashrate");
fetchDataAndUpdate("PRICE", updatePrice, "lastPrice");

fetch("https://explorer.fact0rn.io/ext/getmasternoderewardstotal/ELvb8AZRgHmdsDnD1HYFwbSY4UkPhoECCW/64152")
    .then(response => response.json())
    .then(json => {
        const divElement = document.getElementById("TMR");
        divElement.textContent = JSON.stringify(json, null, 2);
    })
    .catch(error => console.error("Error fetching data for TMR:", error));


